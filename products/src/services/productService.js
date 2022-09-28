import Product from "../models/Product.js";
import utils from "../utils/index.js";

const addProduct = async (req, res) => {
  const newProduct = {
    name: req.body.name,
    description: req.body.description,
  };
  const product = new Product(newProduct);
  try {
    const saveProduct = await product.save();
    console.log("Product has been saved", saveProduct);
    return saveProduct;
  } catch (err) {
    throw err;
  }
};

const getAllProduct = async () => {
  try {
    let products = await Product.find();
    console.log(products);

    return products;
  } catch (err) {
    throw err;
  }
};

const getProductById = async (id) => {
  try {
    let products = await Product.findById(id);

    return products;
  } catch (err) {
    throw err;
  }
};

const getMultipleProductById = async (idArr) => {
  try {
    const res = [];
    for (let id of idArr) {
      let products = await Product.findById(id);
      if (products) {
        res.push(products);
      }
    }

    return res;
  } catch (err) {
    throw err;
  }
};

// const getUserByUsername = async (req, res) => {
//   try {
//     let users = await User.find();
//     const user = users.filter((u) => u.name === req.params.username);
//     if (user.length > 0) {
//       res.json(user[0]);
//     } else {
//       res.sendStatus(404);
//     }
//     // console.log(user);

//     // res.json(users);
//   } catch (err) {
//     throw err;
//   }
// };

export default {
  getAllProduct,
  addProduct,
  getProductById,
  getMultipleProductById,
};
