import React, { useState } from "react";
import SearchResults from "./SearchResults";

const StockSearch = (props) => {
  const [term, setTerm] = useState("");

  const onFormSubmit = (event) => {
    event.preventDefault();
    props.onSubmit(term);
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
          {/* <i className="inverted circular link search icon"></i> */}
          <input
            type="text"
            value={term}
            onChange={(e) => setTerm(e.target.value)}
            placeholder="Search ..."
          />
        </div>
      </form>
      <SearchResults searchResults={props.searchResults} />
    </div>
  );
};

export default StockSearch;
