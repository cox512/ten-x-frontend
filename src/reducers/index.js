import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import stockDayReducer from "./stockDayReducer";
import stockOverviewReducer from "./stockOverviewReducer";
import authReducer from "./authReducer";

export default combineReducers({
  stockDay: stockDayReducer,
  stockOverview: stockOverviewReducer,
  auth: authReducer,
  form: formReducer,
});
