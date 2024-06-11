import express from "express";
import { addProductInfo, deleteProductInfo, getProductInfo } from "../../controllers/ProductController.js";
import { jwtSuperAdminAuth } from "../../middlewares/jwtAuthCheck.js";
const router = express.Router()

router.post('/add-product',jwtSuperAdminAuth, addProductInfo)
router.post('/delete-product',jwtSuperAdminAuth, deleteProductInfo)
router.get('/get-product', getProductInfo)

export default router