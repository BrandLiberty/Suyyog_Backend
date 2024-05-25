import mongoose from 'mongoose';

const termsConditionSchema = new mongoose.Schema({

    selectedOption: {
        type: String,
    },
    Note: {
        type: String,
    }
    
}, {
    timestamps: true
})


const TermsCondition = mongoose.model('TermsCondition', termsConditionSchema)

export default TermsCondition