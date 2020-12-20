export const actionTypes = {
  STOCK_DAY_PERFORMANCE: "STOCK_DAY_PERFORMANCE",
};

export const fetchStockDayPerf = (stock) => {
  // console.log("fetchStockDayPerf:", stock);
  return {
    type: "STOCK_DAY_PERFORMANCE",
    payload: stock,
  };
};

export const fetchStockOverview = (stock) => {
  // console.log("fetchStockOverview:", stock);
  return {
    type: "STOCK_OVERVIEW",
    payload: stock,
  };
};
