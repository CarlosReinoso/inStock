import React, { Component } from 'react'
import close from '../../assets/Icons/close-24px.svg'

export default class DeleteModal extends Component {
  handleClick = () => {
    this.props.toggle()
  }
  render() {
    return (
      <div className="modal">
        <div className="modal__pop">
          <span className="modal__pop-close"><img src={close} alt="" /></span>
        <h1>Delete King West warehouse?</h1>
        <p className="p1">Please confirm that you’d like to delete the King West from the list of warehouses. You won’t be able to undo this action.</p>
        <div className="modal__pop-buttons">
          <button className="button-secondary">Cancel</button>
          <button className="button-delete">Delete</button>
        </div>
        </div>
      </div>
    )
  }
}
