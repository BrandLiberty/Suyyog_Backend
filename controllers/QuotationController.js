import Quotation from '../models/QuotationSchema.js'

export const getQuotationNumber = async (req, res) => {
    console.log("API : '/quotation/quotation-number")
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
    console.log("API : '/quotation/add-quotation")
    try {
        console.log("REQ BODY ", req.body);
        const { quotationNo } = req.body
        let quotation = await Quotation.findOne({ quotationNo: quotationNo })
        if (!quotation) {
            quotation = await Quotation.create({ quotationNo: quotationNo })
        }
        await Quotation.findByIdAndUpdate(quotation._id, req.body, { new: true })
        let quotations = await Quotation.find({})
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
export const getQuotationInfo = async (req, res) => {
    console.log("API : '/quotation/get-quotation")
    try {
        const quotation = await Quotation.find({});
        res.status(200).json({
            message: "Quotation Data Added",
            data: quotation
        });
    } catch (err) {
        res.status(500).json({
            message: "Internal Server Error"
        })
    }
}
