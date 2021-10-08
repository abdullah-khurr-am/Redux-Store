import { combineReducers } from "redux";
import { productReducer, selectedproductReducer } from "./productReducer";

const reducers = combineReducers({
    allProducts:productReducer,
    selectedProduct:selectedproductReducer
});

export default reducers;