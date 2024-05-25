import express from "express";
import { UpdateTermsCondition, addTermsCondition, deleteTermsInfo, getTermsData } from "../../controllers/TermsConditionController.js";
const router = express.Router()

router.post('/add-terms',addTermsCondition)
router.put('/update-terms:id',UpdateTermsCondition)
router.get('/get-terms',getTermsData)
router.post('/delete-terms',deleteTermsInfo)
export default router