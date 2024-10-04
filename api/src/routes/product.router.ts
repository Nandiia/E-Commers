import { Router } from "express";
import { createProduct, getProduct } from "../controllers/product.controller";

import getOneProduct from "../controllers/product.controller/getOneProduct.controller";

const productRouter = Router();

productRouter
  .get("/", getProduct)
  .post("/", createProduct)
  .get("/:id", getOneProduct);

export { productRouter };
