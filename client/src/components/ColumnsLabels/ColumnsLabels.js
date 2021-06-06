import "./columns-labels.scss";
import React from "react";
import icon from "../../assets/Icons/sort-24px.svg";

const ColumnsLabels = () => {
  return (
    <section className="columns-labels__columns">
      <div className="columns-labels__label-container --first">
        <label className="columns-labels__columns-label">INVENTORY ITEM</label>
        <img src={icon} />
      </div>
      <div className="columns-labels__label-container">
        <label className="columns-labels__columns-label">CATEGORY </label>
        <img src={icon} />
      </div>

      <div className="columns-labels__label-container ">
        <label className="columns-labels__columns-label">STATUS </label>
        <img src={icon} />
      </div>
      <div className="columns-labels__label-container">
        <label className="columns-labels__columns-label --padleft">QTY</label>
        <img src={icon} />
      </div>
      <div className="columns-labels__label-container --marginright">
        <label className="columns-labels__columns-label ">WAREHOUSE </label>
        <img src={icon} />
      </div>

      <div className="columns-labels__label-container --end">
        <label className="columns-labels__columns-label">ACTIONS </label>
      </div>
    </section>
  );
};

export default ColumnsLabels;
