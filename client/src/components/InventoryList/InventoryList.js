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

  deleteHandler = (item) => {
    const deleteItem = this.state.list.find((item) => item.id === item.id);

    this.setState({ ...this.state, visibility: true, deleteItem });
  };

  searchHandler = (query) => {
    this.setState({
      ...this.state,
      filteredList: this.state.list.filter((item) =>
        item.itemName.toLowerCase().includes(query)
      ),
    });
  };

  listFetching = (itemID) => {
    axios
      .delete(`http://localhost:8080/inventory/${itemID}`)
      .then((res) => {
        console.log(res.data);
        this.setState({
          ...this.state,
          list: res.data,
          filteredList: res.data,
        });
      })
      .catch((err) => console.log("Failed to delete ", err));
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
          listFetching={this.listFetching}
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
              deleting={this.deleteHandler}
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
