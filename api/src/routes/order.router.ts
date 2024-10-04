import { Router } from "express";
import { createOrder, getOrder } from "../controllers/order.controller";

const orderRouter = Router();

orderRouter.get("/", getOrder).post("/", createOrder);

export { orderRouter };
