import React, { useEffect } from "react";

const SearchResults = ({ returnedStocks, search, term, onFormSubmit }) => {
  let renderedReturnedStocks;

  useEffect(() => {}, [returnedStocks]);

  useEffect(() => {
    if (term) {
      search("SYMBOL_SEARCH", "keywords", term);
    }
  }, [term]);

  const onSubmit = async (event, stock) => {
    onFormSubmit(event, stock);
  };

  if (returnedStocks !== undefined) {
    console.log("returnedStocks:", returnedStocks);
    let returnedStocksArray = returnedStocks.bestMatches;
    console.log("returnedStocksARray:", returnedStocksArray);
    if (returnedStocksArray) {
      renderedReturnedStocks = returnedStocksArray.map((stock) => {
        return (
          <div className="item" key={stock["1. symbol"]}>
            <div
              className="content"
              onClick={(e) => onSubmit(e, stock["1. symbol"])}
            >
              {stock["1. symbol"]} | {stock["2. name"]}
            </div>
          </div>
        );
      });
    }
  }

  return (
    <>
      {renderedReturnedStocks ? (
        <div className="search-results ui divided list">
          <h4>Select from the list below</h4>
          {renderedReturnedStocks}
        </div>
      ) : null}
    </>
  );
};

export default SearchResults;
