import mongoose from "mongoose";

const connectToDatabase = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("Connected to MongoDB using Mongoose");
  } catch (err) {
    console.error("Failed to connect to MongoDB", err);
  }
};

export default connectToDatabase;
