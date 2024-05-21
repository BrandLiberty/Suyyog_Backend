import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema({
    name: {
        type: String
    },
    price : {
        type : String
    },
    unitOfMeasure : {
        type : String
    },
    gstPercentage : {
        type : Number
    },
    description : {
        type : String
    },
    hsn : {
        type : String
    }
},{
    timestamps : true
})

const Product = mongoose.model('Admin', ProductSchema);

export default Product