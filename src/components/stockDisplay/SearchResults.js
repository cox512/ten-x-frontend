/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/prop-types */
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";

import useStocks from "../../hooks/useStocks";
import { fetchStockDayPerf, fetchStockOverview } from "../../actions";

// You may not need to destructure the 2 'fetch' functions in the Component def
// eslint-disable-next-line no-shadow
export const UnconnectedSearchResults = ({ term, fetchStockDayPerf, fetchStockOverview }) => {
  const [debouncedTerm, setDebouncedTerm] = useState(term);
  const [stockData, setStockData, stockSearch] = useStocks([]);

  // console.log("stockData:", stockData);

  useEffect(() => {
    if (stockData !== undefined && stockData["Global Quote"]) {
      fetchStockDayPerf(stockData["Global Quote"]);
    }
    // You may want to use dot notation here if you can.
    // eslint-disable-next-line dot-notation
    if (stockData !== undefined && stockData["Description"]) {
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
    // dot notation?
    // eslint-disable-next-line dot-notation
    return stockData["bestMatches"].map((stock) => {
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
      {/* eslint-disable-next-line dot-notation */}
      {stockData["bestMatches"] ? (
        <div className="search-results ui divided list" data-test="component-searchResults">
          <h4>Select from the list below</h4>
          {renderStockList()}
        </div>
      ) : null}
    </>
  );
};

// const mapStateToProps = (state) => {
//   // console.log("stockResults state:", state);
//   return {
//     stockDay: state.stockDay,
//     stockOverview: state.stockOverview,
//   };
// };

export default connect(null, {
  fetchStockDayPerf,
  fetchStockOverview,
})(UnconnectedSearchResults);

// export default SearchResults;
