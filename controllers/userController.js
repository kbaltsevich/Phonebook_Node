const User = require('../models/user')

const getUsers = (req, res) => {
    const users = User.getAll();
    res.send(users)
}

module.exports = {
    getUsers
}