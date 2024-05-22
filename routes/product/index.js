import express from "express";
import { addProductInfo, deleteProductInfo } from "../../controllers/ProductController.js";
const router = express.Router()

router.post('/add-product', addProductInfo)
router.post('/delete-product', deleteProductInfo)

export default router