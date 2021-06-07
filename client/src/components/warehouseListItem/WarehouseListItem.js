import React, { Component } from 'react'
import { Link } from "react-router-dom";
import binIcon from "../../assets/Icons/delete_outline-24px.svg";
import penIcon from "../../assets/Icons/edit-24px.svg";
import chevronRight from "../../assets/Icons/chevron_right-24px.svg";
import DeleteModal from "../deleteModal/DeleteModal";


export default class WarehouseListItem extends Component {
  state = {
    open: false,
  };

  toggleModal =  ()  => {
    
    this.setState({
      open: !this.state.open
    }, console.log("click", this.state.open))
  }

  render() {
    const {item} = this.props
    return (
      <div className="warehouse-lis__card-body">
        <hr className="warehouse-list__hr" />
        <div key={item.id} className="warehouse-list__item">
          <div className="warehouse-list__item-top">
            <div className="warehouse-list__item-left">
              <h4 className="warehouse-list__label">WAREHOUSE</h4>
              <Link
              to={`/warehouses/${item.name}`}
                className="p2 warehouse-list__item-left--name text-link "
              >
                {item.name}
                <img
                  className="warehouse-list__chevron"
                  src={chevronRight}
                  alt=""
                />
              </Link>
              <h4 className="warehouse-list__label">ADDRESS</h4>
              <p className="p2 warehouse-list__item-left--address">
                {`${item.address} ${item.city}, ${item.country}`}
              </p>
            </div>
            <div className="warehouse-list__item-right">
              <h4 className="warehouse-list__label">CONTACT NAME</h4>
              <p className="p2 warehouse-list__item-right--name">
                {item.contact.name}
              </p>
              <h4 className="warehouse-list__label">CONTACT INFORMATION</h4>
              <p className="p2 warehouse-list__item-right--email">
                {item.contact.phone} <br />
                {item.contact.email}
              </p>
            </div>
            <div className="warehouse-list__item-bottom--tablet">
              <div className="warehouse-list__item-bottom--bin">
                <img 
                onClick={this.toggleModal}
                src={binIcon} alt="" />
                {this.state.open ? <DeleteModal toggle={this.toggleModal} item={item} getList={this.props.getList} /> : null}
              </div>
              <div className="warehouse-list__item-bottom--pen">
                <Link to={`/warehouses/${item.name}/edit`}>
                <img src={penIcon} alt="" />
                </Link>
              </div>
            </div>
          </div>
          <div className="warehouse-list__item-bottom">
            <div className="warehouse-list__item-bottom--bin">
            <img 
                onClick={this.toggleModal}
                src={binIcon} alt="" />
                {this.state.open ? <DeleteModal toggle={this.toggleModal} item={item} getList={this.props.getList}/> : null}
            </div>
            <div className="warehouse-list__item-bottom--pen">
              <img src={penIcon} alt="" />
            </div>
          </div>
        </div>
      </div>
  );
  }
}


