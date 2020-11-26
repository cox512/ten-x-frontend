import React, { useEffect } from "react";

const SearchResults = ({ returnedStocks, search, term, onFormSubmit }) => {
  let renderedReturnedStocks;

  useEffect(() => {
    if (term) {
      search("SYMBOL_SEARCH", "keywords", term);
    }
  }, [term]);

  const onSubmit = async (event, stock) => {
    onFormSubmit(event, stock);
  };

  if (returnedStocks) {
    renderedReturnedStocks = returnedStocks.map((stock) => {
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

  return (
    <>
      {returnedStocks ? (
        <div className="search-results ui divided list">
          <h4>Select from the list below</h4>
          {renderedReturnedStocks}
        </div>
      ) : null}
    </>
  );
};

export default SearchResults;
