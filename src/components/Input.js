/* eslint-disable react/prop-types */
import React, { useState } from "react";
import SearchResults from "./stockDisplay/SearchResults";

const Input = () => {
  const [term, setTerm] = useState("");

  return (
    <div className="ui segment">
      <form className="ui form inline-col " data-test="component-input">
        <div className="field">
          <input
            type="text"
            value={term}
            // eslint-disable-next-line arrow-body-style
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

// export default connect(mapStateToProps, { fetchStockDayPerf })(Input);

export default Input;
