import { useState } from "react";
import alphaVantage from "../APIs/alphaVantage";

const useStocks = (functionCall, term) => {
  // const [returnedStocks, setReturnedStocks] = useState([]);
  // const [currentStockData, setCurrentStockData] = useState({});
  const [stockData, setStockData] = useState();

  const search = async (functionCall, termKey, term) => {
    const response = await alphaVantage.get(
      `/query?function=${functionCall}&${termKey}=${term}`
    );

    setStockData(response.data);

    // console.log("returnedStocks:", returnedStocks);
    // if (response.data["Global Quote"]) {
    //   setCurrentStockData(response.data["Global Quote"]);
    // }
  };

  return [
    stockData,
    setStockData,
    // returnedStocks,
    // setReturnedStocks,
    // currentStockData,
    // setCurrentStockData,
    search,
  ];
};

export default useStocks;
