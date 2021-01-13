import  {createStore, applyMiddleware} from "redux";
import asyncReducer from "./reducers";
import thunk from "redux-thunk" ;
import { createLogger } from 'redux-logger';

const logger = createLogger();

const store = createStore(asyncReducer, applyMiddleware(thunk, logger));


export default store;