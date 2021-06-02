const express = require("express");
const warehouseRoute = express.Router();

warehouseRoute.get("/", (req, res) => {
  res.send("warehouse endpoint");
});

module.exports = warehouseRoute;
