export default (state = {}, action) => {
  switch (action.type) {
    case "STOCK_DAY_PERFORMANCE":
      return action.payload;

    default:
      return state;
  }
};
