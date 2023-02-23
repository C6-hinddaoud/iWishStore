const express = require("express");
const { getitems, createNewItem } = require("../controllers/items");




const itemRouter = express.Router();

itemRouter.get("/", getitems);
itemRouter.post("/", createNewItem);
module.exports = itemRouter;