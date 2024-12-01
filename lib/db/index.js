import mongoose from "mongoose";

const connection = {};

export const connectDB = async () => {
  if (connection.isConnected) {
    return;
  }

  try {
    const connectionInstance = await mongoose.connect(
      process.env.MONGODB_URI + "/certifier" || ""
    );
    connection.isConnected = connectionInstance.connections[0].readyState;
    console.log("Connected to Database");
  } catch (error) {
    console.error("Error connecting to database: ", error);
    process.exit(1);
  }
};
