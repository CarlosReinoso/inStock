import React, { Component } from 'react'
import close from '../../assets/Icons/close-24px.svg'
import axios from 'axios'


const URL = "http://localhost:8080";

export default class DeleteModal extends Component {
  handleClick = () => {
    this.props.toggle()
  }
  handleDelete = () => {
    axios.delete(`${URL}/warehouses/${this.props.item.id}`)
    .then(res => {
      console.log(res.data.warehouse)
      this.props.getList()
    })
  }
  render() {
    const {item} = this.props
    console.log('this.props', this.props.getList)
    return (
      <div className="modal">
        <div className="modal__pop">
          <span className="modal__pop-close"><img 
          onClick={this.handleClick}
          src={close} alt="" /></span>
        <h1>Delete {item.name} warehouse?</h1>
        <p className="p1">Please confirm that you’d like to delete the {item.name} from the list of warehouses. You won’t be able to undo this action.</p>
        <div className="modal__pop-buttons">
          <button 
          onClick={this.handleClick}
          className="button-secondary">Cancel</button>
          <button 
          onClick={this.handleDelete}
          className="button-delete">Delete</button>
        </div>
        </div>
      </div>
    )
  }
}
