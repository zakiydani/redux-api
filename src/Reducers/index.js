import { combineReducers } from "redux";
import mockReducers from "./mockReducers";
import todoReducers from "./todoReducers";
import hooksReducers from "./hooksReducers";

const Reducers = combineReducers({ mockReducers, todoReducers, hooksReducers });

export default Reducers;
