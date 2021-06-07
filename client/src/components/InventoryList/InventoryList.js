import "./inventory-list.scss";
import React, { Component } from "react";
import PropTypes from "prop-types";
import SearchBar from "../SearchBar/SearchBar";
import InventoryItem from "../InventoryItem/inventory-item";
import inventory from "../../inventories.json";
import icon from "../../assets/Icons/sort-24px.svg";
import axios from "axios";
import ColumnsLabels from "../ColumnsLabels/ColumnsLabels";
import DeleteInventory from "../DeleteInventory/DeleteInventory";
class InventoryList extends Component {
  state = {
    search: "",
    list: [],
    filteredList: [],
    visibility: false,
    deleteItem: [],
  };

  getInventoryList = () => {
    axios.get(`http://localhost:8080/inventory`).then((res) => {
      console.log(res.data);
      this.setState({ filteredList: res.data, list: res.data }, () =>
        console.log("my state ", this.state)
      );
    });
  };

  componentDidMount() {
    this.getInventoryList();
  }

  componentDidUpdate(prevProps, prevState) {}

  searchHandler = (query) => {
    this.setState({
      ...this.state,
      filteredList: this.state.list.filter((item) =>
        item.itemName.toLowerCase().includes(query)
      ),
    });
  };

  deleteHandler = (item) => {
    console.log("my item", this.state.visibility);
    this.setState({ ...this.state, deleteItem: item, visibility: true });
  };

  stateReset = () => {
    this.setState({ ...this.state, visibility: false });
  };

  render() {
    return (
      <>
        <DeleteInventory
          stateReset={this.stateReset}
          deleteItem={this.state.deleteItem}
          visibility={this.state.visibility}
        />
        <section className="inventory-list">
          <SearchBar
            title="Inventory"
            searchHandler={this.searchHandler}
            place="item"
          />
          <ColumnsLabels />
          {this.state.filteredList.map((item) => (
            <InventoryItem
              deleteHandler={this.deleteHandler}
              key={item.id}
              item={item}
            />
          ))}
        </section>
      </>
    );
  }
}

InventoryList.propTypes = {};

export default InventoryList;
