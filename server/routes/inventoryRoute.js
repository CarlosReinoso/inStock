const express = require("express");
const inventoryRoute = express.Router();

inventoryRoute.get("/", (req, res) => {
  res.send("inventory endpoint");
});

module.exports = inventoryRoute;
