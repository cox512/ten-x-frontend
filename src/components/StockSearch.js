/* eslint-disable react/prop-types */
import React, { useState, useEffect } from "react";
import SearchResults from "./SearchResults";
// import { connect } from "react-redux";
import { selectStockList } from "../actions";

const StockSearch = (props) => {
  const [term, setTerm] = useState("");

  useEffect(() => {
    selectStockList(term);
  }, [term]);

  const onFormSubmit = (event, stock) => {
    event.preventDefault();
    setTerm("");
    props.stockSearch("GLOBAL_QUOTE", "symbol", stock["1. symbol"]);
  };

  return (
    <div className="ui segment">
      <form
        onSubmit={onFormSubmit}
        className="ui form inline-col "
        data-test="component-stockSearch"
      >
        <div className="field">
          <label>Search for a company:</label>
          <input
            type="text"
            value={term}
            onChange={(e) => setTerm(e.target.value)}
            placeholder="Search ..."
          />
        </div>
      </form>
      <SearchResults
        term={term}
        stockSearch={props.stockSearch}
        onFormSubmit={onFormSubmit}
      />
    </div>
  );
};

// const mapStateToProps = (state) => {
//   console.log("stock search state:", state);
//   return {
//     // selectStockList: state.selectStockList,
//     // stocks: state.returnedStockList,
//   };
// };

export default StockSearch;
