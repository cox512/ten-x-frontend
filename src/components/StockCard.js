/* eslint-disable react/prop-types */
import React from "react";
import StockGlance from "./StockGlance";
import StockSearch from "./StockSearch";
import Button from "./Button";
import { connect } from "react-redux";

const StockCard = ({ stockSearch, stock }) => {
  return (
    <div data-test="component-stockCard" className="card-border display">
      <StockSearch stockSearch={stockSearch} />
      {stock ? (
        <>
          <StockGlance />
          <Button text="More Info" />
        </>
      ) : null}
    </div>
  );
};

const mapStateToProps = (state) => {
  return { stock: state.currentStock };
};
export default connect(mapStateToProps)(StockCard);
