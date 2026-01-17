import express from "express";

import { getProducts, createProduct, editProduct, deleteProduct } from "../controllers/productControllers.js";

const router = express.Router();

router.get("/", getProducts);
router.post("/", createProduct);
router.put("/:id", editProduct);
router.delete("/:id", deleteProduct);

export default router;