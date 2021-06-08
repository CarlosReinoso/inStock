import "./warehouse-form.scss";
import React, { Component } from "react";
import arrowBack from "../../assets/Icons/arrow_back-24px.svg";
import { Link } from "react-router-dom";
import queryString from "query-string";
import axios from "axios";
class WarehouseForm extends Component {
  state = {
    warehouse: {
      id: "",
      name: "",
      address: "",
      city: "",
      country: "",
      contact: {
        name: "",
        position: "",
        phone: "",
        email: "",
      },
    },
  };

  saveHandler = (e) => {
    e.preventDefault();
    axios
      .put(`http://localhost:8080/warehouses/${this.state.warehouse.id}`, {
        ...this.state.warehouse,
      })
      .then((_data) => this.props.history.push("/warehouses"));
  };

  changeHandler = (e) => {
    const [target, position] = e.target.name.split(".");
    if (target === "physical") {
      this.setState(
        { warehouse: { ...this.state.warehouse, [position]: e.target.value } },
        () => console.log(this.state)
      );
    } else if (target === "contact") {
      this.setState(
        {
          warehouse: {
            ...this.state.warehouse,
            contact: {
              ...this.state.warehouse.contact,
              [position]: e.target.value,
            },
          },
        },
        () => console.log(this.state)
      );
    }
  };

  componentDidMount() {
    const queryParams = queryString.parse(this.props.location.search);

    if (queryParams.name) {
      axios
        .get("http://localhost:8080/warehouses/" + queryParams.name)
        .then((data) => this.setState({ warehouse: data.data.data }));
    }
  }
  submitHandler = (e) => {
    e.preventDefault();
    console.log(this.state);
    console.log(this.props.location);
  };

  render() {
    const queryParams = queryString.parse(this.props.location.search);
    return (
      <div className="warehouse-form">
        <section className="warehouse-form__header">
          <Link
            className="warehouse-form__link"
            to={`/warehouses${queryParams.name ? "/" + queryParams.name : ""}`}
          >
            <img
              className="warehouse-form__back-logo"
              src={arrowBack}
              alt="arrow to back to form"
            />

            <h1 className="warehouse-form__title">
              {queryParams.name ? "Edit Warehouse" : "Add New Warehouse"}
            </h1>
          </Link>
        </section>

        <form onSubmit={this.saveHandler} className="warehouse-form__details">
          <div className="warehouse-form__flex-container ">
            <section className="warehouse-form__details-physical">
              <h2 className="warehouse-form__details-title">
                Warehouse Details
              </h2>
              <div className="warehouse-form__input-container">
                <h4 className="warehouse-form__input-title">Warehouse Name</h4>
                <input
                  onChange={this.changeHandler}
                  name="physical.name"
                  className="warehouse-form__input"
                  placeholder="Warehouse Name"
                  value={this.state.warehouse.name}
                />
              </div>
              <div className="warehouse-form__input-container">
                <h4 className="warehouse-form__input-title">Street Address</h4>
                <input
                  value={this.state.warehouse.address}
                  onChange={this.changeHandler}
                  name="physical.address"
                  className="warehouse-form__input"
                  placeholder="Street Address"
                />
              </div>

              <div className="warehouse-form__input-container">
                <h4 className="warehouse-form__input-title">City</h4>
                <input
                  value={this.state.warehouse.city}
                  onChange={this.changeHandler}
                  name="physical.city"
                  className="warehouse-form__input"
                  placeholder="City"
                />
              </div>
              <div className="warehouse-form__input-container --border">
                <h4 className="warehouse-form__input-title">Country</h4>
                <input
                  value={this.state.warehouse.country}
                  onChange={this.changeHandler}
                  name="physical.country"
                  className="warehouse-form__input"
                  placeholder="country"
                />
              </div>
            </section>
            <section className="warehouse-form__details-manager">
              <h2 className="warehouse-form__details-title">Contact Details</h2>
              <div className="warehouse-form__input-container">
                <h4 className="warehouse-form__input-title">Contact Name</h4>
                <input
                  onChange={this.changeHandler}
                  name="contact.name"
                  className="warehouse-form__input"
                  placeholder="Warehouse Name"
                  value={this.state.warehouse.contact.name}
                />
              </div>
              <div className="warehouse-form__input-container">
                <h4 className="warehouse-form__input-title">Position</h4>
                <input
                  onChange={this.changeHandler}
                  name="contact.position"
                  className="warehouse-form__input"
                  placeholder="Position"
                  value={this.state.warehouse.contact.position}
                />
              </div>

              <div className="warehouse-form__input-container">
                <h4 className="warehouse-form__input-title">Phone</h4>
                <input
                  onChange={this.changeHandler}
                  name="contact.phone"
                  className="warehouse-form__input"
                  placeholder="Phone"
                  value={this.state.warehouse.contact.phone}
                />
              </div>
              <div className="warehouse-form__input-container --border">
                <h4 className="warehouse-form__input-title">Email</h4>
                <input
                  onChange={this.changeHandler}
                  name="contact.email"
                  className="warehouse-form__input"
                  placeholder="country"
                  value={this.state.warehouse.contact.email}
                />
              </div>
            </section>
          </div>
          <section className="warehouse-form__buttons">
            <button className="warehouse-form__buttons-cancel">Cancel</button>
            <button className="warehouse-form__buttons-add">
              {queryParams.name ? "Save" : "+ Add Warehouse"}
            </button>
          </section>
        </form>
      </div>
    );
  }
}

export default WarehouseForm;
