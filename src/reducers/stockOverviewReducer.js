export default (state = {}, action) => {
  switch (action.type) {
    case "STOCK_OVERVIEW":
      return action.payload;

    default:
      return state;
  }
};
