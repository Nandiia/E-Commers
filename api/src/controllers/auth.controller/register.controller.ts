import { RequestHandler } from "express";
import { usersModel } from "../../models";
import bcrypt from "bcryptjs";

const createUser: RequestHandler = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const salt = bcrypt.genSaltSync(10);
    const hashedPassword = bcrypt.hashSync(password, salt);

    await usersModel.create({
      name,
      email,
      password: hashedPassword,
      role: "user",
      createAt: new Date(),
      updateAt: new Date(),
    });

    return res.status(201).json({
      message: "User created successfully",
    });
  } catch (error) {
    return res.status(500).json({
      message: "Internal server error",
    });
  }
};

export { createUser };
