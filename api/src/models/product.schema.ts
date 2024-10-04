import mongoose from "mongoose";

const { Schema, model } = mongoose;

const productSchema = new Schema({
  productImage: {
    type: [String],
    required: true,
  },
  productName: {
    type: String,
    required: true,
  },

  moreInformation: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  size: {
    type: String,
    required: false,
  },

  category: {
    type: Schema.Types.ObjectId,
    ref: "Category",
    required: false,
  },

  quantity: {
    type: Number,
    required: false,
  },

  commodityCode: {
    type: Number,
    require: false,
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

export const productModel = model("Product", productSchema);
