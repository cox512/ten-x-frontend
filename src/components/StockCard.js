import React from "react";
import StockGlance from "./StockGlance";
import StockSearch from "./StockSearch";
import Button from "./Button";

const StockCard = ({
  stockSearch,
  returnedStocks,
  setReturnedStocks,
  currentStockData,
}) => {
  return (
    <div data-test="component-stockCard" className="card-border display">
      <StockSearch
        stockSearch={stockSearch}
        returnedStocks={returnedStocks}
        setReturnedStocks={setReturnedStocks}
      />
      {Object.keys(currentStockData).length !== 0 ? (
        <>
          <StockGlance currentStockData={currentStockData} />
          <Button text="More Info" />
        </>
      ) : null}
    </div>
  );
};

export default StockCard;
