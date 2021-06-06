import React from "react";
import { Link } from "react-router-dom";
import warehousesData from "../../assets/JSON Data/warehouses.json";
import binIcon from "../../assets/Icons/delete_outline-24px.svg";
import penIcon from "../../assets/Icons/edit-24px.svg";
import chevronRight from "../../assets/Icons/chevron_right-24px.svg";
import axios from "axios";

const URL = "http://localhost:8080";

const WarehouseListItem = () => {
  

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
  return warehousesDataMarkup;
};

export default WarehouseListItem;
