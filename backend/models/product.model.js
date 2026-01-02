// it is just a regular javascript file but we put .model to mark that this file is a model for database

import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
	{
		name: {
			type: String,
			required: true,
		},
		price: {
			type: Number,
			required: true,
		},
		image: {
			type: String,
			required: true,
		},
	},
	{
        // createdAt, updatedAt
		timestamps: true,
	}
);

const Product = mongoose.model("Product", productSchema);

export default Product;