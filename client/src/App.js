import logo from "./logo.svg";
import "./App.scss";
import Header from "./components/header/header";
import WarehouseDetails from "./components/warehouseDetails/WarehouseDetails";
import { Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Route path="/:location" component={Header} />
      <Route path="/warehouse-details" component={WarehouseDetails} />
    </div>
  );
}

export default App;
