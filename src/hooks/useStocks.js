/* eslint-disable no-console */
/* eslint-disable no-shadow */
import { useState } from "react";
import alphaVantage from "../APIs/alphaVantage";

const KEY = [process.env.REACT_APP_API_KEY1, process.env.REACT_APP_API_KEY2];

const useStocks = () => {
  const [stockData, setStockData] = useState([]);

  const stockSearch = async (functionCall, termKey, term) => {
    const random = Math.floor(Math.random() * 2);
    const key = KEY[random];
    const response = await alphaVantage.get(
      `/query?function=${functionCall}&${termKey}=${term}&apikey=${key}`
    );

    if (response.data.Note) {
      // eslint-disable-next-line no-alert
      alert(
        "This API only allows 5-10 calls per minute. Try typing your search faster to save on calls. Otherwise, just hang tight and try your search again in a minute."
      );
    }

    setStockData(response.data);
  };

  return [stockData, setStockData, stockSearch];
};

export default useStocks;
