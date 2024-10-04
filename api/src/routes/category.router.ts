import { Router } from "express";

import {
  createCategory,
  getCategory,
} from "../controllers/category.controller";

const categoryRouter = Router();

categoryRouter.post("/", createCategory).get("/", getCategory);

export { categoryRouter };
