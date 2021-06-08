import React from "react";
import { Redirect } from "react-router-dom";
import "./successPopup.scss";

const SuccessPopup = ({ redirect }) => {
    if (redirect) {
      return <Redirect to="/inventory" />;
    }
  return (
    <div className="success-popup">
      <h1>Success ✅</h1>
      <br />
      <h2>uploaded</h2>
      <br />
      <h3>redirecting...</h3>
    </div>
  );
};

export default SuccessPopup;
