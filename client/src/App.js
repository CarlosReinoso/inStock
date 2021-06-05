
import WarehouseList from './components/warehouseList/WarehouseList';
import WarehouseDetails from './components/warehouseDetails/WarehouseDetails';
import "./App.scss";
import DeleteModal from './components/deleteModal/DeleteModal'
import Header from "./components/header/Header";
import InventoryList from "./components/InventoryList/InventoryList";
import { Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Route path="/:location" component={Header} />
      <Route path="/warehouses" component={WarehouseList} />
      <Route path="/warehouse-details" component={WarehouseDetails} />
      <Route path="/delete-modal" component={DeleteModal} />
      <Route path="/inventory" component={InventoryList} />
    </div>
  );
}

export default App;
