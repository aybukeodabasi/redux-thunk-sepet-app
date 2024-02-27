import { combineReducers, createStore } from "redux";
import basketReducer from "./reducers/basketReducer";
import productReducer from "./reducers/productReducer";
import { thunk } from "redux-thunk";
import { applyMiddleware } from "redux";

const rootReducer = combineReducers({ basketReducer, productReducer });

//apply middleware fonksiyonu ile
//thunk middle "ware" ini store a tanıt
export default createStore(rootReducer, applyMiddleware(thunk));
