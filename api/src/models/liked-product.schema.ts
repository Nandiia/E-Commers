import mongoose from "mongoose";

const { Schema, model } = mongoose;

const likedProductSchema = new Schema({
  userId: {
    type: Schema.Types.ObjectId,
    ref: "user",
    required: true,
  },
  productId: {
    type: Schema.Types.ObjectId,
    ref: "Product",
    require: true,
  },
});

export const likedProductModel = model("Liked prodcut", likedProductSchema);
