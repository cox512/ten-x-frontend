import React from "react";

const SearchResults = (props) => {
  console.log(props.searchResults);

  //   useEffect(() => {
  //     const stockOptions = props.searchResults.map(({ symbol, name }) => {
  //       return (
  //         <li key={symbol}>
  //           {symbol} | {name}
  //         </li>
  //       );
  //     });
  //   }, [props.searchResults]);

  return (
    <div>
      <ul className="search-results">
        {props.searchResults
          ? props.searchResults.map((stock) => {
              return (
                <li className="seperate" key={stock["1. symbol"]}>
                  {stock["1. symbol"]} | {stock["2. name"]}
                </li>
              );
            })
          : null}
      </ul>
    </div>
  );
};

export default SearchResults;
