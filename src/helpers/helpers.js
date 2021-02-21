/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable consistent-return */
import React from "react";

export const formatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});

export const priceChangeColor = Array.from(document.querySelectorAll(".price-change"));

export const renderError = ({ error, touched }) => {
  if (error && touched) {
    return (
      <div className="ui error message">
        <div>{error}</div>
      </div>
    );
  }
};

export const renderInput = ({ input, label, type, meta: { error, touched } }) => {
  const className = `field ${error && touched ? "error" : ""}`;

  return (
    <div className={className}>
      <label>{label}</label>
      <input type={type} {...input} autoComplete="off" />
      {error && touched ? (
        <div className="ui error message">
          <div>{error}</div>
        </div>
      ) : null}
    </div>
  );
};
