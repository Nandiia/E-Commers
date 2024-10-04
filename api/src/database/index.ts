import { connect } from "mongoose";

export const connectToDatabase = async () => {
  await connect(
    "mongodb+srv://enandia:G3BWvHOsDz6uLD2H@cluster0.hsxtr.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
  );

  console.log("Connected to database");
};
