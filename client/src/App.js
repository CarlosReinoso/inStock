import WarehouseList from "./components/warehouseList/WarehouseList";
import "./App.scss";
import Header from "./components/header/Header";
import WarehouseDetails from "./components/warehouseDetails/WarehouseDetails";

import InventoryList from "./components/InventoryList/InventoryList";

import { Route, Link } from "react-router-dom";
import WarehouseInventory from "./components/WarehouseInventory/WarehouseInventory";


function App() {
  return (
    <div className="App">

      <Route path="/" render={(renderProps) => <Header {...renderProps} />} />
      <Route path="/warehouse/:warehouseName" component={WarehouseInventory} />
      <Route exact path="/warehouse" component={WarehouseList} />

      <Route path="/inventory" component={InventoryList} />


    </div>
  );
}

export default App;
