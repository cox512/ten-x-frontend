/* eslint-disable react/prop-types */
import React from "react";
import { connect } from "react-redux";
import { formatter } from "../helpers/helpers";
import { fetchStockDayPerf } from "../actions";

const isNeg = RegExp(/^-/);

const StockGlance = ({ stockDay, stockOverview }) => {
  return (
    <div data-test="component-stockGlance">
      <h4 data-test="element-stock-symbol" className="section-head">
        {stockDay["01. symbol"]}
      </h4>
      <h5 data-test="element-stock-name" className="section-subhead">
        {stockOverview["Name"]}
      </h5>
      <p className="section-subhead">
        {formatter.format(stockDay["05. price"])}
      </p>

      <div className="inline-row">
        <p
          className="price-change"
          style={
            isNeg.test(stockDay["09. change"])
              ? { color: "red" }
              : { color: "green" }
          }
        >
          {formatter.format(stockDay["09. change"])}
        </p>
        <p
          className="price-change"
          style={
            isNeg.test(stockDay["09. change"])
              ? { color: "red" }
              : { color: "green" }
          }
        >
          {parseFloat(stockDay["10. change percent"]).toFixed(2)}%
        </p>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  // console.log("stock glance state:", state);
  return { stockDay: state.stockDay, stockOverview: state.stockOverview };
};

export default connect(mapStateToProps, { fetchStockDayPerf })(StockGlance);

// export default StockGlance;
