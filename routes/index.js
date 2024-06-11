import express from "express";
const router = express.Router()
import { serverCheck } from "../controllers/generalController.js";
import superadmin from './superadmin/index.js'
import jwt_strategy from '../config/passport_jwt.js'

router.get('/', serverCheck)
router.use('/superadmin',superadmin)


export default router