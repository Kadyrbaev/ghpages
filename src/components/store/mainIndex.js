import { applyMiddleware, combineReducers, createStore } from "redux";
import { BasketReducer } from "./reducers/BasketReducer";
import { thunk } from "redux-thunk";


const rootReducer = combineReducers({
    basket: BasketReducer
})

export const store = createStore(rootReducer, applyMiddleware(thunk))