import { useState } from "react";
import alphaVantage from "../APIs/alphaVantage";

// eslint-disable-next-line no-unused-vars
const useStocks = (functionCall, term) => {
  const [stockData, setStockData] = useState();

  const stockSearch = async (functionCall, termKey, term) => {
    const response = await alphaVantage.get(
      `/query?function=${functionCall}&${termKey}=${term}`
    );

    setStockData(response.data);
  };

  return [stockData, setStockData, stockSearch];
};

export default useStocks;
