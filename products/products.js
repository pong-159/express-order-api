const express = require("express");
const app = express();

const bodyParser = require("body-parser");

const mongoose = require("mongoose");

require("./Product");
const Product = mongoose.model("Product");

mongoose.connect("mongodb://localhost:27017/products", {
  useNewUrlParser: true,
});

const db = mongoose.connection;

app.use(bodyParser.json());

app.post("/product", async (req, res) => {
  const newProduct = {
    name: req.body.name,
    description: req.body.description,
  };
  const product = new Product(newProduct);
  try {
    const save = await product.save();
    console.log("Product has been saved", save);
    res.json(save);
  } catch (err) {
    throw err;
  }
});

app.get("/Products", async (req, res) => {
  try {
    let products = await Product.find();
    console.log(products);

    res.json(products);
  } catch (err) {
    throw err;
  }
});

app.get("/product/:id", async (req, res) => {
  try {
    let products = await Product.findById(req.params.id);
    if (products) {
      res.json(products);
    } else {
      res.sendStatus(404);
    }
  } catch (err) {
    throw err;
  }
});

db.on("error", (error) => console.error(error));

db.once("open", () => console.log("connect to db"));

app.listen(3000, () => {
  console.log("app products listening at 3000");
});
