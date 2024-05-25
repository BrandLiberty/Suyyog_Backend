import Customer from '../models/CustomerSchema.js'

export const addCustomerInfo = async (req, res) => {
    console.log("API : '/superadmin/add-customer")
    try {
        console.log("REQ BODY ", req.body);
        const { name } = req.body
        let customer = await Customer.findOne({ name: name })
        if (!customer) {
            customer = await Customer.create({ name: name })
        }
        await Customer.findByIdAndUpdate(customer._id, req.body, { new: true })
        let customers = await Customer.find({})
        res.status(200).json({
            message: "Customer Added Successfully",
            data: customers
        })
    } catch (err) {
        console.log("ERROR IN ADDING CUSTOMER ", err);
        res.status(500).json({
            message: "Internal Server Error"
        })
    }
};
export const getCustomerInfo = async (req, res) => {
    console.log("API : '/superadmin/get-customer")
    try {
        const customers = await Customer.find({});
        res.status(200).json({
            message: "All Customers List",
            data: customers
        });
    } catch (err) {
        res.status(500).json({
            message: "Internal Server Error"
        })
    }
}
export const deleteCustomerInfo = async (req, res) => {
    console.log("API : '/superadmin/delete-customer")
    try {
        console.log("REQ BODY ", req.body);
        const { id } = req.body
        const customer = await Customer.findOne({ _id: id })
        if (customer) {
            await Customer.findByIdAndDelete(customer._id, req.body, { new: true })
        }
       
        let customers = await Customer.find({})
        res.status(200).json({
            message: "Customer Deleted Successfully",
            data: customers
        })
    } catch (err) {
        console.log("ERROr IN DELETED CUSTOMER ", err);
        res.status(500).json({
            message: "Internal Server Error"
        })
    }
}
