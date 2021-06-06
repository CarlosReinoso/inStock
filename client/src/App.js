import WarehouseList from "./components/warehouseList/WarehouseList";
import "./App.scss";
import Header from "./components/header/Header";
import { Component } from "react";

import InventoryList from "./components/InventoryList/InventoryList";

import { Route } from "react-router-dom";
import WarehouseInventory from "./components/WarehouseInventory/WarehouseInventory";

import axios from "axios";
import WarehouseListItem from "./components/warehouseListItem/WarehouseListItem";

const URL = "http://localhost:8080";

class App extends Component {
  state = {
    warehouseList: [],
    inventory: [],
  };

  componentDidMount() {
    this.getWarehouseList();
    this.getInventoryList();
  }

  componentDidUpdate() {}

  getWarehouseList() {
    axios.get(`${URL}/warehouses`).then((res) => {
      // console.log(res.data);
      this.setState(
        {
          warehouseList: res.data,
        }
        // () => console.log("my state ", this.state)
      );
    });
  }

  getInventoryList() {
    axios.get(`${URL}/inventory`).then((res) => {
      // console.log(res.data);
      this.setState(
        {
          inventory: res.data,
        }
        // () => console.log("my state ", this.state)
      );
    });
  }

  render() {
    if (
      this.state.warehouseList.length === 0 ||
      !this.state.inventory.length === 0
    ) {
      return <h3>...Loading...or....check your internet connection</h3>;
    }

    return (
      <div className="App">
        <Route path="/" render={(renderProps) => <Header {...renderProps} />} />
        <Route
          path="/warehouses/:warehouseName"
          component={WarehouseInventory}
        />
        <Route exact path="/warehouses" component={WarehouseList} />
        <Route
          path="/inventory"
          render={() => <InventoryList inventory={this.state.inventory} />}
        />
      </div>
    );
  }
}

export default App;
