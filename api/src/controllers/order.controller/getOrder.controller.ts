import { RequestHandler } from "express";
import { orderModel } from "../../models";

const getOrder: RequestHandler = async (_req, res) => {
  try {
    const order = await orderModel.find({}).populate("userID", "products");

    return res.status(200).json({
      order,
    });
  } catch (error) {
    return res.status(500).json({
      message: " Internal server error",
    });
  }
};

export { getOrder };
