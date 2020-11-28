import React from "react";
import StockGlance from "./StockGlance";
import StockSearch from "./StockSearch";
import Button from "./Button";

const StockCard = ({
  search,
  returnedStocks,
  setReturnedStocks,
  currentStockData,
}) => {
  return (
    <div data-test="component-stockCard" className="card-border display">
      <StockSearch
        search={search}
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
