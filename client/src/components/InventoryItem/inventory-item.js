import "./inventory-item.scss";

import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import binIcon from "../../assets/Icons/delete_outline-24px.svg";
import editIcon from "../../assets/Icons/edit-24px.svg";
import chevronRight from "../../assets/Icons/chevron_right-24px.svg";

const InventoryItem = ({ item }) => {
  const deleteItem = (e) => {
    console.log(item.itemName);
  };
  const onHover = (e) => {
    e.target.style.cursor = "pointer";
  };

  return (
    <div className="inventory-item">
      <section className="inventory-item__left">
        <label className="inventory-item__label">
          INVENTORY ITEM
          <div className="inventory-item__chevron-container">
            <Link to={`/${item.itemName}`}>
              <p className="inventory-item__item-name">{item.itemName}</p>
            </Link>
            <img className="inventory-item__chevron" src={chevronRight} />
          </div>
        </label>

        <label className="inventory-item__label">
          CATEGORY
          <p className="inventory-item__item-category">{item.category}</p>
        </label>
      </section>
      <section className="inventory-item__right">
        <label>
          STATUS
          <p
            className={`inventory-item__item-status inventory-item__item-status--${
              item.status.toLowerCase() === "in stock"
                ? "available"
                : "unavailable"
            }`}
          >
            {item.status.toUpperCase()}
          </p>
        </label>

        <label>
          QTY
          <p className="inventory-item__item-qty">{item.quantity}</p>
        </label>
        <label>
          WAREHOUSE
          <p className="inventory-item__item-warehouse">{item.warehouseName}</p>
        </label>
      </section>
      <section className="inventory-item__actions">
        <img
          onMouseEnter={onHover}
          onClick={deleteItem}
          className="inventory-item__icon"
          src={binIcon}
        />
        <Link to={`/edit/${item.id}`}>
          <img src={editIcon} className="inventory-item__icon" />
        </Link>
      </section>
    </div>
  );
};

export default InventoryItem;
