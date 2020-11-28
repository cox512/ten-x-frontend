//Action Creator
//NOTE: We are using a "named export" here so we can import a single function from this file --> Remember that for your JS tools file.
//This is to replace our onFormSubmit function?
export const selectStock = (stock) => {
  //return an action
  return {
    type: "STOCK_SELECTED",
    payload: stock,
  };
};

export const selectStockList = (returnedStockList) => {
  return {
    type: "RETURNED_STOCK_LIST",
    payload: returnedStockList,
  };
};

//This is for useStocks API call, not sure if this is how to go about it.
export const getStockData = (stockData) => {
  return {
    type: "GENERIC_STOCK_DATA",
    payload: stockData,
  };
};
