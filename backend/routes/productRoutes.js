import express from "express";

import { getProducts, postProducts } from "../controllers/productController.js";

const router = express.Router();

router.get("/", getProducts);
router.post("/", postProducts);

export default router;