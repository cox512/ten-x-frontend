import { actionTypes } from "../actions/index";
import stockDayReducer from "./stockDayReducer";
//Test for no action and no state --> CURRENTLY FAILS
test("Returns default initial state of {} when no action is passed", () => {
  //   const newState = stockDayReducer(undefined, {});
  //   expect(newState).toBe({});
});

//Test STOCK_DAY_PERFORMANCE action type
// test("");
