import "./inventory-list.scss";
import React, { Component } from "react";
import PropTypes from "prop-types";
import SearchBar from "../SearchBar/SearchBar";
import InventoryItem from "../InventoryItem/inventory-item";
import inventory from "../../inventories.json";
import icon from "../../assets/Icons/sort-24px.svg";
import axios from "axios";
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
        <section className="inventory-list__columns">
          <div className="inventory-list__label-container --first">
            <label className="inventory-list__columns-label">
              INVENTORY ITEM
            </label>
            <img src={icon} />
          </div>
          <div className="inventory-list__label-container">
            <label className="inventory-list__columns-label">CATEGORY </label>
            <img src={icon} />
          </div>

          <div className="inventory-list__label-container ">
            <label className="inventory-list__columns-label">STATUS </label>
            <img src={icon} />
          </div>
          <div className="inventory-list__label-container">
            <label className="inventory-list__columns-label --padleft">
              QTY
            </label>
            <img src={icon} />
          </div>
          <div className="inventory-list__label-container --marginright">
            <label className="inventory-list__columns-label ">WAREHOUSE </label>
            <img src={icon} />
          </div>

          <div className="inventory-list__label-container --end">
            <label className="inventory-list__columns-label">ACTIONS </label>
          </div>
        </section>

        {this.state.filteredList.map((item) => (
          <InventoryItem key={item.id} item={item} />
        ))}
      </section>
    );
  }
}

InventoryList.propTypes = {};

export default InventoryList;
