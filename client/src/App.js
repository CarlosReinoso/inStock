
import WarehouseList from './components/warehouseList/WarehouseList';
import "./App.scss";
import DeleteModal from './components/deleteModal/DeleteModal'
import Header from "./components/header/Header";
import InventoryList from "./components/InventoryList/InventoryList";
import { Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Route path="/warehouses">
        <WarehouseList />
      </Route>
      <Route path="/:location" component={Header} />
      <Route path="/delete-modal" component={DeleteModal} />
      <Route path="/inventory" component={InventoryList} />
    </div>
  );
}

export default App;
