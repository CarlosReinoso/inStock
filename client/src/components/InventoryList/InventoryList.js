import "./inventory-list.scss";
import React, { Component } from "react";
import PropTypes from "prop-types";
import SearchBar from "../SearchBar/SearchBar";
import InventoryItem from "../InventoryItem/inventory-item";
import inventory from "../../inventories.json";
import icon from "../../assets/Icons/sort-24px.svg";

class InventoryList extends Component {
  state = { search: "", list: this.props.inventory };

  componentDidUpdate(prevProps, prevState) {
    if (this.state.search !== "" && prevState.search !== this.state.search) {
      this.setState(
        {
          ...this.state,
          list: inventory.filter((item) =>
            item.itemName
              .toLowerCase()
              .includes(this.state.search.toLowerCase())
          ),
        },
        console.log(this.state)
      );
    }
  }

  componentDidMount() {
    console.log(this.props, "props inventory");
    console.log(this.state);
    this.setState({ ...this.state, list: this.props.inventory }, () =>
      console.log(this.state)
    );
  }

  searchHandler = (query) => {
    this.setState({ ...this.state, search: query });
  };

  render() {
    const { inventory } = this.props;
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

        {this.state.list.map((item) => (
          <InventoryItem item={item} />
        ))}
      </section>
    );
  }
}

InventoryList.propTypes = {};

export default InventoryList;
