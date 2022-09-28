import express from "express";
const router = express.Router();

import orderController from "../controllers/orderController.js";

router.get("/orders", orderController.getAllOrders);

router.post("/order", orderController.addOrder);

router.patch("/cancelorder/:id", orderController.cancelOrder);

router.get("/orders/:id", orderController.getOrderById);

router.get("/order/:userId", orderController.getOrderByUserId);

export { router };
