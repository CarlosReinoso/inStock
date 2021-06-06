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


//add item to inventory
inventoryRoute.post("/", (req, res) => {
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
  } else if (!warehouseID || !warehouseName || !itemName || !description || !category || !status || !quantity) {
    res.status(400).json({
      message: "incorrect request, information missing",
      body: req.body,
    });
  } else {
    inventoryData.push(newInventory);
    fs.writeFileSync("./data/inventories.json", JSON.stringify(inventoryData));
    res.status(200).json(inventoryData);
  }
});


//edit an item in inventory
inventoryRoute.put("/:inventoryId", (req, res) => {
  const inventoryData = readInventoryData();
  const inventoryId = req.params.inventoryId;
  // console.log("inventoryId", inventoryId);
  let item = inventoryData.find((i) => i.id === inventoryId);
  console.log("item", item);

  const removedItemList = inventoryData.filter(
    (item) => item.id !== inventoryId
  );
  // console.log("removedItemList", removedItemList);

  item = {
    id: req.params.inventoryId,
    warehouseID: req.body.warehouseID,
    warehouseName: req.body.warehouseName,
    itemName: req.body.itemName,
    description: req.body.description,
    category: req.body.category,
    status: req.body.status,
    quantity: 500
  };
  console.log('item after +++', item)
  
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
    fs.writeFileSync("./data/inventories.json", JSON.stringify(removedItemList));
    res.status(200).json(removedItemList);
  }
});

module.exports = inventoryRoute;
