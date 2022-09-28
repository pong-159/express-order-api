import productService from "../services/productService.js";

async function getAllProducts(req, res) {
  try {
    const result = await productService.getAllProduct();
    res.status(200).json(result);
  } catch (err) {
    console.error(`Error while getting products`, err.message);
    res.status(500).json(err);
  }
}

async function addProduct(req, res) {
  try {
    const result = await productService.addProduct(req);
    res.status(201).json(result);
  } catch (err) {
    console.error(`Error while adding product`, err.message);
    res.status(500).json(err);
  }
}

async function getProductById(req, res) {
  try {
    // console.log(req.params);
    const result = await productService.getProductById(req.params.id);
    if (result) {
      res.status(200).json(result);
    } else {
      res.status(404).json({ errorMessage: "Product Not Found" });
    }
  } catch (err) {
    console.error(`Error  getProductById`, err.message);
    res.status(500).json(err);
  }
}

async function getMultipleProductById(req, res) {
  try {
    // console.log(req.params);
    const result = await productService.getMultipleProductById(req.body.idArr);
    if (result.length > 0) {
      res.status(200).json(result);
    } else {
      res.status(404).json({ errorMessage: "Product Not Found" });
    }
  } catch (err) {
    console.error(`Error  getProductById`, err.message);
    res.status(500).json(err);
  }
}

export default {
  getAllProducts,
  addProduct,
  getProductById,
  getMultipleProductById,
};
