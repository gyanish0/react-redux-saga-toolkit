// import axios from "axios";
import { PRODUCT_LIST, SET_PRODUCT_LIST, SET_PRODUCT_SEARCH } from "./constant";
export const productList = () => {
  return {
    type: PRODUCT_LIST,
    data: "test",
  };
};

export const productSearch = (query) => {
  console.log("dwfgtgry===", query);
  return {
    type: SET_PRODUCT_SEARCH,
    query: query,
  };
};
