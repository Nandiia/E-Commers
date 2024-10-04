import mongoose from "mongoose";

const { Schema, model } = mongoose;

const usersSchema = new Schema({
  name: {
    type: String,
    required: true,
  },

  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    enum: ["user", "admin"],
    default: "user",
  },

  createdAt: {
    type: Date,
    required: true,
    default: Date.now,
  },

  updatedAt: {
    type: Date,
    required: true,
    default: Date.now,
  },
});

export const usersModel = model("User", usersSchema);
