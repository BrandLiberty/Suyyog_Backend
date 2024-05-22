import SuperAdmin from '../models/SuperAdminSchema.js'
import path from 'path'
import * as fs from 'fs'
const __dirname = path.resolve(path.dirname(''));

export const addBusinessInfo = async (req, res) => {
    console.log("API : '/superadmin/add-business-info")
    try {
        console.log("REQ BODY ", req.body);
        const { businessName } = req.body
        let superadminData = await SuperAdmin.find({})
        if (superadminData.length > 0) {
            await SuperAdmin.findByIdAndUpdate(superadminData[0]._id, req.body, { new: true })
            let superadmin = await SuperAdmin.find({})
            res.status(200).json({
                message: "SuperAdmin Data Info Added Successfully",
                data: superadmin
            })
            return
        }
        superadminData = await SuperAdmin.create({ businessName: businessName })
        await SuperAdmin.findByIdAndUpdate(superadminData._id, req.body, { new: true })
        let superadmin = await SuperAdmin.find({})
        res.status(200).json({
            message: "SuperAdmin Data Info Added Successfully",
            data: superadmin
        })
    } catch (err) {
        console.log("ERROR IN ADDING Super Admin Info", err);
        res.status(500).json({
            message: "Internal Server Error"
        })
    }
}
export const addBussinessLogo = async (req, res) => {
    console.log("API : '/superadmin/add-business-logoasdf");
    try {
        SuperAdmin.uploadLogo(req, res, async err => {
            if (err) {
                console.log("MULTER ERROR  ", err);
                return res.status(500).json({
                    message: "INTERNAL SERVER ERROR"
                })
            }
            console.log("FILE ", req.file)
            let superadminData = await SuperAdmin.find({})
            if (req.file && superadminData[0].logo !== '' && superadminData[0].logo !== undefined) {
                fs.unlinkSync(path.join(__dirname, superadminData[0]?.logo))
            }
            if (req.file) {
                superadminData[0].logo = path.join(SuperAdmin.logoPath, req?.file?.filename)
            }
            await superadminData[0].save()
            await SuperAdmin.findByIdAndUpdate(superadminData[0]._id, req.body, { new: true })
            SuperAdmin.find({})
                .then(superadmin => {
                    console.log("LOgo Updated ", superadmin)
                    return res.status(200).json({
                        message: 'Logo Updated Successfully',
                        data: superadmin
                    })
                })
                .catch(err => {
                    console.log("ERROR UPDATING Logo ", err)
                    return res.status(400).json({
                        message: 'Internal Server Error',
                    })
                })
        })
    }
    catch (error) {
        console.log("ERROR IN LOgo  ", error);
        return res.status(500).json({
            messgae: 'Internal Server Error'
        })
    }
}
export const addBussinessSign = async (req, res) => {
    console.log("API : '/superadmin/add-business-sign");
    try {
        SuperAdmin.uploadSign(req, res, async err => {
            if (err) {
                console.log("MULTER ERROR  ", err);
                return res.status(500).json({
                    message: "INTERNAL SERVER ERROR"
                })
            }
            console.log("FILE SIGN", req.file)
            let superadminData = await SuperAdmin.find({})
            if (req.file && superadminData[0].signature !== '' && superadminData[0].signature !== undefined) {
                fs.unlinkSync(path.join(__dirname, superadminData[0]?.signature))
            }
            await SuperAdmin.findByIdAndUpdate(superadminData[0]._id,
                {
                    ...req.body,
                    signature: req.file ? path.join(SuperAdmin.signPath, req?.file?.filename) : superadminData[0]?.signature
                }, { new: true })
            SuperAdmin.find({})
                .then(upUser => {
                    console.log("Signature ", upUser)
                    return res.status(200).json({
                        message: 'Signature Updated Successfully',
                        data: upUser
                    })
                })
                .catch(err => {
                    console.log("ERROR UPDATING SIGNATURE ", err)
                    return res.status(400).json({
                        message: 'Internal Server Error',
                    })
                })
        })

    } catch (error) {
        console.log("ERRO IN EDIT PROFILE ", error);
        return res.status(500).json({
            messgae: 'Internal Server Error'
        })
    }
}
export const getBusinessInfo = async (req, res) => {
    console.log("API : '/superadmin/get-business-info")
    try {
        const superAdmin = await SuperAdmin.find({});
        res.status(200).json({
            message: "Super Admin Data",
            data: superAdmin
        });
    } catch (err) {
        res.status(500).json({
            message: "Internal Server Error"
        })
    }
}