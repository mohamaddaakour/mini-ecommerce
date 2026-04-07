import type { Request, Response } from "express";

import { createProductService, editProductService, getProductService, deleteProductService } from "../services/product.service.ts";

export async function createProduct(req: Request, res: Response): Promise<void> {
    try {
        const { name, image, price } = req.body;

        if (!name || !image || !price) {
            res.status(400).json({ success: false, message: "name, image and price are required" });

            return;
        }

        if (isNaN(Number(price))) {
            res.status(400).json({ success: false, message: "price must be a number" });
            return;
        }

        const newProduct = await createProductService({ name, image, price });

        res.status(201).json({ success: true, data: newProduct });

    } catch (error: unknown) {
        if (error instanceof Error) {
            console.error(`Error creating a product: ${error.message}`);
        } else {
            console.error(`Unknown error creating the product`);
        }

        res.status(500).json({ success: false, message: "Error creating a new product" });
    }
}

export async function getProduct(req: Request, res: Response): Promise<void> {
    try {
        const products = await getProductService();

        res.status(200).json({ success: true, data: products });
    } catch (error: unknown) {
        if (error instanceof Error) {
            console.error(`Error getting the products: ${error.message}`);
        } else {
            console.error(`Unknown error getting the products`);
        }

        res.status(500).json({ success: false, message: "Error getting products" });
    }
}

export async function editProduct(req: Request, res: Response): Promise<void> {
    try {
        const { id } = req.params;
        const { name, price, image } = req.body;

        if (!name || !image || !price) {
            res.status(400).json({ success: false, message: "name, image and price are required" });

            return;
        }

        if (isNaN(Number(price))) {
            res.status(400).json({ success: false, message: "price must be a number" });
            return;
        }

        const product = await editProductService(id as string, { name, price, image });

        res.status(200).json({ success: true, data: product });
    } catch (error: unknown) {
        if (error instanceof Error) {
            console.error(`Error editing a product: ${error.message}`);
        } else {
            console.error("Unknown errro editing a product");
        }

        res.status(500).json({ success: false, message: "Error editing a product" });
    }
}

export async function deleteProduct(req: Request, res: Response): Promise<void> {
    try {
        const { id } = req.params;

        const product = await deleteProductService(id as string);

        if (!product) {
            res.status(404).json({ success: false, message: "Product not found" });
            return;
        }

        res.status(200).json({ success: true, message: "Product deleted successfully" });
    } catch (error: unknown) {
        if (error instanceof Error) {
            console.error(`Error deleting the product: ${error.message}`);
        } else {
            console.error("Unknown error deleting a product");
        }

        res.status(500).json({ success: false, message: "Server error" });
    }
}