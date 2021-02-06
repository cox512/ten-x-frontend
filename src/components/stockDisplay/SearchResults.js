/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/prop-types */
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";

import useStocks from "../../hooks/useStocks";
import * as actions from "../../actions";

// You may not need to destructure the 2 'fetch' functions in the Component def
// eslint-disable-next-line no-shadow
export const UnconnectedSearchResults = ({ term, fetchStockDayPerf, fetchStockOverview }) => {
  const [debouncedTerm, setDebouncedTerm] = useState(term);
  const [stockData, setStockData, stockSearch] = useStocks([]);

  useEffect(() => {
    if (stockData !== undefined && stockData["Global Quote"]) {
      fetchStockDayPerf(stockData["Global Quote"]);
    }
    if (stockData !== undefined && stockData.Description) {
      fetchStockOverview(stockData);
    }
  }, [stockData]);

  useEffect(() => {
    const timerId = setTimeout(() => {
      setDebouncedTerm(term);
    }, 800);
    return () => {
      clearTimeout(timerId);
    };
  }, [term]);

  useEffect(() => {
    stockSearch("SYMBOL_SEARCH", "keywords", debouncedTerm);
  }, [debouncedTerm]);

  const onSubmit = (event, stock) => {
    setStockData([]);
    stockSearch("GLOBAL_QUOTE", "symbol", stock["1. symbol"]);
    stockSearch("OVERVIEW", "symbol", stock["1. symbol"]);
  };

  const renderStockList = () => {
    return stockData.bestMatches.map((stock) => {
      return (
        <div className="item" key={stock["1. symbol"]}>
          <div className="content" onClick={(e) => onSubmit(e, stock)}>
            {stock["1. symbol"]}
            <div className="right floated content">{stock["2. name"]}</div>
          </div>
        </div>
      );
    });
  };

  return (
    <>
      {stockData.bestMatches ? (
        <div className="search-results ui divided list" data-test="component-searchResults">
          <h4>Select from the list below</h4>
          {renderStockList()}
        </div>
      ) : null}
    </>
  );
};

export default connect(null, actions)(UnconnectedSearchResults);
