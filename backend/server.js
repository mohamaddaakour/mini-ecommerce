import express from "express"
import dotenv from "dotenv"

import connectDb from "./config/db.js";
import router from "./routes/productRoutes.js";

dotenv.config();

const app = express();

// to put JSON in request.body
app.use(express.json());

app.use("/products", router);

// function to start the server
async function startServer() {
    try {
        await connectDb();
        app.listen(process.env.PORT, () => {
            console.log(`Server running on port ${process.env.PORT}`);
        });
    } catch (error) {
        console.error("Failed to start server:", error.message);
        process.exit(1);
    }
}

startServer();