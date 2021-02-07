const { v4: uuidv4 } = require("uuid");
const filePath = "./areadb.json";
const fs = require("fs");
const content = fs.readFileSync(filePath, "utf8");
const areas = JSON.parse(content);

module.exports = class Area {
  constructor(title, ip, _id = uuidv4()) {
    this.title = title,
    this.ip = ip,
    this._id = _id;
  }
  
  save() {
    areas.push(this)
    fs.writeFileSync(`${filePath}`, JSON.stringify(this));
  }
  delete() {
    const dArea = areas.filter((area) => area._id != this._id);
    fs.writeFileSync(filePath, JSON.stringify(dUsers));
  }
  update() {
    const index = areas.findIndex((item) => item._id == this._id);
    areas[index] = this;
    fs.writeFileSync(filePath, JSON.stringify(areas));
  }
  static getAll() {
    return areas;
  }
  clearAreas() {
    fs.writeFileSync(filePath, JSON.stringify([]));
  }
};
