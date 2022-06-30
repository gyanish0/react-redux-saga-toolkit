import { combineReducers } from "redux";
import { cartData } from "./reducer";
import { productList } from "./productReducer";

export const rootReducer = combineReducers({
  cartData,
  productList,
});
