import { RequestHandler } from "express";
import { orderModel } from "../../models";

const createOrder: RequestHandler = async (req, res) => {
  try {
    const { userID, products, totalPayment, status, address, price } = req.body;

    await orderModel.create({
      userID,
      products,
      totalPayment,
      price,
      status,
      address,
    });

    return res.status(201).json({
      message: "Ordered",
    });
  } catch (error) {
    return res.status(500).json({
      message: "Internal server error",
    });
  }
};

export { createOrder };
