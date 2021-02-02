const express = require("express");
const userRouter = express.Router();
const jsonParser = express.json();
const {getUsers, createUser, deleteUser} = require('../controllers/userController')

userRouter.get('/', getUsers)
userRouter.post('/create', jsonParser, createUser)
userRouter.delete('/delete-user', jsonParser, deleteUser)

module.exports = userRouter;