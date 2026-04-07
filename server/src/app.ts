import express from "express";
import type { Application } from "express";
import helmet from "helmet";
import cors from "cors";
import morgan from "morgan";

import productRoutes from "./routes/product.routes.ts";

const app: Application = express();

app.use(express.json( {limit: "5mb"} ));

app.use(helmet());
app.use(cors());
app.use(morgan("dev"));

app.use("/api/products", productRoutes);

app.get("/health", (_, res) => {
    res.status(200).json({ status: "OK" });
})

export default app;