import "./inventory-list.scss";
import React, { Component } from "react";
import PropTypes from "prop-types";
import SearchBar from "../SearchBar/SearchBar";
import InventoryItem from "../InventoryItem/inventory-item";
import inventory from "../../inventories.json";
import icon from "../../assets/Icons/sort-24px.svg";
import axios from "axios";
import ColumnsLabels from "../ColumnsLabels/ColumnsLabels";
class InventoryList extends Component {
  state = {
    search: "",
    list: [],
    filteredList: [],
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

  render() {
    return (
      <section className="inventory-list">
        <SearchBar
          title="Inventory"
          searchHandler={this.searchHandler}
          place="item"
        />
        <ColumnsLabels />
        {this.state.filteredList.map((item) => (
          <InventoryItem key={item.id} item={item} />
        ))}
      </section>
    );
  }
}

InventoryList.propTypes = {};

export default InventoryList;
