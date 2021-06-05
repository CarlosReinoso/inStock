import "./warehouse-inventory.scss";

import React, { Component } from "react";
import PropTypes from "prop-types";
import arrowBack from "../../assets/Icons/arrow_back-24px.svg";
import InventoryItem from "../InventoryItem/inventory-item";
import inventory from "../../inventories.json";
const warehouseInfo = {
  id: "2922c286-16cd-4d43-ab98-c79f698aeab0",
  name: "Manhattan",
  address: "503 Broadway",
  city: "New York",
  country: "USA",
  contact: {
    name: "Parmin Aujla",
    position: "Warehouse Manager",
    phone: "+1 (646) 123-1234",
    email: "paujla@instock.com",
  },
};
class WarehouseInventory extends Component {
  render() {
    const { warehouseName } = this.props.match.params;
    console.log(this.props);
    const inventoryFiltered = inventory.filter(
      (item) => item.warehouseName.toLowerCase() === warehouseName.toLowerCase()
    );
    return (
      <div className="warehouse-inventory">
        <section className="warehouse-inventory__header">
          <img
            className="warehouse-inventory__back-logo"
            src={arrowBack}
            alt="arrow to back to inventory"
          />
          <h1 className="warehouse-inventory__title">{warehouseName}</h1>
          <svg
            className="warehouse-inventory__edit-logo"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M3 17.25V21H6.75L17.81 9.94L14.06 6.19L3 17.25ZM20.71 7.04C21.1 6.65 21.1 6.02 20.71 5.63L18.37 3.29C17.98 2.9 17.35 2.9 16.96 3.29L15.13 5.12L18.88 8.87L20.71 7.04V7.04Z"
              fill="#fff"
            />
          </svg>
        </section>
        <address className="warehouse-inventory__address">
          <label>WAREHOUSE ADDRESS</label>
        </address>
        {inventoryFiltered.map((item) => (
          <InventoryItem item={item} />
        ))}
      </div>
    );
  }
}

WarehouseInventory.propTypes = {};

export default WarehouseInventory;
