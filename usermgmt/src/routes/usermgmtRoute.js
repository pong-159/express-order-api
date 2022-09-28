import express from "express";
const router = express.Router();

import usermgmtController from "../controllers/usermgmtController.js";

router.get("/getProfile/:id", usermgmtController.getProfile);

router.get("/getOrder/:userId", usermgmtController.getOrder);

export { router };
