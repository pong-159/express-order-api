import express from "express";
const router = express.Router();

import userController from "../controllers/userController.js";

router.get("/users", userController.getAllUsers);

router.get("/user/:id", userController.getUserById);

router.post("/signup", userController.addUser);

router.post("/login", userController.login);

export { router };
