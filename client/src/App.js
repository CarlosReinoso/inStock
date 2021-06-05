import WarehouseList from "./components/warehouseList/WarehouseList";
import "./App.scss";

import Header from "./components/Header/Header";
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

      <button>Save</button>
      <button className="button-secondary">Save</button>
      <button className="button-delete">Save</button>
      <button>Save</button>
      <p>This is remy test</p>
    </div>
  );
}

export default App;
