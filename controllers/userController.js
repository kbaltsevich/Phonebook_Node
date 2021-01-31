const User = require('../models/user')

const getUsers = (req, res) => {
    const users = User.getAll();
    res.send(users)
}

const createUser = (req, res) => {
    console.log(req.body)
    const nUser = req.body.user;
    console.log(nUser)
    const user = new User(nUser.name, nUser.mobile, nUser.phone, nUser.job) 
    user.save()
    res.send(`${user.name} created`)
}

module.exports = {
    getUsers,
    createUser
}