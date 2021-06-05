
import WarehouseList from './components/warehouseList/WarehouseList';
import "./App.scss";
import Header from "./components/header/header";
import WarehouseDetails from "./components/warehouseDetails/WarehouseDetails";
import { Route } from "react-router-dom";
import InventoryList from "./components/InventoryList/InventoryList";


function App() {
  return (
    <div className="App">
   
     
      <Route path="/warehouses">
        <WarehouseList />
      </Route>
      <Route path="/:location" component={Header} />

      <Route path="/warehouse-details" component={WarehouseDetails} />
      <Route path="/inventory" component={InventoryList} />
    
    </div>
  );
}

export default App;
