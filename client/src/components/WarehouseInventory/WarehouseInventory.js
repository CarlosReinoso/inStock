import "./warehouse-inventory.scss";

import React, { Component } from "react";
import PropTypes from "prop-types";
import arrowBack from "../../assets/Icons/arrow_back-24px.svg";
import InventoryItem from "../InventoryItem/inventory-item";
import inventory from "../../inventories.json";
import ColumnsLabels from "../ColumnsLabels/ColumnsLabels";
import EditButton from "../EditButton/EditButton";
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
          <EditButton />
        </section>

        <address className="warehouse-inventory__address">
          <div className="warehouse-inventory__div-1">
            <label className="warehouse-inventory__label">
              WAREHOUSE ADDRESS
            </label>
            <p>{`${warehouseInfo.address},`}</p>
            <p>{`${warehouseInfo.city}, ${warehouseInfo.country}`}</p>
          </div>
          <div className="warehouse-inventory__div-2">
            <label className="warehouse-inventory__label">CONTACT NAME</label>
            <p>{warehouseInfo.contact.name}</p>
            <p>{warehouseInfo.contact.position}</p>
          </div>
          <div className="warehouse-inventory__div-3">
            <label className="warehouse-inventory__label">
              CONTACT INFORMATION
            </label>
            <p>{warehouseInfo.contact.phone}</p>
            <p>{warehouseInfo.contact.email}</p>
          </div>
        </address>
        <ColumnsLabels />
        {inventoryFiltered.map((item) => (
          <InventoryItem item={item} />
        ))}
      </div>
    );
  }
}

WarehouseInventory.propTypes = {};

export default WarehouseInventory;
