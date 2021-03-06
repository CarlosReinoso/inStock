import "./delete-inventory.scss";
import React, { Component } from "react";
import close from "../../assets/Icons/close-24px.svg";

export default class DeleteInventory extends Component {
  state = { visible: false };

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.visibility !== this.props.visibility) {
      this.setState({
        visible: this.props.visibility,
      });
    }
  }

  cancelHandler = () => {
    this.props.stateReset();
  };

  deleteOnClick = () => {
    this.props.listFetching(this.props.deleteItem.id);
    this.props.stateReset();
  };

  render() {
    console.log(this.props);

    return (
      <div
        className={`delete-inventory ${
          this.state.visible ? "delete-inventory--visible" : ""
        }`}
      >
        <div className="delete-inventory__toast">
          <span className="delete-inventory__close">
            <img onClick={this.cancelHandler} src={close} alt="" />
          </span>
          <h1 className="delete-inventory__text">
            Delete {`${this.props.deleteItem.itemName}`} inventory item?
          </h1>
          <p className="delete-inventory__p1">
            Please confirm that you’d like to delete the King West from the list
            of warehouses. You won’t be able to undo this action.
          </p>
          <div className="modal__pop-buttons">
            <button onClick={this.cancelHandler} className="button-secondary">
              Cancel
            </button>
            <button onClick={this.deleteOnClick} className="button-delete">
              Delete
            </button>
          </div>
        </div>
      </div>
    );
  }
}
