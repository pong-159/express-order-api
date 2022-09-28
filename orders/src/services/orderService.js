import Order from "../models/Order.js";
import utils from "../utils/index.js";

const addOrder = async (req, res) => {
  const newOrder = {
    ...req.body,
    status: "pending",
  };
  const order = new Order(newOrder);
  try {
    const saveOrder = await order.save();
    console.log("order has been saved", saveOrder);
    return saveOrder;
  } catch (err) {
    throw err;
  }
};

const getAllOrders = async () => {
  try {
    let Orders = await Order.find();
    console.log(Orders);

    return Orders;
  } catch (err) {
    throw err;
  }
};

const cancelOrder = async (id) => {
  try {
    let Orders = await Order.findByIdAndUpdate(id, { status: "cancel" });

    Orders.status = "cancel";
    console.log(Orders);
    return Orders;
  } catch (err) {
    throw err;
  }
};

const getOrderByUserId = async (id) => {
  try {
    let Orders = await Order.find();
    console.log(Orders);
    const res = Orders.filter((o) => o.userId == id);
    console.log(res);

    return res[0] ?? null;
  } catch (err) {
    throw err;
  }
};

const getOrderById = async (id) => {
  try {
    let order = await Order.findById(id);
    if (order) {
      //using messaging queue to send data e.g. kafka, rabbitMQ or using cdc via database is more preferable
      //url should be in dotenv instead
      let resUser = await utils.fetchAPI(
        "http://localhost:5555/api/user/" + order.userId
      );
      let body = order.products.map((i) => i.productId);

      //url should be in dotenv instead
      let resProduct = await utils.fetchAPI(
        "http://localhost:9999/api/products",
        {
          idArr: body,
        }
      );

      if (resUser && resProduct) {
        let orderObj = {
          customerName: resUser.data,
          Products: resProduct.data,
        };
        console.log(orderObj);
        return orderObj;
      }
    } else {
      return null;
    }
  } catch (err) {
    console.log(err);
    // res.sendStatus(400);
    throw err;
  }
};

export default {
  getAllOrders,
  addOrder,
  getOrderById,
  cancelOrder,
  getOrderByUserId,
};
