import mongoose from "mongoose";

const DB_URL = process.env.DB_URL;
export async function connect() {
  try {
    mongoose.connect(DB_URL);
    const connection = mongoose.connection;

    connection.on("connected", () => {
      console.log("MongoDB connected successfully");
    });

    connection.on("error", (err) => {
      console.log("MongoDB connection error" + err);
      process.exit();
    });
  } catch (error) {
    console.log(error);
  }
}
