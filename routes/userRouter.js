const express = require("express");
const userRouter = express.Router();
const jsonParser = express.json();
const {getUsers, createUser, deleteUser, updatrUser} = require('../controllers/userController')

userRouter.get('/', getUsers)
userRouter.post('/', jsonParser, createUser)
userRouter.delete('/', jsonParser, deleteUser)
userRouter.put('/', jsonParser, updatrUser)

module.exports = userRouter;