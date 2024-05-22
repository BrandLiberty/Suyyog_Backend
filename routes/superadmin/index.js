import express from "express";
import {addCustomerInfo, deleteCustomerInfo, getCustomerInfo } from "../../controllers/CustomerController.js";
import { addBusinessInfo, addBussinessLogo, addBussinessSign, addTermsCondition, getBusinessInfo } from "../../controllers/SuperAdminControler.js";
const router = express.Router()
import product from '../product/index.js'

router.post('/add-customer', addCustomerInfo)
router.get('/get-customer', getCustomerInfo)
router.post('/delete-customer', deleteCustomerInfo)


router.post('/add-business-info', addBusinessInfo)
router.post('/add-business-logo', addBussinessLogo)
router.post('/add-business-sign', addBussinessSign)
router.get('/get-business-info', getBusinessInfo)

router.post('/add-business-terms', addTermsCondition)

router.use('/product', product)
export default router