import express from "express";
import { addCustomerInfo, deleteCustomerInfo, getCustomerInfo } from "../../controllers/SuperAdminController.js";
const router = express.Router()

router.post('/add-customer',addCustomerInfo)
router.get('/get-customer',getCustomerInfo)
router.post('/delete-customer',deleteCustomerInfo)
export default router