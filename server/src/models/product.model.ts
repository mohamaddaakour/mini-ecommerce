import mongoose from "mongoose";

export interface IProduct {
    name: string;
    price: number;
    image: number;
}

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

const Product = mongoose.models.Product || mongoose.model<IProduct>("Product", productSchema);

export default Product;