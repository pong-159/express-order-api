import express from "express";
const router = express.Router();

import productController from "../controllers/productController.js";

router.get("/products", productController.getAllProducts);

router.post("/product", productController.addProduct);

router.get("/product/:id", productController.getProductById);

router.post("/products", productController.getMultipleProductById);

export { router };
