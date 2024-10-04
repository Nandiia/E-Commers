import { RequestHandler } from "express";
import { productModel } from "../../models";

const getOneProduct: RequestHandler = async (req, res) => {
  try {
    const { id } = req.params;
    const oneProductData = await productModel.findById(id);
    res.json(oneProductData);
  } catch (error) {
    console.error("Error logging in:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

export default getOneProduct;
