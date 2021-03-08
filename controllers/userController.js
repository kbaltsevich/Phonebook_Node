const User = require("../models/user");

const getUsers = (req, res) => {
  const users = User.getAll();
  res.send(users);
};

const createUser = (req, res) => {
  console.log(res)
  const nUser = req.body.user;
  const user = new User(nUser.name, nUser.mobile, nUser.phone, nUser.job);
  user.save();
  res.send(`${user.name} created`);
};

const deleteUser = (req, res) => {
  const dUser = new User(
    req.body.user.name,
    req.body.user.mobile,
    req.body.user.phone,
    req.body.user.job,
    req.body.user._id
  );
  dUser.delete();
  res.send(`${dUser.name} was deleted`);
};

const updatrUser = (req, res) => {
  const pUser = new User(
    req.body.user.name,
    req.body.user.mobile,
    req.body.user.phone,
    req.body.user.job,
    req.body.user._id
  );
  pUser.put();
  res.send(`${pUser.name} was put`);
};

const getUserId = (req, res) => {
  const user = User.getAll().find((item) => item._id == req.params.id);
  res.send(user);
};

module.exports = {
  getUsers,
  createUser,
  deleteUser,
  updatrUser,
  getUserId,
};
