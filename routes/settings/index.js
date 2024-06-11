import express from "express";
import { addQuotationSetting, getQuotationSetting } from "../../controllers/SettingsController.js";
const router = express.Router()

router.post('/add-Quotation-settings',addQuotationSetting)
router.get('/get-Quotation-settings',getQuotationSetting)

export default router