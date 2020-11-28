import { useState } from "react";
import alphaVantage from "../APIs/alphaVantage";

const useStocks = (functionCall, term) => {
  const [stockData, setStockData] = useState();

  const search = async (functionCall, termKey, term) => {
    const response = await alphaVantage.get(
      `/query?function=${functionCall}&${termKey}=${term}`
    );

    setStockData(response.data);
  };

  return [stockData, setStockData, search];
};

export default useStocks;
