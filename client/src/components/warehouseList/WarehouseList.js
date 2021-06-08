import "./warehouseList.scss";
import React, { Component } from "react";
import searchIcon from "../../assets/Icons/search-24px.svg";
import sortIcon from "../../assets/Icons/sort-24px.svg";
import WarehouseListItem from "../warehouseListItem/WarehouseListItem";
import axios from "axios";
import { Link } from "react-router-dom";

const URL = "http://localhost:8080";

export default class WarehouseList extends Component {
  state = {
    warehouseList: [],
  };

  componentDidMount() {
    this.getWarehousesList();
  }

  getWarehousesList = () => {
    axios.get(`${URL}/warehouses`).then((res) => {
      this.setState({
        warehouseList: res.data,
      });
    });
  };

  render() {
    return (
      <section className="warehouse-list">
        <div className="warehouse-list__card">
          <div className="warehouse-list__card-header">
            <h1>Warehouses</h1>
            <div className="warehouse-list__card-header-container">
              <div className="warehouse-list__search-container">
                <input
                  type="text"
                  className="warehouse-list__card-input"
                  placeholder="Search..."
                />
                <img
                  src={searchIcon}
                  alt="search-icon"
                  className="warehouse-list__search-icon"
                />
              </div>
              <Link to="/warehouse/add" className="warehouse-list__button">
                <button className="warehouse-list__button">
                  + Add New Warehouse
                </button>
              </Link>
            </div>
          </div>
          <div className="warehouse-list__table-header">
            <ul className="warehouse-list__table-list">
              <li className="warehouse-list__table-item">
                WAREHOUSE
                <img
                  className="warehouse-list__table-icon"
                  src={sortIcon}
                  alt=""
                />
              </li>
              <li className="warehouse-list__table-item">
                ADDRESS
                <img
                  className="warehouse-list__table-icon"
                  src={sortIcon}
                  alt=""
                />
              </li>
              <li className="warehouse-list__table-item">
                CONTACT NAME
                <img
                  className="warehouse-list__table-icon"
                  src={sortIcon}
                  alt=""
                />
              </li>
              <li className="warehouse-list__table-item--info">
                CONTACT INFORMATION
                <img
                  className="warehouse-list__table-icon"
                  src={sortIcon}
                  alt=""
                />
              </li>
              <li className="warehouse-list__table-item--action">ACTIONS</li>
            </ul>
          </div>
          {this.state.warehouseList.map((item) => (
            <WarehouseListItem
              key={item.id}
              item={item}
              getList={this.getWarehousesList}
            />
          ))}
        </div>
      </section>
    );
  }
}
