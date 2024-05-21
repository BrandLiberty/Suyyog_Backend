import mongoose from 'mongoose';

const SuperAdminSchema = new mongoose.Schema({
    
    adminId: {
        type : String
    },
    password : {
        type : String
    },
    businessName : {
        type : String
    },
    compnayName : {
        type : String
    },
    email : {
        type : String
    },
    phone : {
        type : String
    },
    address : {
        type : String
    },
    GSTINNo : {
        type : String
    },
    state : {
        type : String
    },
    businessCategory : {
        type : String
    },
    paymentInfo : {
        type : String
    },
    logo : {
        type : String
    },
    signature : {
        type : String
    },
    termsCondition : [
        {
            type : String,
            enum : ['quotation','invoice','purchaseOrder']
        }
    ]
}, {
    timestamps : true
})

const SuperAdmin = mongoose.model('SuperAdmin',SuperAdminSchema)

export default SuperAdmin