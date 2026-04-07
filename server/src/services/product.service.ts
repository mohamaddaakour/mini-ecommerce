import type { IProduct } from "../models/product.model.ts";
import Product from "../models/product.model.ts";

export async function createProductService(product: IProduct): Promise<IProduct> {
    const newProduct = await Product.create(product);

    return newProduct;
}

export async function getProductService(): Promise<IProduct[]> {
    const products = await Product.find().lean();

    return products;
}

export async function editProductService(id: string, product: IProduct): Promise<IProduct> {
    const editedProduct = await Product.findByIdAndUpdate(id, product, { returnDocument: "after", runValidators: true } );

    return editedProduct;
}

export async function deleteProductService(id: string): Promise<IProduct> {
    const deletedProduct = await Product.findByIdAndDelete(id);

    return deletedProduct;
}