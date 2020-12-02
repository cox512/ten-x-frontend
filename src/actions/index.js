//NOTE: We are using a "named export" here so we can import a single function from this file --> Remember that for your JS tools file.

export const selectStockDayPerf = (stock) => {
  return {
    type: "STOCK_SELECTED",
    payload: stock,
  };
};

export const selectStockList = (stockList) => {
  return {
    type: "STOCK_LIST",
    payload: stockList,
  };
};
