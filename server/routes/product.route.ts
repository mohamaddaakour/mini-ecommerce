import { Router } from "express";

import { getProducts, createNewProduct, editProduct, deleteProduct } from "../controllers/product.controller.ts";

const router = Router();

router.get("/", getProducts);
router.post("/", createNewProduct);
router.put("/:id", editProduct);
router.delete("/:id", deleteProduct);

export default router;