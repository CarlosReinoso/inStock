const express = require("express");
const inventoryRoute = express.Router();
const fs = require("fs");

inventoryRoute.get("/", (req, res) => {
  const inventory = JSON.parse(fs.readFileSync("./data/inventories.json"));
  if (!req.query.warehouseID) {
    if (!inventory) {
      res.status(503).json({ message: "Seems to be an error with the server" });
    } else {
      res.status(200).json(inventory);
    }
  } else {
    console.log(req.query.warehouseID);
    console.log(inventory[0].warehouseID);
    const inventoryFiltered = inventory.filter(
      (item) => item.warehouseID === req.query.warehouseID
    );

    if (!inventoryFiltered) {
      res
        .status(501)
        .json({ message: "No items for the warehouse were found" });
    } else {
      res.status(200).json(inventoryFiltered);
    }
  }
});

module.exports = inventoryRoute;
