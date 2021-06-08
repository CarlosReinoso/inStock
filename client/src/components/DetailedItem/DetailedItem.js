import "./detailed-item.scss";
import axios from "axios";
import React, { Component } from "react";
import PropTypes from "prop-types";
import EditButton from "../EditButton/EditButton";
import backIcon from "../../assets/Icons/arrow_back-24px.svg";
import { Link } from "react-router-dom";
import deleteItem from "../DeleteInventory/DeleteInventory";

class DetailedItem extends Component {
  state = {
    item: {},
  };

  componentDidMount() {
    console.log("my params", this.props.match);
    axios
      .get(`http://localhost:8080/inventory/${this.props.match.params.itemId}`)
      .then((res) => {
        this.setState({ item: res.data.data });
      })
      .catch((err) => console.log("failed to fetch ", err));
  }

  render() {
    if (!this.state.item.status) {
      return (
        <div className="detailed-item">
          <p>...loading...</p>
        </div>
      );
    } else {
      return (
        <div className="detailed-item">
          <section className="detailed-item__title">
            <Link className="detailed-item__back" to="/inventory">
              <img src={backIcon} />
              <h1>{this.state.item.itemName}</h1>
            </Link>
            <EditButton />
          </section>
          <section className="detailed-item__information">
            <div className="detailed-item__top">
              <div className="detailed-item__label ">
                <label className="detailed-item__display-label">
                  DESCRIPTION
                </label>
                <p className="detailed-item__item-category">
                  {this.state.item.description}
                </p>
              </div>
              <div className="detailed-item__label ">
                <label className="detailed-item__display-label">CATEGORY</label>
                <p className="detailed-item__item-category">
                  {this.state.item.category}
                </p>
              </div>
            </div>

            <div className="detailed-item__bottom">
              <div className="detailed-item__label --flex-grow">
                <label className="detailed-item__display-label">STATUS</label>
                <p
                  className={`detailed-item__item-status inventory-item__item-status--${
                    this.state.item.status.toLowerCase() === "in stock"
                      ? "available"
                      : "unavailable"
                  }`}
                >
                  {this.state.item.status.toUpperCase()}
                </p>
              </div>
              <div className="detailed-item__label --flex-grow">
                <label className="detailed-item__display-label">QTY</label>
                <p className="detailed-item__item-category">
                  {this.state.item.quantity}
                </p>
              </div>
              <div className="detailed-item__label --width-one-hundred ">
                <label className="detailed-item__display-label">
                  WAREHOUSE
                </label>
                <p className="detailed-item__item-category">
                  {this.state.item.warehouseName}
                </p>
              </div>
            </div>
          </section>
        </div>
      );
    }
  }
}

export default DetailedItem;
