import React from "react";
import "./addInventoryItem.scss";
import arrowBackIcon from "../../assets/Icons/arrow_back-24px.svg";

const AddInventoryItem = () => {
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

        <form className="inventory-form__form">
          <div className="inventory-form__form-left">
            <h2 className="inventory-form__form-title">Item Details</h2>
            <h3> Item Name</h3>
            <input className="inventory-form__form-left--item" />
            <h3>Description</h3>
            <textarea
              className="inventory-form__form-left--descrption"
              name=""
            ></textarea>
            <h3>Category</h3>
            <select
              className="inventory-form__form-select"
              name="category"
            >
              <option value="">loop through</option>
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
              className="inventory-form__form-right--quantity"
              type="number"
              name="quantity"
            />
            <h3>Warehouse</h3>
            <select
              className="inventory-form__form-select"
              name="warehouse"
            >
              <option
                className="inventory-form__form-right--status-option"
                value=""
              >
                loop through
              </option>
            </select>
          </div>
        </form>
            <div className="inventory-form__form-button-container">
              <button className="button-secondary">Cancel</button>
              <button>Save</button>
            </div>
      </div>
    </section>
  );
};

export default AddInventoryItem;
