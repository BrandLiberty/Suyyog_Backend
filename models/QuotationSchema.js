import mongoose from "mongoose";

const QuotationSchema = new mongoose.Schema({
    customerName: {
        type: String
    },
    purchaseProduct: [
        {
            name: {
                type: String
            },
            price: {
                type: String
            },
        }
    ],
    OtherCharges: {
        amount: {
            type: Number
        },
        tax: {
            type: Boolean
        },
        label: {
            type: String
        }
    },
    termsConditon: [
        {
            type : {
                type : String
            },
            value : {
                type : String
            }
        }
    ],
    document : {
        type : String
    }
}, {
    timestamps: true
})
const Quotation = mongoose.model('Admin', QuotationSchema);

export default Quotation