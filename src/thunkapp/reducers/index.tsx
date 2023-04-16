import { combineReducers } from "redux";

import productsReducer from "./productreducers";
import postproductsReducer from "./postproductreducer";

export const reducer = combineReducers({
    readProducts: productsReducer,
    writeProduct:postproductsReducer
});
