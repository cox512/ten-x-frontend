import { combineReducers } from "redux";
//currentStockData
//returnedStocks
//stockData

//To Stand in for CurrentStockData?
const currentStockReducer = (currentStock = null, action) => {
  if (action.type === "STOCK_SELECTED") {
    return action.payload;
  }
  return currentStock;
};

const returnedStockListReducer = (returnedStockList = null, action) => {
  if (action.type === "RETURNED_STOCK_LIST") {
    return action.payload;
  }
  return returnedStockList;
};

const stockDataReducer = (stockData = null, action) => {
  if (action.type === "GENERIC_STOCK_DATA") {
    return action.payload;
  }
  return stockData;
};

export default combineReducers({
  currentStock: currentStockReducer,
  returnedStockList: returnedStockListReducer,
  stockData: stockDataReducer,
});
