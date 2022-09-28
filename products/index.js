import express from "express";

import { router as productRouter } from "./src/routes/productRoute.js";

import bodyParser from "body-parser";

import mongoose from "mongoose";

const app = express();

connectDB();

app.use(bodyParser.json());

app.use("/api", productRouter);

app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  console.error(err.message, err.stack);
  res.status(statusCode).json({ message: err.message });

  return;
});
//shoud use dotenv for storing  constant instead
app.listen(9999, () => {
  console.log("app products listening at 9999");
});
//shoud use dotenv for storing  constant instead
function connectDB() {
  mongoose.connect("mongodb://localhost:27017/products", {
    useNewUrlParser: true,
  });

  const db = mongoose.connection;

  db.on("error", (error) => console.error(error));

  db.once("open", () => console.log("connect to db"));
}
