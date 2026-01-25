import mongoose from "mongoose";

async function connectDB() {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log(`The database is connected successfully`);
    } catch (error) {
        console.log(`Error during the connection to the database`);
        process.exit(1);
    }
}

export default connectDB;