const express = require("express");
const app = express();

const axios = require("axios").default;

const bodyParser = require("body-parser");

const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/orders", {
  useNewUrlParser: true,
});

const db = mongoose.connection;

db.on("error", (error) => console.error(error));

db.once("open", () => console.log("connect to db"));

app.use(bodyParser.json());

require("./Order");

const Order = mongoose.model("Order");

app.post("/order", async (req, res) => {
  const newOrder = {
    ...req.body,
    status: "pending",
  };
  const order = new Order(newOrder);
  try {
    const save = await order.save();
    console.log("order has been saved", save);
    res.json(save);
  } catch (err) {
    throw err;
  }
});

app.get("/orders", async (req, res) => {
  try {
    let Orders = await Order.find();
    console.log(Orders);

    res.json(Orders);
  } catch (err) {
    throw err;
  }
});

app.get("/order/:id", async (req, res) => {
  try {
    let order = await Order.findById(req.params.id);
    if (order) {
      let resCus = await axios.get(
        "http://localhost:5555/customer/" + order.CustomerID
      );
      let resBook = await axios.get(
        "http://localhost:3000/book/" + order.BookID
      );
      if (resCus && resBook) {
        let orderObj = {
          customerName: resCus.data.name,
          bookTitle: resBook.data.title,
        };
        console.log("res :: ", orderObj);
        res.json(orderObj);
      }
    } else {
      res.sendStatus(404);
    }
  } catch (err) {
    console.log(err);
    res.sendStatus(400);
    // throw err;
  }
});

app.listen(7777, () => {
  console.log("app orders listening at 7777");
});
