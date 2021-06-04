import React from "react";
import inventoriesData from "../../assets/JSON Data/inventories.json";
import "./warehouseDetails.scss";

import warehousesData from "../../assets/JSON Data/warehouses.json";

import { Link } from "react-router-dom";
import binIcon from "../../assets/Icons/delete_outline-24px.svg";
import penIcon from "../../assets/Icons/edit_white-24px.svg";
import penIconBlue from "../../assets/Icons/edit-24px.svg";
import chevronRight from "../../assets/Icons/chevron_right-24px.svg";
import sortIcon from "../../assets/Icons/sort-24px.svg";
import arrowBackIcon from "../../assets/Icons/arrow_back-24px.svg";

const WarehouseDetails = () => {
  const inventoriesDataMarkup = inventoriesData.map((inv) => {
    return (
      <>
        <div className="warehouse__card-body">
          <hr className="warehouse__hr" />
          <div key={inv.id} className="warehouse__item">
            <div className="warehouse__item-top">
              <div className="warehouse__item-left">
                <h4 className="warehouse__label">INVENTORY ITEM</h4>
                <Link className="p2 warehouse__item-left--name text-link ">
                  {inv.itemName}
                  <img
                    className="warehouse__chevron"
                    src={chevronRight}
                    alt=""
                  />
                </Link>
                <h4 className="warehouse__label">CATEGORY</h4>
                <p className="p2 warehouse__item-left--category">
                  {inv.category}
                </p>
              </div>
              <div className="warehouse__item-right">
                <h4 className="warehouse__label">STATUS</h4>
                <p className={ inv.quantity > 0 ? "warehouse__item-right--status-in" : "warehouse__item-right--status-out" }>
                  {inv.status}
                </p>
                <h4 className="warehouse__label">QTY</h4>
                <p className="p2 warehouse__item-right--email">
                  {inv.quantity} 
                </p>
              </div>
              <div className="warehouse__item-bottom--tablet">
                <div className="warehouse__item-bottom--bin">
                  <img src={binIcon} alt="" />
                </div>
                <div className="warehouse__item-bottom--pen">
                  <img src={penIcon} alt="" />
                </div>
              </div>
            </div>
            <div className="warehouse__item-bottom">
              <div className="warehouse__item-bottom--bin">
                <img src={binIcon} alt="" />
              </div>
              <div className="warehouse__item-bottom--pen">
                <img src={penIconBlue} alt="" />
              </div>
            </div>
          </div>
        </div>
      </>
    );
  });

  return (
    <section className="warehouse">
      <div className="warehouse__card">
        <div className="warehouse__card-header">
          <img
            src={arrowBackIcon}
            alt=""
            className="warehouse__card-header--back-icon"
          />
          <h1>{inventoriesData[0].warehouseName}</h1>
          <img
            src={penIcon}
            alt=""
            className="warehouse__card-header--pen-icon"
          />
          <button className="warehouse__card-header--button">
            <img
              src={penIcon}
              alt=""
              className="warehouse__card-header--pen-icon"
            />
            Edit
          </button>
        </div>
        <hr className="warehouse__hr" />
        <div className="warehouse__warehouse-details">
          <div className="warehouse__item">
            <div className="warehouse__item-top">
              <div className="warehouse__item-left">
                <h4 className="warehouse__label">WAREHOUSE ADDRESS:</h4>
                <p className="p2 warehouse__item-left--address">
                  {`${warehousesData[0].address} ${warehousesData[0].city}, ${warehousesData[0].country}`}
                </p>
                <h4 className="warehouse__label">CONTACT NAME</h4>
                <p className="p2 warehouse__item-left--category">
                  {warehousesData[0].contact.name} <br />
                  {warehousesData[0].contact.position}
                </p>
              </div>
              <div className="warehouse__item-right--details">
                <h4 className="warehouse__label">CONTACT INFORMATION</h4>
                <p className="p2 warehouse__item-right--email">
                  {warehousesData[0].contact.phone} <br />
                  {warehousesData[0].contact.email}
                </p>
              </div>
             
            </div>
            
          </div>
        </div>
        <div className="warehouse__table-header">
          <ul className="warehouse__table-list">
            <li className="warehouse__table-item">
              WAREHOUSE
              <img className="warehouse__table-icon" src={sortIcon} alt="" />
            </li>
            <li className="warehouse__table-item">
              ADDRESS
              <img className="warehouse__table-icon" src={sortIcon} alt="" />
            </li>
            <li className="warehouse__table-item">
              CONTACT NAME
              <img className="warehouse__table-icon" src={sortIcon} alt="" />
            </li>
            <li className="warehouse__table-item--info">
              CONTACT INFORMATION
              <img className="warehouse__table-icon" src={sortIcon} alt="" />
            </li>
            <li className="warehouse__table-item--action">ACTIONS</li>
          </ul>
        </div>
        {inventoriesDataMarkup}
      </div>
    </section>
  );
};

export default WarehouseDetails;
