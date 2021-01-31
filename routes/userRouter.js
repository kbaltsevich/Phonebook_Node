const express = require("express");
const userRouter = express.Router();
const jsonParser = express.json();
const {getUsers, createUser} = require('../controllers/userController')

userRouter.get('/', getUsers)
userRouter.post('/create', jsonParser, createUser)

module.exports = userRouter;