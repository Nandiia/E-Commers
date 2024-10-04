import mongoose from "mongoose";
const { Schema, model } = mongoose;

const authorSchema = new Schema({
  name: {
    type: String,
    required: true,
  },

  createAt: {
    type: Date,
    required: true,
    default: Date.now,
  },

  updateAt: {
    type: Date,
    required: true,
    default: Date.now,
  },
});

export const authorModel = model("Author", authorSchema);
