import mongoose from "mongoose";

const connectDB = async()=>{
    try {
        await mongoose.connect(process.env.MongoURI);
        console.log("database is connected");
    } catch (error) {
        console.log("error connecting to the database");
    }
}

export default connectDB;