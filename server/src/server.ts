// this file is the starting point for our backend application

import "dotenv/config";
import app from "./app.ts";
import mongoose from "mongoose";

import connectDb from "./config/db.ts";

async function connection(): Promise<void> {
    try {
        const PORT = process.env.PORT ? Number(process.env.PORT) : 8000;

        await connectDb();

        // to create the server
        const server = app.listen(PORT, () => {
            console.log(`Server connected on port: ${PORT}`);
        });

        async function shutdown(): Promise<void> {
            console.log("Server disconnected");

            // to close the connection
            await mongoose.connection.close();

            server.close(() => {
                console.log("Server closed");
                process.exit(0);
            });
        }

        process.on("SIGINT", shutdown);
    } catch (error: unknown) {
        if (error instanceof Error) {
            console.error(`Server startup failed: ${error.message}`);
        } else {
            console.error("Unknown server startup error");
        }

        process.exit(1);
    }
}

connection();