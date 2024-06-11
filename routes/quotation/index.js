import express from "express";
import { addQuotation, addQuotationDoc, getQuotationInfo, getQuotationNumber } from "../../controllers/QuotationController.js";
const router = express.Router()

router.get('/quotation-number', getQuotationNumber)
router.post('/add-quotation', addQuotation)
router.get('/get-quotation', getQuotationInfo)
router.post('/add-quotation-doc', addQuotationDoc)
export default router