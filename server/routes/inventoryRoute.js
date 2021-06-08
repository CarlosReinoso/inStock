const express = require("express");
const inventoryRoute = express.Router();
const fs = require("fs");
const { v4: uuidv4 } = require("uuid");

const readInventoryData = () => {
  return JSON.parse(fs.readFileSync("./data/inventories.json"));
};

const writeInventoryData = (myData) => {
  return fs.writeFileSync("./data/inventories.json", JSON.stringify(myData));
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

//add item to inventory
inventoryRoute.post("/add", (req, res) => {
  const inventoryData = readInventoryData();

  const {
    warehouseID,
    warehouseName,
    itemName,
    description,
    category,
    status,
    quantity,
  } = req.body;

  const newInventory = {
    id: uuidv4(),
    warehouseID,
    warehouseName,
    itemName,
    description,
    category,
    status,
    quantity,
  };

  if (!inventoryData) {
    res.status(503).json({ message: "something is wrong with the server" });
  } else if (
    !warehouseID ||
    !warehouseName ||
    !itemName ||
    !description ||
    !category ||
    !status ||
    !quantity
  ) {
    res.status(400).json({
      message: "incorrect request, information missing",
      body: req.body,
    });
  } else {
    inventoryData.push(newInventory);
    fs.writeFileSync("./data/inventories.json", JSON.stringify(inventoryData));
    res.status(200).json(newInventory);
  }
});

//edit an item in inventory
inventoryRoute.put("edit/:inventoryId", (req, res) => {
  const inventoryData = readInventoryData();
  const inventoryId = req.params.inventoryId;
  let item = inventoryData.find((i) => i.id === inventoryId);
  console.log("item", item);

  const removedItemList = inventoryData.filter(
    (item) => item.id !== inventoryId
  );

  item = {
    id: req.params.inventoryId,
    warehouseID: req.body.warehouseID,
    warehouseName: req.body.warehouseName,
    itemName: req.body.itemName,
    description: req.body.description,
    category: req.body.category,
    status: req.body.status,
    quantity: req.body.quantity,
  };

  const {
    warehouseID,
    warehouseName,
    itemName,
    description,
    category,
    status,
  } = req.body;

  if (!inventoryData) {
    res.status(503).json({ message: "something is wrong with the server" });
  } else if (
    !warehouseID ||
    !warehouseName ||
    !itemName ||
    !description ||
    !category ||
    !status
  ) {
    res.status(400).json({
      message: "incorrect request, information missing",
      body: req.body,
    });
  } else {
    removedItemList.push(item);
    fs.writeFileSync(
      "./data/inventories.json",
      JSON.stringify(removedItemList)
    );
    res.status(200).json(removedItemList);
  }
});

inventoryRoute.delete("/:itemID", (req, res) => {
  const inventory = readInventoryData();
  const item = inventory.find((item) => item.id === req.params.itemID);

  if (!item) {
    res
      .status(404)
      .json({ message: "Could not delete the item as it does not exist" });
  } else {
    const data = inventory.filter((item) => item.id !== req.params.itemID);
    writeInventoryData(data);
    res.status(200).json(data);
  }
});

module.exports = inventoryRoute;
