import { Router } from "express";
import { createAuthorController } from "../controllers/author/create-author.controller";

const authorRouter = Router();

authorRouter.post("/", createAuthorController);

export { authorRouter };
