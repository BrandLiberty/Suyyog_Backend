import TermsCondition from "../models/TermsConditionSchema.js";

export const addTermsCondition = async (req, res) => {
    console.log("API : '/superadmin/termConditions/add-terms")
    try {
        console.log("REQ BODY ", req.body);
        const { Note, selectedOption } = req.body
        let termsCondition = await TermsCondition.findOne({ Note: Note, selectedOption: selectedOption })
        if (!termsCondition) {
            termsCondition = await TermsCondition.create({ Note: Note })
        }
        await TermsCondition.findByIdAndUpdate(termsCondition._id, req.body, { new: true })
        let TermsConsitionArray = await TermsCondition.find({})
        res.status(200).json({
            message: "Terms Data Info Added Successfully",
            data: TermsConsitionArray
        })
    }
    catch (err) {
        console.log("ERROR IN ADDING Terms Info", err);
        res.status(500).json({
            message: "Internal Server Error"
        })
    }
}
export const getTermsData = async (req, res) => {
    console.log("API : '/superadmin/termConditions/get-terms")
    try {
        const terms = await TermsCondition.find({});
        res.status(200).json({
            message: "All terms condition List",
            data: terms
        });
    } catch (err) {
        res.status(500).json({
            message: "Internal Server Error"
        })
    }
}
export const UpdateTermsCondition = async (req, res) => {

    console.log("API : '/superadmin/termConditions/update-terms:id")
    try {
        console.log("REQ BODY ", req.body);
        await TermsCondition.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );
        let TermsConsitionArray = await TermsCondition.find({})
        res.status(200).json({
            message: "Terms Data Info Added Successfully",
            data: TermsConsitionArray
        })
    }
    catch (err) {
        console.log("ERROR IN ADDING Terms Info", err);
        res.status(500).json({
            message: "Internal Server Error"
        })
    }
}
export const deleteTermsInfo = async (req, res) => {
    console.log("API : '/superadmin/termConditions/delete-terms")
    try {
        console.log("REQ BODY ", req.body);
        const { id } = req.body
        const terms = await TermsCondition.findOne({ _id: id })
        if (terms) {
            console.log(terms)
            await TermsCondition.findByIdAndDelete(terms._id, req.body, { new: true })
        }
       
        let termsData = await TermsCondition.find({})
        res.status(200).json({
            message: "Terms Condition Deleted Successfully",
            data: termsData
        })
    } catch (err) {
        console.log("ERROr IN DELETED Terms Condition ", err);
        res.status(500).json({
            message: "Internal Server Error"
        })
    }
}

