const express = require("express");
const inventoryRoute = express.Router();
const fs = require("fs");

const readInventoryData = () => {
  return JSON.parse(fs.readFileSync("./data/inventories.json"));
};

const writeInventoryData = (myData) => {
  return JSON.stringify(fs.writeFileSync("./data/inventories.json", myData));
};

const getInventoriesList = (_req, res) => {
  const inventoryList = readWarehouseData();
  res.status(200).json(inventoryList);
};

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

inventoryRoute.get("/:itemID", (req, res) => {
  const inventory = readInventoryData();
  const data = inventory.find((item) => item.id === req.params.itemID);
  if (!data) {
    res.status(404).json({ message: "Item not found" });
  } else {
    res.status(200).send({ data });
  }
});

module.exports = inventoryRoute;
