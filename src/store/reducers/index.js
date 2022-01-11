import { combineReducers } from "redux";
import { mobileMenu } from "./mobileMenu";
import { destinationReducer } from './destinationReducer';
import { crewReducer } from './crewReducer';
import { technologyReducer } from "./technologyReducer";


export const rootReducer = combineReducers({
  mobileMenu,
  destinationReducer,
  crewReducer,
  technologyReducer
});