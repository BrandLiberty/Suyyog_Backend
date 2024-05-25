import express from "express";
import {addCustomerInfo, deleteCustomerInfo, getCustomerInfo } from "../../controllers/CustomerController.js";
import { addBusinessInfo, addBussinessLogo, addBussinessSign, getBusinessInfo } from "../../controllers/SuperAdminControler.js";
const router = express.Router()
import product from '../product/index.js'
import TermsCondition from "../termsCondition/index.js";

router.post('/add-customer', addCustomerInfo)
router.get('/get-customer', getCustomerInfo)
router.post('/delete-customer', deleteCustomerInfo)


router.post('/add-business-info', addBusinessInfo)
router.post('/add-business-logo', addBussinessLogo)
router.post('/add-business-sign', addBussinessSign)
router.get('/get-business-info', getBusinessInfo)


router.use('/product', product)
router.use('/termConditions', TermsCondition)

export default router