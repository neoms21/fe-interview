import { merchantsReducer } from "./merchants-reducer";
import { combineReducers } from "redux";

export const rootReducer = combineReducers({
  merchants: merchantsReducer,
});
