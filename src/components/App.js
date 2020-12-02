import React, { useEffect } from "react";
import StockCard from "./StockCard";
import useStocks from "../hooks/useStocks";
import { connect } from "react-redux";
import { selectStockDayPerf, selectStockList } from "../actions";

// eslint-disable-next-line react/prop-types
const App = ({ selectStockDayPerf, selectStockList, stocks }) => {
  // eslint-disable-next-line no-unused-vars
  const [stockData, setStockData, stockSearch] = useStocks();

  console.log("App Stocks:", stocks);

  useEffect(() => {
    if (stockData !== undefined && stockData.bestMatches) {
      selectStockList(stockData["bestMatches"]);
    } else if (stockData !== undefined && stockData["Global Quote"]) {
      selectStockDayPerf(stockData["Global Quote"]);
    }
  }, [stockData]);

  return (
    <div data-test="component-app">
      <StockCard stockSearch={stockSearch} />
    </div>
  );
};

// const mapStateToProps = (state) => {
//   console.log("App state:", state);
//   // return { stock: state.currentStock, stocks: state.returnedStockList[0] };
// };

export default connect(null, { selectStockDayPerf, selectStockList })(App);
