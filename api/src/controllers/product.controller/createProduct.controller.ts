import { RequestHandler } from "express";
import { productModel } from "../../models";

const createProduct: RequestHandler = async (req, res) => {
  try {
    const {
      productName,
      productImage,
      price,
      size,
      category,
      moreInformation,
      commodityCode,
      quantity,
    } = req.body;

    await productModel.create({
      productName,
      moreInformation,
      commodityCode,
      productImage,
      price,
      quantity,
      category,
      size,
    });

    return res.status(201).json({
      message: "Product created successfully",
    });
  } catch (error) {
    return res.status(500).json({
      message: "Internal server error",
    });
  }
};

export { createProduct };
