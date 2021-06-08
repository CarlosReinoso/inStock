import React, { Component } from "react";
import "./addInventoryItem.scss";
import arrowBackIcon from "../../assets/Icons/arrow_back-24px.svg";
import { Link } from "react-router-dom";
import axios from "axios";
import SuccessPopup from "../successPopup/SuccessPopup";
import queryString from "query-string";

const URL = "http://localhost:8080";

export default class AddInventoryItem extends Component {
  state = {
    warehouseList: [],
    categories: [],
    categorySelected: null,
    warehouseSelected: null,
    redirect: false,
    popup: false,
    item: {
      id: "",
      warehouseID: "",
      warehouseName: "",
      itemName: "",
      description: "",
      category: "",
      status: "",
      quantity: 0,
    },
  };

  componentDidMount() {
    this.getWarehousesList();
    this.getInventoryList();
    const queryParams = queryString.parse(this.props.location.search);
    if (queryParams.itemID) {
      axios
        .get(`${URL}/inventory/${queryParams.itemID}`)
        .then((res) => this.setState({ ...this.state, item: res.data.data }))
        .catch((err) => console.log(err));
    }
  }

  getWarehousesList = () => {
    axios.get(`${URL}/warehouses`).then((res) => {
      this.setState({
        warehouseList: res.data,
        warehouseSelected: res.data[0].name,
      });
    });
  };

  getInventoryList = () => {
    axios.get(`${URL}/inventory`).then((res) => {
      const allCategories = res.data.map((i) => i.category);
      const distinct = [...new Set(allCategories)];
      this.setState({
        categories: distinct,
        categorySelected: distinct[0],
      });
    });
  };

  handleChange = (e) => {
    this.setState({
      ...this.state,
      item: { ...this.state.item, status: e.target.value },
    });
  };

  handleRadioSelector = (e) => {
    this.setState({
      ...this.state,
      item: { ...this.state.item, status: e.target.value },
    });
  };

  quantityHandler = (e) => {
    this.setState({
      ...this.state,
      item: { ...this.state.item, quantity: e.target.value },
    });
  };

  addItem = (e) => {
    e.preventDefault();

    const warehouse = this.state.warehouseList.find(
      (i) => i.name === this.state.item.warehouseName
    );
    console.log("warehouse", warehouse);

    axios
      .post(`${URL}/inventory/add`, {
        warehouseID: warehouse.id,
        warehouseName: this.state.item.warehouseName,
        itemName: e.target.itemName.value,
        description: e.target.description.value,
        category: this.state.item.category,
        status: e.target.status.value,
        quantity: e.target.quantity.value,
      })
      .then((res) => {
        console.log("res", res);
      })
      .catch((err) => console.log(err));

    const timed = setTimeout(() => {
      this.setState({
        redirect: true,
      });
    }, 3000);
    this.setState({
      popup: true,
    });

    return timed;
  };

  handleTextInput = (e) => {
    this.setState({
      ...this.state,
      item: { ...this.state.item, [e.target.name]: e.target.value },
    });
  };

  render() {
    const queryParams = queryString.parse(this.props.location.search);
    const { popup } = this.state;
    if (popup) {
      return <SuccessPopup redirect={this.state.redirect} />;
    }
    return (
      <section className="inventory-form">
        <div className="inventory-form__card">
          <div className="inventory-form__card-header">
            <img
              src={arrowBackIcon}
              alt=""
              className="inventory-form__card-header--back-icon"
            />
            <h1>
              {queryParams.itemID ? "Edit Inventory Item" : "Add New Item"}
            </h1>
          </div>
          <div className="inventory-form__hr" />

          <form
            onSubmit={(e) => this.addItem(e)}
            className="inventory-form__form"
          >
            <div className="inventory-form__form-left">
              <h2 className="inventory-form__form-title">Item Details</h2>
              <h3> Item Name</h3>
              <input
                name="itemName"
                className="input-form 
              inventory-form__form-left--item 
              "
                onChange={this.handleTextInput}
                value={this.state.item.itemName}
              />
              <h3>Description</h3>
              <textarea
                className="inventory-form__form-left--descrption"
                name="description"
                value={this.state.item.description}
                onChange={this.handleTextInput}
              ></textarea>
              <h3>Category</h3>
              <select
                name="category"
                value={
                  this.state.item.category
                    ? this.state.item.category
                    : this.state.categories[0]
                }
                onChange={this.handleTextInput}
                className="inventory-form__form-select"
              >
                {this.state.categories.map((item) => (
                  <option name="category" value={item}>
                    {item}
                  </option>
                ))}
              </select>
            </div>
            <div className="inventory-form__hr" />
            <div className="inventory-form__vr" />
            <div className="inventory-form__form-right">
              <h2 className="inventory-form__form-title">Item Availability</h2>
              <h3>Status</h3>
              <div className="inventory-form__radios-container">
                <div className="inventory-form__radios-container--half">
                  <input
                    onChange={this.handleRadioSelector}
                    className="inventory-form__form-right--status-input"
                    type="radio"
                    name="status"
                    value="In Stock"
                    checked={this.state.item.status === "In Stock"}
                  />
                  <label
                    className="inventory-form__form-right--status"
                    htmlFor="status"
                  >
                    In Stock
                  </label>
                </div>
                <div className="inventory-form__radios-container--half">
                  <input
                    onChange={this.handleRadioSelector}
                    className="inventory-form__form-right--status-input"
                    type="radio"
                    name="status"
                    value="Out of Stock"
                    checked={this.state.item.status === "Out of Stock"}
                  />
                  <label
                    className="inventory-form__form-right--status"
                    htmlFor="status"
                  >
                    Out of Stock
                  </label>
                </div>
              </div>
              <h3>Quantity</h3>
              <input
                onChange={this.quantityHandler}
                className="input-form inventory-form__form-right--quantity"
                type="number"
                name="quantity"
                min="0"
                value={this.state.item.quantity}
              />
              <h3>Warehouse</h3>
              <select
                onChange={this.handleTextInput}
                name="warehouseName"
                value={
                  this.state.item.warehouseName
                    ? this.state.item.warehouseName
                    : this.state.warehouseSelected
                }
                className="inventory-form__form-select"
              >
                {this.state.warehouseList.map((item) => (
                  <option value={item.name}>{item.name}</option>
                ))}
              </select>
            </div>
            <div className="inventory-form__form-button-container">
              <Link to="/inventory">
                <button className="button-secondary">Cancel</button>
              </Link>
              <button type="submit">Save</button>
            </div>
          </form>
        </div>
      </section>
    );
  }
}
