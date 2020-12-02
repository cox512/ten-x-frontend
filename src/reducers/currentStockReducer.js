export default (currentStock = null, action) => {
  if (action.type === "STOCK_SELECTED") {
    return action.payload;
  }
  return currentStock;
};
