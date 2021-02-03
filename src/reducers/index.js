import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import stockDayReducer from "./stockDayReducer";
import stockOverviewReducer from "./stockOverviewReducer";
import userReducer from "./userReducer";
import watchlistReducer from "./watchlistReducer";

export default combineReducers({
  stockDay: stockDayReducer,
  stockOverview: stockOverviewReducer,
  form: formReducer,
  user: userReducer,
  watchlists: watchlistReducer,
});
