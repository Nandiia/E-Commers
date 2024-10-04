import { RequestHandler } from "express";
import { authorModel } from "../../models/author.schema";

export const createAuthorController: RequestHandler = async (req, res) => {
  try {
    const { name } = req.body;

    await authorModel.create({
      name,
      createAt: new Date(),
      updateAt: new Date(),
    });

    return res.status(201).json({
      message: "Auther created successfully",
    });
  } catch (error) {
    return res.status(500).json({
      message: "Internal server error",
    });
  }
};

export const getAuthorsController: RequestHandler = async (req, res) => {
  try {
    const authors = await authorModel.find({});

    return res.status(200).json({
      authors,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Internal server error",
    });
  }
};
