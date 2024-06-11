import mongoose from 'mongoose';
import multer from "multer";
import path from 'path'
const __dirname = path.resolve(path.dirname(''))
const LOGO_PATH = './uploads/logo'
const SIGN_PATH = './uploads/signatures'

const superAdminSchema = new mongoose.Schema({
    userName : {
        type : String,
        unique : true,
        default : "suyog@Electronics.com"
    },
    password : {
        type : String,
        default : "Suyog@1906"
    },
    businessName: {
        type: String
    },
    companyName: {
        type: String
    },
    email: {
        type: String
    },
    phone: {
        type: String
    },
    address: {
        type: String
    },
    GSTINNo: {
        type: String
    },
    state: {
        type: String
    },
    businessCategory: {
        type: String
    },
    paymentInfo: {
        type: String
    },
    logo: {
        type: String
    },
    signature: {
        type: String,
        default: ''
    },
    termsCondition: [
        {
            selectedOption: {
                type: String,
            },
            Note : {
                type : String,
            }
        }
    ]
}, {
    timestamps: true
})
try {
    let logoStorage = multer.diskStorage({
        destination: (req, file, cb) => {
            cb(null, path.join(__dirname, LOGO_PATH))
        },
        filename: (req, file, cb) => {
            const uniqueSuffix = new Date().getTime();
            cb(null, file.fieldname + '-' + uniqueSuffix)
        }
    })
    let signStorage = multer.diskStorage({
        destination: (req, file, cb) => {
            cb(null, path.join(__dirname, SIGN_PATH))
        },
        filename: (req, file, cb) => {
            const uniqueSuffix = new Date().getTime();
            cb(null, file.fieldname + '-' + uniqueSuffix)
        }
    })
    superAdminSchema.statics.uploadLogo = multer({ storage: logoStorage }).single('logo')
    superAdminSchema.statics.logoPath = LOGO_PATH
    superAdminSchema.statics.uploadSign = multer({ storage: signStorage }).single('signature')
    superAdminSchema.statics.signPath = SIGN_PATH


} catch (error) {
    console.log("MULTER SCHEMA ERROR", error);
}

const SuperAdmin = mongoose.model('SuperAdmin', superAdminSchema)

export default SuperAdmin