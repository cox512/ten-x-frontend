/* eslint-disable no-console */
/* eslint-disable no-shadow */
import { useState } from "react";
import history from "../history";
import alphaVantage from "../APIs/alphaVantage";

const KEY = [process.env.REACT_APP_API_KEY1, process.env.REACT_APP_API_KEY2];

const useStocks = () => {
  const [stockData, setStockData] = useState([]);

  // eslint-disable-next-line consistent-return
  const stockSearch = async (functionCall, termKey, term) => {
    const random = Math.floor(Math.random() * 2);
    const key = KEY[random];
    console.log(key);
    const response = await alphaVantage.get(
      `/query?function=${functionCall}&${termKey}=${term}&apikey=${key}`
    );

    if (response.data.Note) {
      history.push("/error/APIOvercall");
    }

    setStockData(response.data);
  };

  return [stockData, setStockData, stockSearch];
};

export default useStocks;
