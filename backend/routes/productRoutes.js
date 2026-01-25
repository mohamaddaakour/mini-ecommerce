import express from "express";

import { getProducts, postProducts, putProducts, deleteProduct } from "../controllers/productController.js";

const router = express.Router();

router.get("/", getProducts);
router.post("/", postProducts);
router.put("/:id", putProducts);
router.delete("/:id", deleteProduct);

export default router;