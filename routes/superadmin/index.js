import express from "express";
import {addCustomerInfo, deleteCustomerInfo, getCustomerInfo } from "../../controllers/CustomerController.js";
import { addBusinessInfo, addBussinessLogo, addBussinessSign, getBusinessInfo } from "../../controllers/SuperAdminControler.js";
const router = express.Router()
import passport from "passport"
import product from '../product/index.js'
import TermsCondition from "../termsCondition/index.js";
import Settings from "../settings/index.js";
import quotation from '../quotation/index.js'
import { createSession } from "../../controllers/AuthControllers.js";
import { jwtSuperAdminAuth } from "../../middlewares/jwtAuthCheck.js";

router.post("/create-session",createSession)

router.post('/add-customer',jwtSuperAdminAuth, addCustomerInfo)
router.get('/get-customer', getCustomerInfo)
router.post('/delete-customer',jwtSuperAdminAuth, deleteCustomerInfo)

router.post('/add-business-info',jwtSuperAdminAuth, addBusinessInfo)
router.post('/add-business-logo',jwtSuperAdminAuth, addBussinessLogo)
router.post('/add-business-sign',jwtSuperAdminAuth, addBussinessSign)
router.get('/get-business-info',jwtSuperAdminAuth, getBusinessInfo)

router.use('/product', product)

router.use('/termConditions', TermsCondition)

router.use('/setting',Settings)

router.use('/quotation',quotation)
export default router