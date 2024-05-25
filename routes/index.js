import express from "express";
const router = express.Router()
import { serverCheck } from "../controllers/generalController.js";
import superadmin from './superadmin/index.js'
import quotation from './quotation/index.js'

router.get('/', serverCheck)
router.use('/superadmin',superadmin)
router.use('/quotation',quotation)

export default router