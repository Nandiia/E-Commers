import mongoose from "mongoose";
const { Schema, model } = mongoose;

const bookSchema = new Schema({
  name: {
    type: String,
    required: true,
  },

  author: {
    type: Schema.Types.ObjectId,
    ref: "Author",
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

export const bookModel = model("Book", bookSchema);
