import mongoose from "mongoose";

const CustomerSchema = new mongoose.Schema({
    name: {
        type: String
    },
    companyName: {
        type: String
    },
    phone: {
        type: Number
    },
    email: {
        type: String
    },
    address: {
        type: String
    },
    info: {
        type: String
    },
    GSTINNo: {
        type: String
    },
    state: {
        type: String
    },
    shipmentAddress: {
        type: String
    },
    product: [
        {
            quatity: {
                type: Number
            },
            name: {
                type: String
            },
            price: {
                type: Number
            },
            description: {
                type: String
            }
        }
    ]
}, {
    timestamps: true
})

const Customer = mongoose.model('Customer', CustomerSchema);

export default Customer