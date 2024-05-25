import express from "express";
import { addQuotation, getQuotationNumber } from "../../controllers/QuotationController.js";
const router = express.Router()

router.get('/quotation-number', getQuotationNumber)
router.post('/add-quotation', addQuotation)

export default router