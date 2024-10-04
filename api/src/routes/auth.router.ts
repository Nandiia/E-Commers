import { Router } from "express";
import { login } from "../controllers/auth.controller/login.controller";
import { createUser } from "../controllers/auth.controller/register.controller";
import { getAllUsers } from "../controllers/auth.controller/getUser.controller";
import { getUser } from "../controllers/auth.controller/getOneUser";

const authRouter = Router();

authRouter
  .post("/login", login)
  .post("/register", createUser)
  .get("/getUsers", getAllUsers)
  .get("/oneUser", getUser);

export { authRouter };
