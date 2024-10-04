import { error } from "console";

import { Response } from "express";
import { CustomRequist } from "../middlewares/auth.middleware";

const getMe = async (req: CustomRequist, res: Response) => {
  try {
    const user = req.user;

    res.json(user);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal Server error" });
  }
};

export { getMe };
