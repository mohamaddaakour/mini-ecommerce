import mongoose from "mongoose";
import Product from "../models/productModel.js";

// function to fetch all the products from the database
async function getProducts(request, response) {
    try {
        const product = await Product.find({});
        response.status(200).json({ success: true, message: product });
    } catch (error) {
        console.log(`Error in fetching data: ${error.message}`);
        response.status(500).json({ success: false, message: "Error in fetching" });
    }
}

// funtion to add a new product to the database
async function postProducts(request, response) {
    const product = request.body;

    try {
        const newProduct = new Product(product);
        await newProduct.save();

        response.status(201).json({ success: "true", message: newProduct });
    } catch (error) {
        console.log(`Error creating new product ${error.message}`);
        response.status(500).json({ success: false, message: "Error creating a new product" });
    }
}

// function to edit a product
async function putProducts(request, response) {
    const product = request.body;

    const { id } = request.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return response.status(404).json({ success: false, message: "Invalid product id" });
    }

    try {
        const newProduct = await Product.findByIdAndUpdate(id, product, { new: true });
        response.status(200).json({ success: true, message: newProduct });
    } catch (error) {
        console.log(`Error editing the product ${error.message}`);
        response.status(500).json({ success: false, message: "server error" });
    }
}

// function to delete a product
async function deleteProduct(request, response) {
    const { id } = request.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return response.status(404).json({ success: false, message: "Invalid product id" });
    }

    try {
        await Product.findByIdAndDelete(id, product);
        response.status(200).json({ success: true, message: "product deleted" });
    } catch (error) {
        console.log(`Error deleting the product ${error.message}`);
        response.status(500).json({ success: false, message: "server error" });
    }
}

export { getProducts, postProducts, putProducts, deleteProduct };