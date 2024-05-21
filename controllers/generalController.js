import General from "../models/generalSchema.js"
import path from 'path'
const __dirname = path.resolve(path.dirname(''))
import * as fs from 'fs'


export const serverCheck = (req, res) => {
    return res.json({
        message: 'SERVER RUNNING'
    })
}
export const editProfile = async (req, res) => {
    console.log("API : /general");
    try {
        
        // console.log("NAME ",name);
        // let general = await General.findOne({name : name})
        // if(!general){
        //     general = await General.create({name : name})
        // }
        // return res.status(200).json({
        //     messgae : "Image Uploaded Succesfullly"
        // })
        General.uploadImages(req, res,async( err )=> {
            if (err) {
                console.log("MULTER ERROR", err);
                return res.status(500).json({
                    messgae: 'Internal Server Error'
                })
            }
            console.log("FILES ", req.files[0],req.files[1],req.files[2])
            const {name} = req.body
            let general = await General.findOne({ name: name })
            if (!general) {
                general = await General.create({ name: name })
            }
            await general.save()
            return res.status(200).json({
                messgae: "Image Uploaded Succesfullly"
            })
        })
    } catch (error) {
        console.log("ERRO IN EDIT PROFILE ", error);
        return res.status(500).json({
            messgae: 'Internal Server Error'
        })
    }
}