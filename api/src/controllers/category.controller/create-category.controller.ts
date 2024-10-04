import { RequestHandler } from "express";
import { categoryModel } from "../../models";

const createCategory: RequestHandler = async (req, res) => {
  try {
    const { categoryName } = req.body;

    console.log(req.body);

    if (!categoryName) {
      return res.status(400).json({
        message: "Category name is required",
      });
    }

    await categoryModel.create({
      categoryName,
      createAt: new Date(),
      updateAt: new Date(),
    });

    return res.status(201).json({
      message: "Category created successfully",
    });
  } catch (error) {
    return res.status(500).json({
      message: "Internal server error",
    });
  }
};

export { createCategory };
