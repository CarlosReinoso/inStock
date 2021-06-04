const { RSA_NO_PADDING } = require("constants");
const express = require("express");
const inventoryRoute = express.Router();
const fs = require("fs");

inventoryRoute.get("/", (req, res) => {
  const inventory = JSON.parse(fs.readFileSync("./data/inventories.json"));
  if (!inventory) {
    res.status(503).json({ message: "Seems to be an error with the server" });
  } else {
    res.status(200).json(inventory);
  }
});

module.exports = inventoryRoute;
