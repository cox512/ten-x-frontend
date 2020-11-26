import React, { useState, useEffect } from "react";
import StockCard from "./StockCard";
import useStocks from "../hooks/useStocks";

const App = () => {
  //This is returned from our custom useStocks hook. It's an array of our returnedStocks and our search function  --> MAY BE ABLE TO DELETE THIS SINCE I'M PUTTING A LOT OF THIS FUNCTIONALITY IN SEARCHRESULTS
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
  console.log("returnedStocks:", returnedStocks);
  console.log("stockData", stockData);
  console.log("currentStockData:", currentStockData);

  return (
    <div data-test="component-app">
      <StockCard
        stockData={stockData}
        setStockData={setStockData}
        search={search}
        returnedStocks={returnedStocks}
        setReturnedStocks={setReturnedStocks}
        currentStockData={currentStockData}
      />
    </div>
  );
};

export default App;
