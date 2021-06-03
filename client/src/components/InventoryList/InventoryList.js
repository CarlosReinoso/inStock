import "./inventory-list.scss";
import React, { Component } from "react";
import PropTypes from "prop-types";
import SearchBar from "../SearchBar/SearchBar";
import InventoryItem from "../InventoryItem/inventory-item";
import inventory from "../../inventories.json";

class InventoryList extends Component {
  state = { search: "Bag", list: inventory };

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

  searchHandler = (query) => {
    this.setState({ ...this.state, search: query });
  };

  render() {
    return (
      <section className="inventory-list">
        <SearchBar
          title="Inventory"
          searchHandler={this.searchHandler}
          place="item"
        />
        {this.state.list.map((item) => (
          <InventoryItem item={item} />
        ))}
      </section>
    );
  }
}

InventoryList.propTypes = {};

export default InventoryList;
