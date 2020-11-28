import React, { useState } from "react";
import SearchResults from "./SearchResults";

const StockSearch = ({ returnedStocks, setReturnedStocks, search }) => {
  const [term, setTerm] = useState("");

  const onFormSubmit = (event, stock) => {
    event.preventDefault();
    setTerm("");
    setReturnedStocks([]);
    console.log("is Term cleared?:", term);
    search("GLOBAL_QUOTE", "symbol", stock);
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
        search={search}
        returnedStocks={returnedStocks}
        onFormSubmit={onFormSubmit}
        // setReturnedStocks={setReturnedStocks}
      />
    </div>
  );
};

export default StockSearch;
