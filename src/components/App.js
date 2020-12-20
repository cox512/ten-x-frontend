import React, { useEffect } from "react";
import StockCard from "./stockDisplay/StockCard";
import useStocks from "../hooks/useStocks";
import { connect } from "react-redux";

// eslint-disable-next-line react/prop-types
const App = ({ fetchStockDayPerf }) => {
  return (
    <div data-test="component-app">
      <StockCard />
    </div>
  );
};

// const mapStateToProps = (state) => {
//   console.log("App state:", state);
//   return { stockDay: state.stockDay, stockOverview: state.stockOverview };
// };

// export default connect(mapStateToProps, { fetchStockDayPerf })(App);

export default App;
