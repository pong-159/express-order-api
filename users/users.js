const express = require("express");
const app = express();

const bodyParser = require("body-parser");

const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/users", {
  useNewUrlParser: true,
});

const db = mongoose.connection;

db.on("error", (error) => console.error(error));

db.once("open", () => console.log("connect to db"));

app.use(bodyParser.json());

require("./User");

const User = mongoose.model("User");

app.post("/user", async (req, res) => {
  const newUser = {
    name: req.body.name,
    password: req.body.password,
    age: req.body.age,
    address: req.body.address,
  };
  const user = new User(newUser);
  try {
    const save = await user.save();
    console.log("user has been saved", save);
    res.json(save);
  } catch (err) {
    throw err;
  }
});

app.get("/users", async (req, res) => {
  try {
    let users = await User.find();
    console.log(users);

    res.json(users);
  } catch (err) {
    throw err;
  }
});

app.get("/user/:username", async (req, res) => {
  try {
    let users = await User.find();
    const user = users.filter((u) => u.name === req.params.username);
    if (user.length > 0) {
      res.json(user[0]);
    } else {
      res.sendStatus(404);
    }
    // console.log(user);

    // res.json(users);
  } catch (err) {
    throw err;
  }
});

// app.get("/customer/:id", async (req, res) => {
//   try {
//     let customer = await Customer.findById(req.params.id);
//     if (customer) {
//       res.json(customer);
//     } else {
//       res.sendStatus(404);
//     }
//   } catch (err) {
//     res.sendStatus(400);
//     // throw err;
//   }
// });

app.listen(5555, () => {
  console.log("app customers listening at 5555");
});
