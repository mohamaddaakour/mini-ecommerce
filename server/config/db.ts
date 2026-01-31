import mongoose from "mongoose";

// function to connect to the database
const connectDB = async (): Promise<mongoose.Connection> => {
    try {
        const mongoURI = process.env.MONGO_URI;

        if (!mongoURI) {
            throw new Error(`mongoURI is not defined as an environment variable`);
        }

        const connection = await mongoose.connect(mongoURI);
        console.log(`Database connected successfully`);

        return connection.connection;
    } catch (error: unknown) {
        if (error instanceof Error) {
            console.error(`Error: ${error.message}`);
        } else {
            console.error(`Unknown error while connecting to the database`);
        }
        process.exit();
    }
}

export default connectDB;