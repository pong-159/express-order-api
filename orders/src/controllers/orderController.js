import orderService from "../services/orderService.js";

async function getAllOrders(req, res) {
  try {
    const result = await orderService.getAllOrders();
    res.status(200).json(result);
  } catch (err) {
    console.error(`Error while getAllOrders`, err.message);
    res.status(500).json(err);
  }
}

async function addOrder(req, res) {
  try {
    const result = await orderService.addOrder(req);
    res.status(201).json(result);
  } catch (err) {
    console.error(`Error while addOrder`, err.message);
    res.status(500).json(err);
  }
}

async function getOrderById(req, res) {
  try {
    // console.log(req.params);
    const result = await orderService.getOrderById(req.params.id);
    if (result) {
      res.status(200).json(result);
    } else {
      res.status(404).json({ errorMessage: "Product Not Found" });
    }
  } catch (err) {
    console.error(`Error  getOrderById`, err.message);
    res.status(500).json(err);
  }
}

async function getOrderByUserId(req, res) {
  try {
    // console.log(req.params);
    const result = await orderService.getOrderByUserId(req.params.userId);
    if (result) {
      res.status(200).json(result);
    } else {
      res.status(404).json({ errorMessage: "Order Not Found" });
    }
  } catch (err) {
    console.error(`Error  getOrderById`, err.message);
    res.status(500).json(err);
  }
}

async function cancelOrder(req, res) {
  try {
    const result = await orderService.cancelOrder(req.params.id);
    res.status(200).json(result);
  } catch (err) {
    console.error(`Error while cancel product`, err.message);
    res.status(500).json(err);
  }
}

export default {
  getAllOrders,
  addOrder,
  getOrderById,
  cancelOrder,
  getOrderByUserId,
};
