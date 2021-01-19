/* eslint-disable react/button-has-type */
/* eslint-disable arrow-body-style */
import React from "react";

const Button = ({ text }) => {
  return (
    <button data-test="component-button" className="ui inverted primary button">
      {text}
    </button>
  );
};

export default Button;
