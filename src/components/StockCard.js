import React from "react";
import StockGlance from "./StockGlance";
import StockSearch from "./StockSearch";
import Button from "./Button";

const StockCard = (props) => {
  return (
    <div data-test="component-stockCard" className="card-border display">
      <StockSearch
        onSubmit={props.onSearchSubmit}
        searchResults={props.stocks}
      />
      <StockGlance />
      <Button />
    </div>
  );
};

export default StockCard;
