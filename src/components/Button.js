/* eslint-disable react/button-has-type */
/* eslint-disable arrow-body-style */
import React from "react";

const Button = ({ text }) => {
  return (
    <div data-test="component-button">
      <button className="ui inverted primary button">{text}</button>
    </div>
  );
};

export default Button;
