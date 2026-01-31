import mongoose from "mongoose";
import { Model } from "mongoose";

import type { productDocument } from "../types/types.ts";

const productSchema = new mongoose.Schema<productDocument>({
    name: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true
    },
    image: {
        type: String,
        required: true
    }
},
{ timestamps: true }
);

const productModel: Model<productDocument> = mongoose.models.Product || mongoose.model("Product", productSchema);

export default productModel;