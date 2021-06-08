import React, { Component } from "react";
import "./addInventoryItem.scss";
import arrowBackIcon from "../../assets/Icons/arrow_back-24px.svg";
import { Link } from "react-router-dom";
import axios from "axios";
import SuccessPopup from "../successPopup/SuccessPopup";

const URL = "http://localhost:8080";

export default class AddInventoryItem extends Component {
  state = {
    warehouseList: [],
    categories: [],
    categorySelected: null,
    warehouseSelected: null,
    redirect: false,
    popup: false,
  };

  componentDidMount() {
    this.getWarehousesList();
    this.getInventoryList();
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
      warehouseSelected: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const warehouse = this.state.warehouseList.find(
      (i) => i.name === this.state.warehouseSelected
    );

    if (
      warehouse.id === "" ||
      this.state.warehouseSelected === "" ||
      e.target.itemName.value === "" ||
      e.target.description.value === "" ||
      this.state.categorySelected === "" ||
      e.target.status.value === "" ||
      e.target.quantity.value === ""
    ) {
      alert("Please fill in all fields");
    } else {
      console.log("warehouse", warehouse);

      axios
        .post(`${URL}/inventory/add`, {
          warehouseID: warehouse.id,
          warehouseName: this.state.warehouseSelected,
          itemName: e.target.itemName.value,
          description: e.target.description.value,
          category: this.state.categorySelected,
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
    }
  };

  render() {
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
            <h1>Edit or Add</h1>
          </div>
          <div className="inventory-form__hr" />

          <form
            onSubmit={(e) => this.handleSubmit(e)}
            className="inventory-form__form"
          >
            <div className="inventory-form__form-top">
              <div className="inventory-form__form-left">
                <h2 className="inventory-form__form-title">Item Details</h2>
                <h3> Item Name</h3>
                <input
                  name="itemName"
                  className="input-form 
              inventory-form__form-left--item 
              "
                />
                <h3>Description</h3>
                <textarea
                  className="inventory-form__form-left--descrption"
                  name="description"
                ></textarea>
                <h3>Category</h3>
                <select
                  value={this.state.categories[0]}
                  onChange={this.handleChange}
                  className="inventory-form__form-select"
                >
                  {this.state.categories.map((item) => (
                    <option value={item}>{item}</option>
                  ))}
                </select>
              </div>
              <div className="inventory-form__hr--middle" />
              <div className="inventory-form__vr" />
              <div className="inventory-form__form-right">
                <h2 className="inventory-form__form-title">
                  Item Availability
                </h2>
                <h3>Status</h3>
                <div className="inventory-form__radios-container">
                  <div className="inventory-form__radios-container--half">
                    <input
                      className="inventory-form__form-right--status-input"
                      type="radio"
                      name="status"
                      value="In Stock"
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
                      className="inventory-form__form-right--status-input"
                      type="radio"
                      name="status"
                      value="Out of Stock"
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
                  className="input-form inventory-form__form-right--quantity"
                  type="number"
                  name="quantity"
                />
                <h3>Warehouse</h3>
                <select
                  value={this.state.warehouseSelected}
                  onChange={this.handleChange}
                  className="inventory-form__form-select"
                >
                  {this.state.warehouseList.map((item) => (
                    <option value={item.name}>{item.name}</option>
                  ))}
                </select>
              </div>
            </div>

            <div className="inventory-form__form-button-container">
              <Link to="/inventory">
                <button className="inventory-form__form-button--left button-secondary">
                  Cancel
                </button>
              </Link>
              <button className="inventory-form__form-button " type="submit">
                Save
              </button>
              
            </div>
          </form>
        </div>
      </section>
    );
  }
}