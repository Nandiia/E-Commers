import { model, Schema } from "mongoose";

const reviewSchema = new Schema({
  userId: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  productID: {
    type: Schema.Types.ObjectId,
    ref: "Product",
    required: true,
  },
  rating: {
    type: Number,
    required: false,
  },
  comment: {
    type: String,
    required: false,
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

export const reviewModel = model("Review", reviewSchema);
