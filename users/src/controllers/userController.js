import userService from "../services/userService.js";

async function getAllUsers(req, res) {
  try {
    console.log("getAllUsers");
    const result = await userService.getAllUser();
    res.status(200).json(result);
  } catch (err) {
    console.error(`Error while getting Users`, err.message);
    res.status(500).json(err);
  }
}

async function addUser(req, res) {
  try {
    const result = await userService.addUser(req);
    res.status(201).json(result);
  } catch (err) {
    console.error(`Error while adding user`, err.message);
    res.status(500).json(err);
  }
}

async function login(req, res) {
  try {
    const result = await userService.login(req);
    if (result.length > 0) {
      res.status(200).json(result);
    } else {
      res.status(400).json("Username not found or password not correct");
    }
  } catch (err) {
    console.error(`Error while logging in`, err.message);
    res.status(500).json(err);
  }
}

async function getUserById(req, res) {
  try {
    console.log(req.params);
    const result = await userService.getUserById(req.params.id);
    if (result) {
      res.status(200).json(result);
    } else {
      res.status(404).json({ errorMessage: "User Not Found" });
    }
  } catch (err) {
    console.error(`Error  getUserById`, err.message);
    res.status(500).json(err);
  }
}

export default {
  getAllUsers,
  addUser,
  login,
  getUserById,
};
