/* eslint-disable react/prop-types */
import React, { useState, useEffect } from "react";
import SearchResults from "./SearchResults";
import { fetchStockDayPerf } from "../actions";
import { connect } from "react-redux";

const StockSearch = (props) => {
  const [term, setTerm] = useState("");

  return (
    <div className="ui segment">
      <form
        // onSubmit={onFormSubmit}
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
      <SearchResults term={term} />
    </div>
  );
};

// const mapStateToProps = (state) => {
//   console.log("stock search state:", state);
//   return {
//     stock: state.currentStock,
//   };
// };

// export default connect(mapStateToProps, { fetchStockDayPerf })(StockSearch);

export default StockSearch;
