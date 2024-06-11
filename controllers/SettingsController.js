import QuotationSettings from '../models/QuotationSettingsSchema.js'

export const addQuotationSetting = async (req, res) => {
    console.log("API : '/superadmin/setting/add-Quotation-settings")
    try {
        console.log("REQ BODY ", req.body);
        let QuotationSettingsData = await QuotationSettings.find({})
        if (QuotationSettingsData.length > 0) {
            await QuotationSettings.findByIdAndUpdate(QuotationSettingsData[0]._id, req.body, { new: true })
            let QuotationData = await QuotationSettings.find({})
            res.status(200).json({
                message: "Quotation Data Info Added Successfully",
                data: QuotationData
            })
            return
        }
        QuotationSettingsData = await QuotationSettings.create(req.body)
        let QuotationData = await QuotationSettings.find({})
        res.status(200).json({
            message: "Quotation Data Info Added Successfully",
            data: QuotationData
        })
    } catch (err) {
        console.log("ERROR IN ADDING Quotation Setting Info", err);
        res.status(500).json({
            message: "Internal Server Error"
        })
    }
}
export const getQuotationSetting = async (req, res) => {
    console.log("API : '/superadmin/setting/get-Quotation-settings")
    try {
        const QuotationSettingsData = await QuotationSettings.find()
        res.status(200).json({
            message: "Fetch Quotation Settings Successfully",
            data: QuotationSettingsData
        })
    } catch (error) {
        console.error('Error fetching quotations settings:', error);
        res.status(500).json({
            message: "Internal Server Error"
        })
    }
};