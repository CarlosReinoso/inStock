const express = require("express");
const warehouseRoute = express.Router();
const fs = require("fs");
const { v4: uuidv4 } = require("uuid");

const readWarehouseData = () => {
  return JSON.parse(fs.readFileSync("./data/warehouses.json"));
};

warehouseRoute.get("/", (_req, res) => {
  const warehouseList = readWarehouseData();
  res.status(200).json(warehouseList);
});

warehouseRoute.post("/", (req, res) => {
  const { name, address, city, country, contact } = req.body;

  const newWarehouse = { id: uuidv4(), name, address, city, country, contact };
  const warehouseList = JSON.parse(fs.readFileSync("./data/warehouses.json"));

  if (!warehouseList) {
    res.status(503).json({ message: "something is wrong with the server" });
  } else if (!name || !address || !city || !country || !contact) {
    res.status(400).json({
      message: "incorrect request, information missing",
      body: req.body,
    });
  } else {
    warehouseList.push(newWarehouse);
    fs.writeFileSync("./data/warehouses.json", JSON.stringify(warehouseList));
    res.status(200).json(warehouseList);
  }
});

warehouseRoute.get("/:warehouseName", (req, res) => {
  const warehouse = readWarehouseData();
  const data = warehouse.find((item) => item.name === req.params.warehouseName);
  if (!data) {
    res.status(404).json({ message: "Item not found" });
  } else {
    res.status(200).send({ data });
  }
});


module.exports = warehouseRoute;
