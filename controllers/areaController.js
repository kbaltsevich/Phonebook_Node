const Area = require("../models/area");

const createArea = (req, res) => {
  const title = req.body.title;
  const ip = req.body.ip;
  const area = new Area(title, ip);
  area.save();
  res.send(`${area.title} created`);
};

const getAllAreas = (req, res) => {
  const areas = Area.getAll()
  res.send(areas)  
};

module.exports = {
  createArea,
  getAllAreas,
};
