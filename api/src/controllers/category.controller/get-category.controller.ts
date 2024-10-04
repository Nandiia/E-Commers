import { RequestHandler } from "express";
import { categoryModel } from "../../models";

const getCategory: RequestHandler = async (_req, res) => {
  try {
    const category = await categoryModel.find({});

    return res.status(200).json({
      category,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Internal server error",
    });
  }
};
export { getCategory };
