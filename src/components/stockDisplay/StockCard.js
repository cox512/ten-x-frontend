/* eslint-disable react/prop-types */
import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import StockGlance from "./StockGlance";
import Input from "../Input";
// import SearchResults from "./SearchResults";
import Button from "../Button";

const StockCard = ({ stockDay }) => {
  // console.log("stockDay", stockDay);
  return (
    <div data-test="component-stockCard" className="card-border display">
      <p>Search for a company:</p>
      <Input />
      {Object.keys(stockDay).length > 0 ? (
        <>
          <StockGlance data-test="component-stockGlance" />
          <Button data-test="component-button" text="More Info" />
        </>
      ) : null}
    </div>
  );
};

StockCard.propTypes = {
  stockDay: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => {
  // console.log(state);
  return { stockDay: state.stockDay, stockOverview: state.stockOverview };
};
export default connect(mapStateToProps)(StockCard);

// export default StockCard;
