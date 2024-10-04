import { RequestHandler } from "express";
import { Request, Response, NextFunction } from "express";

const jwt = require("jsonwebtoken");

type User = {
  _id: string;
};

interface CustomRequist extends Request {
  user?: User;
}

const authMiddleware = (
  req: CustomRequist,
  res: Response,
  next: NextFunction
) => {
  if (req.path.startsWith("auth")) return next();

  const auth = req.headers.authorization;

  const token = auth?.split(" ")[1];

  if (!token) return res.status(401).json({ error: "Newterne uu ho" });

  try {
    const user = jwt.verify(token, process.env.JWT_SECRET as string);

    req.user = user;

    next();
  } catch (error) {
    return res.status(401).json({ error: "Newterne uu" });
  }
};

export { authMiddleware, CustomRequist };
