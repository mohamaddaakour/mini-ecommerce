// mongoose act the intermediary between javascript and mongodb

import mongoose from "mongoose";

export interface IProduct {
    name: string;
    price: number;
    image: number;
}

// first we have to create the schema for the document we have
const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    price: {
        type: Number,
        required: true,
        min: 0
    },
    image: {
        type: String,
        required: true
    }
});

// than we have to create a model
const Product = mongoose.models.Product || mongoose.model<IProduct>("Product", productSchema);

export default Product;