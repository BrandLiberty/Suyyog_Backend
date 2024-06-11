import mongoose from "mongoose";

const QuotationSettingSchema = new mongoose.Schema({
    quoteLabel: {
        type: String,
        default : 'Quote -'
    },
    discountDisplay: {
        type: String,
        default: 'No Discount'
    },
    GSTDisplay: {
        type: String,
        default: 'No Tax'
    },
    ProductHSNDisplay: {
        type: String,
        default: 'Yes'
    },
    quoteTopMsg: {
        type: String,
        default: `Dear Sir/Mam,
        Thank you for Your valuable inquiry. We are pleased to quote as below:`
    },
    quoteBottomMsg: {
        type: String,
        default: 'Thank you very much for giving us the opportunity to quote and hope to serve your valued order soon if you have questions feel free to contact us at. MOB:- 9823232003'
    },
    displayBankInfo: {
        type: String,
        default: false
    }
}, {
    timestamps: true
})
const QuotationSetting = mongoose.model('QuotationSetting', QuotationSettingSchema);

export default QuotationSetting