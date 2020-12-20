import { combineReducers } from "redux";
import stockDayReducer from "./stockDayReducer";
import stockOverviewReducer from "./stockOverviewReducer";

export default combineReducers({
  stockDay: stockDayReducer,
  stockOverview: stockOverviewReducer,
});
