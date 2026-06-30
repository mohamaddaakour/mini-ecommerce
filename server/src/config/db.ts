import { connect } from "mongoose";

// every asynchronous function must return a promise
export default async function connectDb(): Promise<void> {
    try {
        const MONGO_URI = process.env.MONGO_URI;

        if (!MONGO_URI) {
            // we throw a custom error exception
            throw new Error("MONGO_URI is not an environment variable");
        }

        // we are asynchronously connecting to the database
        await connect(MONGO_URI, { serverSelectionTimeoutMS: 5000 });

        console.info("Database connected successfully");
    } catch (error: unknown) {
        if (error instanceof Error) {
            console.error(`Error connecting to the databse: ${error.message}`);
        } else {
            console.error("Unknown error connecting to the database");
        }

        // this means we are re-throwing the same error object to the function that called connectDb()
        throw error;
    }
}