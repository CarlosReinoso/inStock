import "./header.scss";

import React, { Component } from "react";
import PropTypes from "prop-types";
import inStockLogo from "../../assets/Icons/InStock-Logo.svg";
import { Link } from "react-router-dom";

class Header extends Component {
  state = { pathname: this.props.location.pathname };

  componentDidUpdate(prevProps, prevState) {
    if (
      prevProps.location.pathname !== this.props.location.pathname &&
      (this.props.location.pathname === "/warehouses" ||
        this.props.location.pathname === "/inventory")
    ) {
      this.setState({ pathname: this.props.location.pathname });
    }
  }

  render() {
    const { pathname } = this.state;
    console.log(this.state);

    return (
      <>
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
                  to="/warehouses"
                  className={`header__list-button ${
                    pathname === "/warehouses"
                      ? "header__list-button--active"
                      : ""
                  }`}
                >
                  Warehouses
                </Link>
              </li>
              <li className="header__item">
                <Link
                  to="/inventory"
                  className={`header__list-button ${
                    pathname === "/inventory"
                      ? "header__list-button--active"
                      : ""
                  }`}
                >
                  Inventory
                </Link>
              </li>
            </ul>
          </nav>
        </header>
      </>
    );
  }
}

Header.propTypes = {};

export default Header;
