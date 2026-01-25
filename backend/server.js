import express from "express";
import dotenv from "dotenv";

import connectDB from "./config/db.js";
import router from "./routes/productRoutes.js";

const app = express();

dotenv.config();

const PORT = process.env.PORT;

// to enable giving json in the body request
app.use(express.json());

app.use("/products", router);

async function connection() {
    await connectDB();

    app.listen((PORT), () => {
        console.log(`Listening on port ${PORT}`);
    });
}

connection();