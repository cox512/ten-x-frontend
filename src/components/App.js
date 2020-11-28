import React, { useState, useEffect } from "react";
import StockCard from "./StockCard";
import useStocks from "../hooks/useStocks";

const App = () => {
  const [currentStockData, setCurrentStockData] = useState({});
  const [returnedStocks, setReturnedStocks] = useState([]);
  const [stockData, setStockData, search] = useStocks([]);

  useEffect(() => {
    if (stockData !== undefined && stockData.bestMatches) {
      setReturnedStocks(stockData);
    } else if (stockData !== undefined && stockData["Global Quote"]) {
      setCurrentStockData(stockData["Global Quote"]);
    }
  }, [stockData]);

  console.log("playing with currentStockData:", currentStockData);

  console.log("returnedStocks:", returnedStocks);
  console.log("stockData", stockData);
  console.log("currentStockData:", currentStockData);

  return (
    <div data-test="component-app">
      <StockCard
        search={search}
        returnedStocks={returnedStocks}
        setReturnedStocks={setReturnedStocks}
        currentStockData={currentStockData}
      />
    </div>
  );
};

export default App;
