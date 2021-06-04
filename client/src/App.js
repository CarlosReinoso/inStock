
import WarehouseList from './components/warehouseList/WarehouseList';
import "./App.scss";

import Header from "./components/Header/Header";
import InventoryList from "./components/InventoryList/InventoryList";
import { Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      {/* just so i can navigate, can delete */}
      <Link to="/warehouses">warehouse</Link>
      <Route path="/warehouses">
        <WarehouseList />
      </Route>
      <Route path="/:location" component={Header} />
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
