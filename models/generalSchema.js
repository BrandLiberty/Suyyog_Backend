import mongoose from "mongoose";
import multer from "multer";
import path from 'path'
const __dirname = path.resolve(path.dirname(''))
const IMAGE_PATH = './uploads/image'
const DOCUMENT_PATH = './uploads/document'

const generalSchema = new mongoose.Schema({
    name: {
        type: String
    },
    mobileNumber: {
        type: Number
    },
    address: {
        type: String
    },
    adharNo: {
        type: Number
    },
    panNo: {
        type: String
    },
    nonCriminalfile: {
        type: String
    },
    tenthCertificateFile: {
        type: String
    },
    image : {
        type : String
    },
    
}, {
    timestamps: true
})

try {
    let imageStorage = multer.diskStorage({
        destination: (req, file, cb) => {
            cb(null, path.join(__dirname, IMAGE_PATH))
        },
        filename: (req, file, cb) => {
            const uniqueSuffix = new Date().getTime();
            cb(null, file.fieldname + '-' + uniqueSuffix)
        }
    })
    generalSchema.statics.uploadImage = multer({ storage: imageStorage }).single('image')
    generalSchema.statics.uploadImages = multer({ storage: imageStorage }).array('images')
    generalSchema.statics.imagePath = IMAGE_PATH
    generalSchema.statics.documentPath = DOCUMENT_PATH
} catch (error) {
    console.log("MULTER SCHEMA ERROR", error);
}

const General = mongoose.model('General', generalSchema)
export default General