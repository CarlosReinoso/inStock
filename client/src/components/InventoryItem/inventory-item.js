import "./inventory-item.scss";

import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import binIcon from "../../assets/Icons/delete_outline-24px.svg";
import editIcon from "../../assets/Icons/edit-24px.svg";
import chevronRight from "../../assets/Icons/chevron_right-24px.svg";

const InventoryItem = ({ deleting, item }) => {
  const deleteItem = (e) => {
    deleting(item);
  };
  const onHover = (e) => {
    e.target.style.cursor = "pointer";
  };

  return (
    <div className="inventory-item">
      <div className="inventory-item__label --order-one">
        <label>INVENTORY ITEM </label>
        <div className="inventory-item__chevron-container ">
          <Link className="inventory-item__link" to={`/inventory/${item.id}`}>
            <p className="inventory-item__item-name">{item.itemName}</p>
          </Link>
          <img className="inventory-item__chevron" src={chevronRight} />
        </div>
      </div>
      <div className="inventory-item__label --order-three">
        <label>CATEGORY</label>
        <p className="inventory-item__item-category">{item.category}</p>
      </div>

      <div className="inventory-item__label --order-two">
        <label>STATUS</label>
        <p
          className={`inventory-item__item-status inventory-item__item-status--${
            item.status.toLowerCase() === "in stock"
              ? "available"
              : "unavailable"
          }`}
        >
          {item.status.toUpperCase()}
        </p>
      </div>
      <div className="inventory-item__label --order-four">
        <label>QTY </label>
        <p className="inventory-item__item-qty">{item.quantity}</p>
      </div>
      <div className="inventory-item__label --order-five">
        <label>WAREHOUSE </label>
        <p className="inventory-item__item-warehouse">{item.warehouseName}</p>
      </div>

      <section className="inventory-item__actions">
        <img
          onMouseEnter={onHover}
          onClick={deleteItem}
          className="inventory-item__icon"
          src={binIcon}
        />
        <Link
          className="inventory-item__link --marginleft"
          to={`/item/edit?itemID=${item.id}`}
        >
          <img src={editIcon} className="inventory-item__icon" />
        </Link>
      </section>
    </div>
  );
};

export default InventoryItem;
