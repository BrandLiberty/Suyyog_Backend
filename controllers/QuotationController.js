import Quotation from '../models/QuotationSchema.js'
import path from 'path'
import * as fs from 'fs'
const __dirname = path.resolve(path.dirname(''));

export const getQuotationNumber = async (req, res) => {
    console.log("API : '/superadmin/quotation/quotation-number")
    try {
        const lastQuotation = await Quotation.findOne().sort({ quotationNo: -1 });
        const nextQuotationNumber = lastQuotation ? lastQuotation.quotationNo + 1 : 1;
        res.status(200).json({
            message: 'Quotation Number Fetched Succsessfully',
            data: nextQuotationNumber
        });
    } catch (error) {
        console.log("ERROR IN Getting Quotation Number ", err);
        res.status(500).json({
            message: "Internal Server Error"
        })
    }
}
export const addQuotation = async (req, res) => {
    console.log("API : '/superadmin/quotation/add-quotation")
    try {
        console.log("REQ BODY ", req.body);
        const { quotationNo } = req.body
        let quotation = await Quotation.findOne({ quotationNo: quotationNo })
        if (!quotation) {
            quotation = await Quotation.create({ quotationNo: quotationNo })
        }
        await Quotation.findByIdAndUpdate(quotation._id,
            { ...req.body, otherCharges: req.body.otherCharges === '' ? null : req.body.otherCharges},
            { new: true })
        let quotations = await Quotation.find()
            .populate('customer') // Populates the customer field
            .populate('purchaseProduct.productData') // Populates the product data in purchaseProduct
            .populate('termsConditon'); // Populates the terms and conditions field

        res.status(200).json({
            message: "Quotation Added Successfully",
            data: quotations
        })
    } catch (error) {
        console.log("ERROR IN Adding Quotation ", error);
        res.status(500).json({
            message: "Internal Server Error"
        })
    }
}
export const addQuotationDoc = async (req, res) => {
    console.log("API : /superadmin/quotation/add-quotation-doc");
    try {
        Quotation.uploadDoc(req, res, async (err) => {
            if (err) {
                console.log("MULTER ERROR", err);
                return res.status(500).json({
                    messgae: 'Internal Server Error'
                })
            }
            console.log("body ", req.body)
            console.log("FILE ", req.file)
            const { quotationNo } = req.body
            let quotation = await Quotation.findOne({ quotationNo: quotationNo })
            if (req.file && quotation.Quotedocument !== '' && quotation.Quotedocument !== undefined) {
                fs.unlinkSync(path.join(__dirname, quotation.Quotedocument))
            }
            if (req.file) {
                quotation.Quotedocument = path.join(Quotation.docPath, req?.file?.filename)
            }
            console.log("QUOTATION IS ", quotation);
            if (quotation.otherCharges === '') {
                console.log("PASSING THROUGH HERE");
                quotation.otherCharges = null
            }
            await quotation.save()
            Quotation.findOne({ quotationNo: quotationNo })
                .then(quotation => {
                    console.log("Doc Updated ", quotation)
                    return res.status(200).json({
                        message: 'Doc Updated Successfully',
                        data: quotation
                    })
                }).catch(err => {
                    console.log("updating doc error", err)
                })
        })
    } catch (error) {
        console.log("ERROR IN Document Upload ", error);
        return res.status(500).json({
            messgae: 'Internal Server Error'
        })
    }
}
export const getQuotationInfo = async (req, res) => {
    console.log("API : '/superadmin/quotation/get-quotation")
    try {
        const quotations = await Quotation.find()
            .populate('customer') // Populates the customer field
            .populate('purchaseProduct.productData') // Populates the product data in purchaseProduct
            .populate('termsConditon'); // Populates the terms and conditions field

        console.log('Quotations with details:', quotations);
        res.status(200).json({
            message: "Fetch Quotation Details Successfully",
            data: quotations
        })
    } catch (error) {
        console.error('Error fetching quotations:', error);
        res.status(500).json({
            message: "Internal Server Error"
        })
    }
};
export const deleteQuotationInfo = async (req, res) => {
    console.log("API : '/superadmin/quotation/delete-quotation")
    try {
        console.log("REQ BODY ", req.body);
        const { id } = req.body
        const quotation = await Quotation.findOne({ _id: id })
        if (quotation) {
            await Quotation.findByIdAndDelete(quotation._id, req.body, { new: true })
        }
       
        let quotations = await Quotation.find()
        .populate('customer') // Populates the customer field
        .populate('purchaseProduct.productData') // Populates the product data in purchaseProduct
        .populate('termsConditon'); // Populates the terms and conditions field
        res.status(200).json({
            message: "Quotation Deleted Successfully",
            data: quotations
        })
    } catch (err) {
        console.log("ERROr IN DELETED QUOTATION ", err);
        res.status(500).json({
            message: "Internal Server Error"
        })
    }
}
