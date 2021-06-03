import logo from "./logo.svg";
import "./App.scss";
import Header from "./components/Header/Header";
import { Route } from "react-router-dom";
import InventoryList from "./components/InventoryList/InventoryList";

function App() {
  return (
    <div className="App">
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
