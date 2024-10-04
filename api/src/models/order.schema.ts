import { model, Schema } from "mongoose";

const orderSchema = new Schema({
  userID: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  products: [
    {
      product: { type: Schema.Types.ObjectId, ref: "Product", required: true },
      quantity: Number,
      price: { type: Schema.Types.ObjectId, ref: "Product", required: true },
    },
  ],
  totalPayment: {
    type: Number,
    required: true,
  },
  status: {
    type: String,
    required: false,
  },
  address: {
    type: String,
    required: false,
  },
  ctrateAt: {
    type: Date,
    required: true,
    default: Date.now,
  },
});

export const orderModel = model("Order", orderSchema);
