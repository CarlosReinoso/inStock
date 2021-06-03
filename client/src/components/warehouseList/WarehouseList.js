import "./warehouseList.scss";
import React from "react";
import { Link } from "react-router-dom";
import warehousesData from "../../assets/JSON Data/warehouses.json";
import binIcon from "../../assets/Icons/delete_outline-24px.svg";
import penIcon from "../../assets/Icons/edit-24px.svg";
import chevronRight from "../../assets/Icons/chevron_right-24px.svg";
import searchIcon from "../../assets/Icons/search-24px.svg";
import sortIcon from "../../assets/Icons/sort-24px.svg";

const WarehouseList = () => {
  const warehousesDataMarkup = warehousesData.map((wh) => {
    return (
      <>
        <div className="warehouse-lis__card-body">
          <hr className="warehouse-list__hr" />
          <div key={wh.id} className="warehouse-list__item">
            <div className="warehouse-list__item-top">
              <div className="warehouse-list__item-left">
                <h4 className="warehouse-list__label">WAREHOUSE</h4>
                <Link className="p2 warehouse-list__item-left--name text-link ">
                  {wh.name}
                  <img
                    className="warehouse-list__chevron"
                    src={chevronRight}
                    alt=""
                  />
                </Link>
                <h4 className="warehouse-list__label">ADDRESS</h4>
                <p className="p2 warehouse-list__item-left--address">
                  {`${wh.address} ${wh.city}, ${wh.country}`}
                </p>
              </div>
              <div className="warehouse-list__item-right">
                <h4 className="warehouse-list__label">CONTACT NAME</h4>
                <p className="p2 warehouse-list__item-right--name">
                  {wh.contact.name}
                </p>
                <h4 className="warehouse-list__label">CONTACT INFORMATION</h4>
                <p className="p2 warehouse-list__item-right--email">
                  {wh.contact.phone} <br />
                  {wh.contact.email}
                </p>
              </div>
              <div className="warehouse-list__item-bottom--tablet">
                <div className="warehouse-list__item-bottom--bin">
                  <img src={binIcon} alt="" />
                </div>
                <div className="warehouse-list__item-bottom--pen">
                  <img src={penIcon} alt="" />
                </div>
              </div>
            </div>
            <div className="warehouse-list__item-bottom">
              <div className="warehouse-list__item-bottom--bin">
                <img src={binIcon} alt="" />
              </div>
              <div className="warehouse-list__item-bottom--pen">
                <img src={penIcon} alt="" />
              </div>
            </div>
          </div>
        </div>
      </>
    );
  });

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
            <button className="warehouse-list__button">
              + Add New Warehouse
            </button>
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
        {warehousesDataMarkup}
      </div>
    </section>
  );
};

export default WarehouseList;
