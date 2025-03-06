import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGODB_URI);
    console.log("Connected to DB " + conn.connection.host);
  } catch (err) {
    console.error("mongodb connection error " + err);
  }
};
