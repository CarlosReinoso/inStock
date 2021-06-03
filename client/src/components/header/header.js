import "./header.scss";

import React, { Component } from "react";
import PropTypes from "prop-types";
import inStockLogo from "../../assets/Icons/InStock-Logo.svg";
import { Link } from "react-router-dom";

class header extends Component {
  render() {
    const { location } = this.props.match.params;
    console.log(location);
    return (
      <header className="header">
        <img
          src={inStockLogo}
          className="header__logo"
          alt="website main logo"
        />
        <nav className="header__nav">
          <ul className="header__list">
            <li className="header__item header__item--margin">
              <Link
                to="/warehouse"
                className={`header__list-button ${
                  location === "warehouse" ? "header__list-button--active" : ""
                }`}
              >
                Warehouse
              </Link>
            </li>
            <li className="header__item">
              <Link
                to="/inventory"
                className={`header__list-button ${
                  location === "inventory" ? "header__list-button--active" : ""
                }`}
              >
                Inventory
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    );
  }
}

header.propTypes = {};

export default header;
