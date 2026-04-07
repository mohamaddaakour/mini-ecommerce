import { createProduct, getProduct, editProduct, deleteProduct } from "../controllers/product.controller.ts";

import { Router } from "express";

const productRoutes = Router();

productRoutes.post("/", createProduct);
productRoutes.get("/", getProduct);
productRoutes.put("/:id", editProduct);
productRoutes.delete("/:id", deleteProduct);

export default productRoutes;