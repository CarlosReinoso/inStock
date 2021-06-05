import React from "react";
import ReactDOM from "react-dom";

const DeleteModal = ({ isShowing, hide }) =>
  isShowing
    ? ReactDOM.createPortal(
        <>
          <div>
            <h1>TEST</h1>
            <button onClick={hide}></button>
          </div>
        </>,
        document.body
      )
    : null;

export default DeleteModal;
