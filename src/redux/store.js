import { applyMiddleware, combineReducers, createStore } from "redux";
import thunkMiddleware from "redux-thunk";
import productReducer from "./product-reducer";
import sliderReducer from "./slider-reducer";

let reducers = combineReducers({
    productPage: productReducer,
    sliderPage: sliderReducer
    
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store;