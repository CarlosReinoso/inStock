const express = require("express");
const app = express();
const cors = require("cors");
const warehouseRoute = require("./routes/warehouseRoute");
const inventoryRoute = require("./routes/inventoryRoute");

require("dotenv").config();
app.use(express.json());
app.use(cors());

app.use("/warehouse", warehouseRoute);
app.use("/inventory", inventoryRoute);

app.listen(process.env.PORT || 3030, () =>
  console.log("app listening on port " + `${process.env.PORT || 3030}`)
);
