// NPM Modules
import { combineReducers } from "redux";
// Reducers
import { restaurantReducer } from "./restaurantReducer";
import { uiReducer } from "./uiReducer.js";

export default combineReducers({
  restatuarantState: restaurantReducer,
  uiState: uiReducer,
});
