import User from "../models/User.js";

const addUser = async (req) => {
  const newUser = {
    name: req.body.name,
    password: req.body.password,
    age: req.body.age,
    address: req.body.address,
  };
  const user = new User(newUser);
  try {
    const saveUser = await user.save();
    console.log("user has been saved", saveUser);
    // res.json(save);
    return saveUser;
  } catch (err) {
    throw err;
  }
};

const getAllUser = async () => {
  try {
    let users = await User.find();
    console.log(users);
    return users;
  } catch (err) {
    throw err;
  }
};

const login = async (req) => {
  try {
    let users = await User.find();
    console.log(req.params);
    const user = users.filter(
      (u) => u.name === req.body.username && u.password === req.body.password
    );

    return user;
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
const getUserById = async (id) => {
  try {
    let users = await User.findById(id);
    return users;
  } catch (err) {
    throw err;
  }
};

export default {
  getAllUser,
  addUser,
  login,
  getUserById,
};
