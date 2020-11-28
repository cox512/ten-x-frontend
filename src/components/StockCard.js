import React from "react";
import StockGlance from "./StockGlance";
import StockSearch from "./StockSearch";
import Button from "./Button";

const StockCard = (props) => {
  return (
    <div data-test="component-stockCard" className="card-border display">
      <StockSearch
        search={props.search}
        returnedStocks={props.returnedStocks}
        setReturnedStocks={props.setReturnedStocks}
      />
      {Object.keys(props.currentStockData).length !== 0 ? (
        <>
          <StockGlance currentStockData={props.currentStockData} />
          <Button />
        </>
      ) : null}
    </div>
  );
};

export default StockCard;
