import { RequestHandler } from "express";
import { usersModel } from "../../models";
import bcrypt from "bcryptjs";
const jwt = require("jsonwebtoken");

const login: RequestHandler = async (req, res) => {
  try {
    const { email, password } = req.body;

    console.log("req.body", req.body);

    const user = await usersModel.findOne({ email });
    console.log("ene bol user", user);

    if (!user) {
      return res.status(401).json({ message: "user doesn't exist" });
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(401).json({ message: "password incorrect shuu" });
    }

    const token = jwt.sign(
      { name: user.name, email: user.email, role: user.role },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );

    return res.status(200).json({
      message: "Login successful",
      token,
      user: {
        username: user.name,
        email: user.email,
        id: user.id,
        role: user.role,
      },
    });
  } catch (error) {
    console.log(error);

    return res.status(500).json({ message: "Internal server error" });
  }
};

export { login };

// if (user.role === "admin") {
//   return res.status(200).json({
//     message: "Admin logged in successfully",
//     token,
//     user: {
//       username: user.name,
//       email: user.email,
//       id: user.id,
//       role: user.role,
//     },

//     redirectUrl: "/admin/",
//   });
// } else {
//   return res.status(200).json({
//     message: "User logged in successfully",
//     token,
//     user: {
//       username: user.name,
//       email: user.email,
//       id: user.id,
//       role: user.role,
//     },
//     redirectUrl: "/",
//   });
// }
