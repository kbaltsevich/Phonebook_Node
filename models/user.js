const { v4: uuidv4 } = require('uuid');
const filePath = "./db.json";
const fs = require("fs");
const content = fs.readFileSync(filePath,"utf8");
const users = JSON.parse(content);

module.exports = class User{
    constructor(name, mobile, phone, job){
        this._id = uuidv4();
        this.name = name;
        this.mobile = mobile;
        this.phone = phone;
        this.job = job
    }
    save(){
        users.push(this)
        fs.writeFileSync(filePath, JSON.stringify(users))
    }
    static getAll(){
        return users;
    }
}