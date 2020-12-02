import { combineReducers } from "redux";
import returnedStockListReducer from "./returnedStockListReducer";
import currentStockReducer from "./currentStockReducer";

export default combineReducers({
  currentStock: currentStockReducer,
  returnedStockList: returnedStockListReducer,
});
