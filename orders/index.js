import express from "express";

import { router as orderRouter } from "./src/routes/orderRoute.js";

import bodyParser from "body-parser";

import mongoose from "mongoose";

const app = express();

const PORT = 7777;

connectDB();

app.use(bodyParser.json());

app.use("/api", orderRouter);

app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  console.error(err.message, err.stack);
  res.status(statusCode).json({ message: err.message });

  return;
});
// should use dotenv for constant instead
app.listen(PORT, () => {
  console.log(`app products listening at ${PORT}`);
});

function connectDB() {
  // should use dotenv for constant instead
  mongoose.connect("mongodb://localhost:27017/orders", {
    useNewUrlParser: true,
  });

  const db = mongoose.connection;

  db.on("error", (error) => console.error(error));

  db.once("open", () => console.log("connect to db"));
}
