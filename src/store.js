import { createStore, applyMiddleware, compose } from "redux";

import Reducers from "./Reducers";

import thunk from "redux-thunk";

import logger from "redux-logger";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancer = composeEnhancers(
  applyMiddleware(logger),
  applyMiddleware(thunk)
);

const store = createStore(Reducers, enhancer);

export default store;
