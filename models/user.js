const { v4: uuidv4 } = require('uuid');
const filePath = "./db.json";
const fs = require("fs");
const content = fs.readFileSync(filePath,"utf8");
const users = JSON.parse(content);

module.exports = class User{
    constructor(name, mobile, phone, job, _id =  uuidv4()){
        this._id = _id;
        this.name = name;
        this.mobile = mobile;
        this.phone = phone;
        this.job = job
    }
    save(){
        users.push(this)
        fs.writeFileSync(filePath, JSON.stringify(users))
    }
    delete(){
        const dUsers = users.filter(user => user._id != this._id);
        fs.writeFileSync(filePath, JSON.stringify(dUsers))
    }
    put(){
        const index = users.findIndex(item => item._id == this._id)
        users[index] = this;
        fs.writeFileSync(filePath, JSON.stringify(users))
    }
    static getAll(){
        return users;
    }
}