import { useState } from "react";
import alphaVantage from "../APIs/alphaVantage";

// eslint-disable-next-line no-unused-vars
const useStocks = (functionCall, term) => {
  const [stockData, setStockData] = useState([]);

  const KEY = [process.env.REACT_APP_API_KEY1, process.env.REACT_APP_API_KEY2];

  const stockSearch = async (functionCall, termKey, term) => {
    let random = Math.floor(Math.random() * 2);
    const key = KEY[random];
    console.log(key);
    const response = await alphaVantage.get(
      `/query?function=${functionCall}&${termKey}=${term}&apikey=${key}`
    );

    if (response.data["Note"]) {
      alert(
        "This API only allows 5-10 calls per minute. Try typing your search faster to save on calls. Otherwise, just hang tight and try your search again in a minute."
      );
    }

    setStockData(response.data);
  };

  return [stockData, setStockData, stockSearch];
};

export default useStocks;
