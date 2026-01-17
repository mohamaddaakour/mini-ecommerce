import Product from "../models/productModels.js";

import mongoose from "mongoose";

// function to get all the products in the database
async function getProducts(request, response) {
    try {
        const products = await Product.find({});
        response.status(200).json({ success: true, data: products });
    } catch (error) {
        console.error(`Error fetching ${error.message}`);
        response.status(500).json( { success: false, message: "Server error" });
    }
}

// function to create a new product
async function createProduct(request, response) {
    const { name, price, image } = request.body;

    if (!name || !image || price === undefined) {
        return response.status(400).json( { success: false, message: "Please enter all fields" } );
    }

    if (isNaN(price)) {
        return response.status(400).json({ success: false, message: "Price must be a number" });
    }

    try {
        const newProduct = new Product({ name, image, price });
        await newProduct.save();
        response.status(201).json( { success: true, data: newProduct } );
    } catch (error) {
        console.error(`error in creating product: ${error.message}`);
        response.status(500).json( { success: false, message: "Server error" });
    }
}

// function to edit a product
async function editProduct(request, response) {
    const { id } = request.params;

    const { name , image, price} = request.body;

    // because if the price is 0, it will be a valid price
    if (!name || !image || price === undefined) {
        return response.status(400).json( { success: false, message: "Please enter all fields" } );
    }

    if (isNaN(price)) {
        return response.status(400).json({ success: false, message: "Price must be a number" });
    }

    if (!mongoose.Types.ObjectId.isValid(id)) {
		return response.status(404).json({ success: false, message: "Invalid Product Id" });
	}

    try {
		const updatedProduct = await Product.findByIdAndUpdate(id, { name, image, price }, { new: true });

		response.status(200).json({ success: true, data: updatedProduct });
	} catch (error) {
		response.status(500).json({ success: false, message: "Server Error" });
	}
}

// function to delete a product
async function deleteProduct(request, response) {
    	const { id } = request.params;

	if (!mongoose.Types.ObjectId.isValid(id)) {
		return response.status(404).json({ success: false, message: "Invalid Product Id" });
	}

	try {
		await Product.findByIdAndDelete(id);
		response.status(200).json({ success: true, message: "Product deleted" });
	} catch (error) {
		console.error(`error in deleting product: ${error.message}`);
		response.status(500).json({ success: false, message: "Server Error" });
	}
}

export { getProducts, createProduct, editProduct, deleteProduct };