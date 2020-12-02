/* eslint-disable react/prop-types */
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { selectStockDayPerf, selectStockList } from "../actions";

const SearchResults = ({
  term,
  onFormSubmit,
  stocks,
  selectStockList,
  stockSearch,
}) => {
  const [debouncedTerm, setDebouncedTerm] = useState(term);

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
    selectStockList();
    onFormSubmit(event, stock);
  };

  const renderStockList = () => {
    return stocks.map((stock) => {
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
      {stocks ? (
        <div className="search-results ui divided list">
          <h4>Select from the list below</h4>
          {renderStockList()}
        </div>
      ) : null}
    </>
  );
};

const mapStateToProps = (state) => {
  // console.log("state", state);
  return {
    stocks: state.returnedStockList[0],
  };
};

export default connect(mapStateToProps, {
  selectStockDayPerf, //Do I need this one here?
  selectStockList,
  // --> Don't need this here b/c you aren't setting state, you're just displaying.
})(SearchResults);
