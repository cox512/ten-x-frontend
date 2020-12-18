/* eslint-disable react/prop-types */
import React from "react";
import StockGlance from "./StockGlance";
import StockSearch from "./StockSearch";
import Button from "./Button";
import { connect } from "react-redux";

const StockCard = ({ stockDay }) => {
  // console.log("stockDay", stockDay);
  return (
    <div data-test="component-stockCard" className="card-border display">
      <StockSearch />
      {Object.keys(stockDay).length > 0 ? (
        <>
          <StockGlance data-test="component-stockGlance" />
          <Button data-test="component-button" text="More Info" />
        </>
      ) : null}
    </div>
  );
};

const mapStateToProps = (state) => {
  // console.log(state);
  return { stockDay: state.stockDay, stockOverview: state.stockOverview };
};
export default connect(mapStateToProps)(StockCard);

// export default StockCard;
