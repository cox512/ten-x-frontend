import { useState } from "react";
import alphaVantage from "../APIs/alphaVantage";

const useStocks = () => {
  const [stocks, setStocks] = useState([]);

  const search = async (term) => {
    const response = await alphaVantage.get("/query", {
      params: {
        function: "SYMBOL_SEARCH",
        keywords: term,
      },
    });
    setStocks(response.data.bestMatches);
  };
  console.log(stocks);
  return [stocks, search];
};

export default useStocks;
