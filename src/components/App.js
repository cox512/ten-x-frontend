import React, { useState } from "react";
import axios from "axios";
import StockCard from "./StockCard";
import SearchResults from "./SearchResults";
import alphaVantage from "../APIs/alphaVantage";

const App = () => {
  const [stocks, setStocks] = useState([]);

  const onSearchSubmit = async (term) => {
    const response = await alphaVantage.get("/query", {
      //Why is 'query' here?
      params: {
        function: "SYMBOL_SEARCH",
        keywords: term,
      },
    });
    setStocks(response.data.bestMatches);
    // console.log(stocks);
  };

  return (
    <div data-test="component-app">
      <StockCard onSearchSubmit={onSearchSubmit} stocks={stocks} />
      <SearchResults />
    </div>
  );
};

export default App;
