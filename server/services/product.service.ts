import productModel from "../models/product.model.ts";
import type { productDocument } from "../types/types.ts";

// helper function to get all the products
const findAllProducts = async (): Promise<productDocument[]> => {
    return productModel.find({});
}

// helper function to create a new product document
const createProduct = async (name: string, price: number, image: string): Promise<productDocument> => {
    return new productModel({ name, price, image });
}

// helper function to edit an existing product
const helperEditProduct = async (name: string, price: number, image: string, id: string): Promise<productDocument> => {
    const newProduct = await productModel.findByIdAndUpdate(id, { name, price, image }, { new: true });

    return newProduct!;
}

const helperDeleteProduct = async (id: string): Promise<void> => {
    await productModel.findByIdAndDelete(id);
}

export { findAllProducts, createProduct, helperEditProduct, helperDeleteProduct };