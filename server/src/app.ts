import express from "express";
import helmet from "helmet";
import cors from "cors";
import morgan from "morgan";

import productRoutes from "./routes/product.routes.ts";

const app = express();

// this middleware is to enable the usage of JSON format
// in the HTTP body request
// we used limit to prevent the DOS attacks
app.use(express.json( {limit: "5mb"} ));

// the helmet middleware helps protect your Express app by adding secure HTTP headers
app.use(helmet());

// CORS (Cross-Origin Resource Sharing), It controls who can call your backend
// using it if the backend and frontend have different ports can talk with each other
app.use(cors());

// morgan is for logging requests in the terminal
app.use(morgan("dev"));

// this is the main middleware for our products API
// with the base route (this route will be in the beginning of any endpoint)
app.use("/api/products", productRoutes);

// a health API to check if the server is working correctly
app.get("/health", (_, res) => {
    res.status(200).json({ status: "OK" });
})

export default app;