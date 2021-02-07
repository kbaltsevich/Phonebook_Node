const express = require("express");
const areaRouter = express.Router();
const jsonParser = express.json();
const {createArea, getAllAreas} = require('../controllers/areaController')

areaRouter.post('/', jsonParser, createArea)
areaRouter.get('/', getAllAreas)


module.exports = areaRouter;