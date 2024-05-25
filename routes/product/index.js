import express from "express";
import { addProductInfo, deleteProductInfo, getProductInfo } from "../../controllers/ProductController.js";
const router = express.Router()

router.post('/add-product', addProductInfo)
router.post('/delete-product', deleteProductInfo)
router.get('/get-product', getProductInfo)

export default router