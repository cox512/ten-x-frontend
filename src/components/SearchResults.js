import React, { useEffect, useState } from "react";

const SearchResults = ({ returnedStocks, stockSearch, term, onFormSubmit }) => {
  const [debouncedTerm, setDebouncedTerm] = useState(term);
  let renderedReturnedStocks;
  let returnedStocksArray;

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

  const onSubmit = async (event, stock) => {
    onFormSubmit(event, stock);
  };

  //had returnedStock !== undefined earlier and it worked fine.
  if (returnedStocks) {
    returnedStocksArray = returnedStocks.bestMatches;
    if (returnedStocksArray) {
      renderedReturnedStocks = returnedStocksArray.map((stock) => {
        return (
          <div className="item" key={stock["1. symbol"]}>
            <div
              className="content"
              onClick={(e) => onSubmit(e, stock["1. symbol"])}
            >
              <p>
                {stock["1. symbol"]} | {stock["2. name"]}
              </p>
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
