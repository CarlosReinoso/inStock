import "./warehouse-inventory.scss";

import React, { Component } from "react";
import PropTypes from "prop-types";
import arrowBack from "../../assets/Icons/arrow_back-24px.svg";
import InventoryItem from "../InventoryItem/inventory-item";
import ColumnsLabels from "../ColumnsLabels/ColumnsLabels";
import EditButton from "../EditButton/EditButton";
import { Link } from "react-router-dom";
import axios from "axios";

const URL = "http://localhost:8080";

class WarehouseInventory extends Component {
  onClick = (e) => {
    this.props.history.push(
      `/warehouse/edit?name=${this.props.match.params.warehouseName}`
    );
  };

  state = {
    warehouseInfo: {},
    inventory: {},
  };

  componentDidMount() {
    this.getInventoryList();
  }

  getInventoryList = () => {
    axios
      .get(`${URL}/warehouses/${this.props.match.params.warehouseName}`)
      .then((res) => {
        console.log("res", res);
        this.setState(
          {
            warehouseInfo: res.data.data,
            inventory: res.data.newInventory,
          },
          () => console.log("warehouse state ", this.state)
        );
      })
      .catch((err) => console.log("err", err));
  };

  render() {
    const { warehouseName } = this.props.match.params;
    console.log(this.props);

    if (!this.state.warehouseInfo.contact) {
      return (
        <div className="warehouse-inventory">
          <h2>
            ...Loading... <br />
            Or the warehouse does not exist
          </h2>
        </div>
      );
    }

    return (
      <div className="warehouse-inventory">
        <section className="warehouse-inventory__header">
          <Link className="warehouse-inventory__link" to="/warehouses">
            <img
              className="warehouse-inventory__back-logo"
              src={arrowBack}
              alt="arrow to back to inventory"
            />

            <h1 className="warehouse-inventory__title">{warehouseName}</h1>
          </Link>

          <EditButton clickHandler={this.onClick} />
        </section>

        <address className="warehouse-inventory__address">
          <div className="warehouse-inventory__div-1">
            <label className="warehouse-inventory__label">
              WAREHOUSE ADDRESS
            </label>
            <p>{`${this.state.warehouseInfo.address},`}</p>
            <p>{`${this.state.warehouseInfo.city}, ${this.state.warehouseInfo.country}`}</p>
          </div>
          <div className="warehouse-inventory__div-2">
            <label className="warehouse-inventory__label">CONTACT NAME</label>
            <p>{this.state.warehouseInfo.contact.name}</p>
            <p>{this.state.warehouseInfo.contact.position}</p>
          </div>
          <div className="warehouse-inventory__div-3">
            <label className="warehouse-inventory__label">
              CONTACT INFORMATION
            </label>
            <p>{this.state.warehouseInfo.contact.phone}</p>
            <p>{this.state.warehouseInfo.contact.email}</p>
          </div>
        </address>
        <ColumnsLabels />
        {this.state.inventory.map((item) => (
          <InventoryItem item={item} />
        ))}
      </div>
    );
  }
}

WarehouseInventory.propTypes = {};

export default WarehouseInventory;
