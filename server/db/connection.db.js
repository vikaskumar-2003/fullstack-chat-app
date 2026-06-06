import mongoose from "mongoose";

export async function connectionDB() {
    try {
        await mongoose.connect(process.env.MONGODB_URL)
        console.log("db connect successfully");
        
    } catch (error) {
        console.log(error.message);
        
    }
}