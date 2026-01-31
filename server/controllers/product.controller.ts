import type { Request, Response } from "express";

import { findAllProducts, createProduct, helperEditProduct, helperDeleteProduct } from "../services/product.service.ts";

// function to get all products
const getProducts = async (req: Request, res: Response): Promise<void> => {
    try {
        const product = await findAllProducts();
        res.status(200).json({ success: true, message: product });
    } catch (error: unknown) {
        if (error instanceof Error) {
            console.error(`Error: ${error.message}`);
        } else {
            console.error(`Unknown error`);
        }
        res.status(500).json({ success: false, message: "Server error" });
    }
}

// function to create a new product
const createNewProduct = async (req: Request, res: Response): Promise<void> => {
    try {
        const { name, price, image } = req.body;

        if (!name || !price || !image) {
            throw new Error("The 3 fields are required");
        }

        if (isNaN(price)) {
            throw new Error("The price should be a number");
        }

        const newProduct = await createProduct(name, price, image);
        newProduct.save();
        
        res.status(201).json({ success: true, message: newProduct });
    } catch (error: unknown) {
        if (error instanceof Error) {
            console.error(`Error: ${error.message}`);
        } else {
            console.error(`Unknown error`);
        }
        res.status(500).json({ success: false, message: "Server error" });
    }
}

// function to edit an old product
const editProduct = async (req: Request, res: Response): Promise<void> => {
    try {
        const { id } = req.params;
        const { name, price, image } = req.body;

        if (!id || Array.isArray(id)) {
            res.status(400).json({ success: false, message: "Invalid product ID" });
            return;
        }

        if (!name || !price || !image) {
            throw new Error("The 3 fields are required");
        }

        if (isNaN(price)) {
            throw new Error("The price should be a number");
        }

        const newProduct = await helperEditProduct(name, price, image, id);

        res.status(200).json({ success: true, message: newProduct });
    } catch (error: unknown) {
        if (error instanceof Error) {
            console.error(`Error: ${error.message}`);
        } else {
            console.error(`Unknown error`);
        }
        res.status(500).json({ success: false, message: "Server error" });
    }
}

// function to delete a product
const deleteProduct = async (req: Request, res: Response): Promise<void> => {
        try {
        const { id } = req.params;

        if (!id || Array.isArray(id)) {
            res.status(400).json({ success: false, message: "Invalid product ID" });
            return;
        }

        await helperDeleteProduct(id);

        res.status(200).json({ success: true, message: "Product deleted successfully" });
    } catch (error: unknown) {
        if (error instanceof Error) {
            console.error(`Error: ${error.message}`);
        } else {
            console.error(`Unknown error`);
        }
        res.status(500).json({ success: false, message: "Server error" });
    }
}

export { getProducts, createNewProduct, editProduct, deleteProduct };