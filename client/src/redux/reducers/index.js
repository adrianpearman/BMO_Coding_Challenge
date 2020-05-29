// NPM Modules
import { combineReducers } from "redux";
// Reducers
import { restaurantReducer } from "./restaurantReducer";
import { uiReducer } from "./uiReducer";

export default combineReducers({
  restaurantState: restaurantReducer,
  uiState: uiReducer,
});
