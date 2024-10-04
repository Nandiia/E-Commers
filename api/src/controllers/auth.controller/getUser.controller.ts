import { RequestHandler } from "express";
import { usersModel } from "../../models";

const getAllUsers: RequestHandler = async (req, res) => {
  try {
    const users = await usersModel.find({});

    return res.json(users);
  } catch (error) {
    return res.status(500).json({
      message: "Internal server error",
    });
  }
};

export { getAllUsers };
