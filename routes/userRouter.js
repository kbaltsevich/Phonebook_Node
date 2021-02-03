const express = require("express");
const userRouter = express.Router();
const jsonParser = express.json();
const {getUsers, createUser, deleteUser, updatrUser, getUserId} = require('../controllers/userController')

userRouter.get('/', getUsers)
userRouter.get('/:id', getUserId)
userRouter.post('/', jsonParser, createUser)
userRouter.delete('/', jsonParser, deleteUser)
userRouter.put('/', jsonParser, updatrUser)

module.exports = userRouter;