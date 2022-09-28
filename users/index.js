import express from "express";

import { router as userRouter } from "./src/routes/userRoute.js";

import bodyParser from "body-parser";

import mongoose from "mongoose";
const app = express();
connectDB();

app.use(bodyParser.json());

app.use("/api", userRouter);

app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  console.error(err.message, err.stack);
  res.status(statusCode).json({ message: err.message });

  return;
});

app.listen(5555, () => {
  console.log("app customers listening at 5555");
});

function connectDB() {
  mongoose.connect("mongodb://localhost:27017/users", {
    useNewUrlParser: true,
  });

  const db = mongoose.connection;

  db.on("error", (error) => console.error(error));

  db.once("open", () => console.log("connect to db"));
}
