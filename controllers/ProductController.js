import Product from '../models/ProductSchema.js'

export const addProductInfo = async (req, res) => {
    console.log("API : '/superadmin/add-product")
    try {
        console.log("REQ BODY ", req.body);
        const { productName } = req.body
        let product = await Product.findOne({ productName: productName })
        if (!product) {
            product = await Product.create({ productName: productName })
        }
        await Product.findByIdAndUpdate(product._id, req.body, { new: true })
        let products = await Product.find({})
        res.status(200).json({
            message: "Product Added Successfully",
            data: products
        })
    } catch (err) {
        console.log("ERROR IN ADDING Product ", err);
        res.status(500).json({
            message: "Internal Server Error"
        })
    }
};
export const getProductInfo = async (req, res) => {
    console.log("API : '/superadmin/get-product")
    try {
        const products = await Product.find({});
        res.status(200).json({
            message: "All Product List",
            data: products
        });
    } catch (err) {
        res.status(500).json({
            message: "Internal Server Error"
        })
    }
}
export const deleteProductInfo = async (req, res) => {
    console.log("API : '/superadmin/delete-product")
    try {
        console.log("REQ BODY ", req.body);
        const { id } = req.body
        const product = await Product.findOne({ _id: id })
        if (product) {
            await Product.findByIdAndDelete(product._id, req.body, { new: true })
        }
        let products = await Product.find({})
        res.status(200).json({
            message: "Product Deleted Successfully",
            data: products
        })
    } catch (err) {
        console.log("ERROr IN DELETED Product ", err);
        res.status(500).json({
            message: "Internal Server Error"
        })
    }
}