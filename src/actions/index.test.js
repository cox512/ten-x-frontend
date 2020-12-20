import { fetchStockDayPerf, actionTypes } from "./";

describe("fetchStockDayPerf", () => {
  test("returns an action with type STOCK_DAY_PERFORMANCE", () => {
    const action = fetchStockDayPerf();
    expect(action).toEqual({ type: actionTypes.STOCK_DAY_PERFORMANCE });
  });
});
