import { RequestHandler } from "express";
import { productModel } from "../../models";

//бүх Pruducts-ийг авдаг контроллер

const getProduct: RequestHandler = async (req, res) => {
  try {
    const { category } = req.query;

    const filter = category ? { category: { $eq: category } } : {};

    const product = await productModel.find(filter).populate("category");

    return res.status(200).json({
      product,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Internal server error",
    });
  }
};

export { getProduct };
