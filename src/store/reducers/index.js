import { combineReducers } from "redux";
import { mobileMenu } from "./mobileMenu";
import { crewReducer } from "./crewReducer";
import { technologyReducer } from "./technologyReducer";

export const rootReducer = combineReducers({
  mobileMenu,
  crewReducer,
  technologyReducer,
});
