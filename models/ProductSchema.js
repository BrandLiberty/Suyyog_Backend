import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema({
    productName: {
        type: String
    },
    price : {
        type : String
    },
    unit : {
        type : String
    },
    gst : {
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

const Product = mongoose.model('Product', ProductSchema);

export default Product