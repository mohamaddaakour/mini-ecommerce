import { Document } from "mongoose";

// interface for the document
interface productDocument extends Document {
    name: string;
    price: number;
    image: string;
}

export type { productDocument };