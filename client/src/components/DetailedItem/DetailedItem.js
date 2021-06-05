import "./detailed-item.scss";
import React from "react";

const DetailedItem = ({ item }) => {
  return (
    <div className="detail-item">
      <section className="detaile-item__title">
        <h1>{item.itemName}</h1>
      </section>
    </div>
  );
};

export default DetailedItem;
