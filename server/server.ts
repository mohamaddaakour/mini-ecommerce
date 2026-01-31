import express from "express";
import type { Application } from "express";
import dotenv from "dotenv";

import connectDB from "./config/db.ts";
import router from "./routes/product.route.ts";

dotenv.config();

const port: number = Number(process.env.PORT) || 6000;

// create the express application
const app: Application = express();

// middleware to let the user give JSON in the request
app.use(express.json({ limit: "5mb" }));

app.use("/products", router);

const connectingDB = async (): Promise<void> => {
    try {
        await connectDB();

        app.listen(port, () => {
            console.log(`Listening on port ${port}`);
        });
    } catch (error: unknown) {
        if (error instanceof Error) {
            console.error(`Error: ${error.message}`);
        } else {
            console.log(`Unknown error connecting the database`);
        }
    }
};

connectingDB();