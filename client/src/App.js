import WarehouseList from "./components/warehouseList/WarehouseList";
import "./App.scss";
import Header from "./components/Header/header";

import WarehouseDetails from "./components/warehouseDetails/WarehouseDetails";

import { Component } from "react";

import InventoryList from "./components/InventoryList/InventoryList";
import AddInventoryItem from "./components/addInventoryItem/AddInventoryItem";

import { Route } from "react-router-dom";
import WarehouseInventory from "./components/WarehouseInventory/WarehouseInventory";
import DetailedItem from "./components/DetailedItem/DetailedItem";

import axios from "axios";

import WarehouseListItem from "./components/warehouseListItem/WarehouseListItem";

import WarehouseForm from "./components/WarehouseForm/WarehouseForm";

const URL = "http://localhost:8080";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Route path="/" render={(renderProps) => <Header {...renderProps} />} />
        <Route
          exact
          path="/warehouses/:warehouseName"
          component={WarehouseInventory}
        />

        <Route exact path="/warehouse/add" component={WarehouseForm} />
        <Route
          exact
          path="/warehouses/:warehouseName/edit"
          component={WarehouseForm}
        />
        <Route path="/warehouse/edit" component={WarehouseForm} />
        <Route exact path="/warehouses" component={WarehouseList} />

        <Route exact path="/inventory" render={() => <InventoryList />} />
        <Route exact path="/item/add" component={AddInventoryItem} />
        <Route
          path="/inventory/:itemId"
          render={(renderProps) => <DetailedItem {...renderProps} />}
        />

        <footer>© InStock Inc. All Rights Reserved.</footer>
      </div>
    );
  }
}

export default App;
