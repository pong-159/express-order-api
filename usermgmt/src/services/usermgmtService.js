import utils from "../utils/index.js";

const getUserById = async (id) => {
  try {
    let users = await User.findById(id);
    return users;
  } catch (err) {
    throw err;
  }
};

const getProfile = async (id) => {
  try {
    //url should be in dotenv instead
    const res = await utils.fetchAPI("http://localhost:5555/api/user/" + id);
    if (res) {
      return res.data;
    }
    return null;
  } catch (err) {
    throw err;
  }
};

const getOrder = async (id) => {
  try {
    //url should be in dotenv instead
    const res = await utils.fetchAPI("http://localhost:7777/api/order/" + id);
    if (res) {
      return res.data;
    }
    return null;
  } catch (err) {
    throw err;
  }
};

export default {
  getProfile,
  getOrder,
};
