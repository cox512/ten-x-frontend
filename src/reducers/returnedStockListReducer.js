export default (stockList = [], action) => {
  switch (action.type) {
    case "STOCK_LIST":
      return [action.payload];
    default:
      return stockList;
  }
};
