import mongoose from "mongoose";
import multer from "multer";
import path from 'path'
import Customer from './CustomerSchema.js'
import Product from './ProductSchema.js'
import TermsCondition from './TermsConditionSchema.js'
const __dirname = path.resolve(path.dirname(''))
const DOC_PATH = './uploads/document'

const QuotationSchema = new mongoose.Schema({
    quotationDate: {
        type: Date
    },
    quotationNo: {
        type: Number,
        required: true,
        unique: true
    },
    customer: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Customer'
    },
    purchaseProduct: [{
        productData: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Product'
        },
        quantity: {
            type: String
        },
        price: {
            type: String
        },
        description: {
            type: String
        },
        discountInPercetage : {
            type: String,
            default: '0'
        }
    }],
    otherCharges: {
        Other_Amount: {
            type: String,
            default: '0'
        },
        GST: {
            type: String,
            default: '0'
        },
        Other_Label: {
            type: String,
            default: 'Other_Amount'
        }
    },
    termsConditon: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'TermsCondition'
        }
    ],
    Quotedocument: {
        type: String
    },
    amountDue: {
        type: String
    },
    totalGst: {
        type: String
    },
}, {
    timestamps: true
})

try {
    let docStorage = multer.diskStorage({
        destination: (req, file, cb) => {
            cb(null, path.join(__dirname,DOC_PATH))
        },
        filename: (req, file, cb) => {
            const uniqueSuffix = new Date().getTime();
            cb(null, file.originalname + '-' + uniqueSuffix)
        }
    })
   
    QuotationSchema.statics.uploadDoc = multer({ storage: docStorage }).single('Quotedocument')
    QuotationSchema.statics.docPath = DOC_PATH


} catch (error) {
    console.log("MULTER SCHEMA ERROR", error);
}

const Quotation = mongoose.model('Quotation', QuotationSchema);

export default Quotation