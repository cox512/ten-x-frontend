/* eslint-disable react/prop-types */
import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import StockGlance from "./StockGlance";
import Input from "../Input";
import Button from "../Button";

const StockCard = ({ stockDay }) => {
  return (
    <div data-test="component-stockCard" className="display stock__display">
      <p className="stock__card--heading">Search for a company:</p>
      <Input />
      {Object.keys(stockDay).length > 0 ? (
        <div className="stock__display--details">
          <StockGlance data-test="component-stockGlance" />
          <Link to="/stockOverview">
            <Button data-test="component-button" text="More Info" />
          </Link>
        </div>
      ) : null}
    </div>
  );
};

StockCard.propTypes = {
  stockDay: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => {
  return { stockDay: state.stockDay, stockOverview: state.stockOverview };
};
export default connect(mapStateToProps)(StockCard);
