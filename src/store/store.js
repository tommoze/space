import { createStore, applyMiddleware, compose } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import destinations from "./reducers/destinations";
import { mobileMenu } from "./reducers/mobileMenu";
import { crewReducer } from "./reducers/crewReducer";
import { technologyReducer } from "./reducers/technologyReducer";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = configureStore({
  reducer: {
    destinations,
    mobileMenu,
    crewReducer,
    technologyReducer,
  },
});
