import express from "express";
import { addQuotation, getQuotationInfo, getQuotationNumber } from "../../controllers/QuotationController.js";
const router = express.Router()

router.get('/quotation-number', getQuotationNumber)
router.post('/add-quotation', addQuotation)
router.get('/get-quotation', getQuotationInfo)

export default router