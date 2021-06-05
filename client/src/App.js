
import WarehouseList from './components/warehouseList/WarehouseList';
import "./App.scss";
import Header from "./components/header/Header";
import WarehouseDetails from "./components/warehouseDetails/WarehouseDetails";
import { Route } from "react-router-dom";
import InventoryList from "./components/InventoryList/InventoryList";
import AddInventoryItem from './components/addInventoryItem/AddInventoryItem';


function App() {
  return (
    <div className="App">
   
     
      <Route path="/warehouses">
        <WarehouseList />
      </Route>
      <Route path="/:location" component={Header} />
      <Route path="/addinvent" component={AddInventoryItem} />
      <Route path="/warehouse-details" component={WarehouseDetails} />
      <Route path="/inventory" component={InventoryList} />
    
    </div>
  );
}

export default App;
