import { RequestHandler } from "express";
import { usersModel } from "../../models";

import { Response } from "express";
import { CustomRequist } from "../../middlewares/auth.middleware";

export const getUser = async (req: CustomRequist, res: Response) => {
  try {
    const users = await usersModel.find({});

    const user = users.find((user) => user.id === req.user?._id);

    if (!user) {
      return res.status(401).json({ message: "user doesn't exist" });
    }

    return res.status(200).json({
      user,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Internal server error",
    });
  }
};
