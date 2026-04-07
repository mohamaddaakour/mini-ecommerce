import { connect } from "mongoose";

export default async function connectDb(): Promise<void> {
    try {
        const MONGO_URI = process.env.MONGO_URI;

        if (!MONGO_URI) {
            throw new Error("MONGO_URI is not an environment variable");
        }

        await connect(MONGO_URI, { serverSelectionTimeoutMS: 5000 });

        console.info("Database connected successfully");
    } catch (error: unknown) {
        if (error instanceof Error) {
            console.error(`Error connecting to the databse: ${error.message}`);
        } else {
            console.error("Unknown error connecting to the database");
        }

        throw error;
    }
}