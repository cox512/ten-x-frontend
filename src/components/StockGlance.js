/* eslint-disable react/prop-types */
import React from "react";
import { connect } from "react-redux";
import { formatter } from "../helpers/helpers";

const isNeg = RegExp(/^-/);

const StockGlance = ({ stock }) => {
  return (
    <div data-test="component-stockGlance">
      <h4 className="section-head">{stock["01. symbol"]}</h4>
      <h5 className="section-subhead">INSERT STOCK NAME HERE</h5>
      <p className="section-subhead">{formatter.format(stock["05. price"])}</p>

      <div className="inline-row">
        <p
          className="price-change"
          style={
            isNeg.test(stock["09. change"])
              ? { color: "red" }
              : { color: "green" }
          }
        >
          {formatter.format(stock["09. change"])}
        </p>
        <p
          className="price-change"
          style={
            isNeg.test(stock["09. change"])
              ? { color: "red" }
              : { color: "green" }
          }
        >
          {parseFloat(stock["10. change percent"]).toFixed(2)}%
        </p>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { stock: state.currentStock };
};

export default connect(mapStateToProps)(StockGlance);
