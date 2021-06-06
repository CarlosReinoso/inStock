import "./search-bar.scss";
import React, { Component } from "react";
import PropTypes from "prop-types";

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
        <button className="search-bar__button">+ Add New {place}</button>
      </form>
    );
  }
}

SearchBar.propTypes = {};

export default SearchBar;
