import mongoose from "mongoose";
import Customer from './CustomerSchema.js'
import Product from './ProductSchema.js'
import Terms from './TermsConditionSchema.js'

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
        }
    }],
    otherCharges: {
        Other_Amount: {
            type: String
        },
        GST: {
            type: String
        },
        Other_Label: {
            type: String
        }
    },
    termsConditon: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Terms'
        }
    ],
    document: {
        type: String
    },
    amountDue : {
        type : String
    }
}, {
    timestamps: true
})
const Quotation = mongoose.model('Quotation', QuotationSchema);

export default Quotation