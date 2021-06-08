import "./search-bar.scss";
import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

class SearchBar extends Component {
  state = { search: "" };

  changeHandler = (e) => {
    this.setState({ search: e.target.value }, () =>
      this.props.searchHandler(this.state.search)
    );
  };

  render() {
    const { title, place } = this.props;
    return (
      <form className="search-bar">
        <h1 className="search-bar__title">{title}</h1>
        <input
          onChange={this.changeHandler}
          value={this.state.search}
          type="text"
          className="search-bar__input"
          placeholder="Search..."
        />
        <Link to="/inventory/add"
         className="search-bar__button">
          <button className="search-bar__button">+ Add New {place}</button>
        </Link>
      </form>
    );
  }
}

SearchBar.propTypes = {};

export default SearchBar;
