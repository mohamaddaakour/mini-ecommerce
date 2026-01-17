import mongoose from "mongoose";

// we create the product schema
const productSchema = new mongoose.Schema({
    name: { type: String, required: true },
    price: { type: Number, required: true },
    image: { type: String, required: true },
},
{
    timestamps: true,
});

// we create the product model
const Product = mongoose.model("Product", productSchema);

export default Product;