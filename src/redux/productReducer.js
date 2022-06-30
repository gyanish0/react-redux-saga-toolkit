import { PRODUCT_LIST, SET_PRODUCT_LIST } from "./constant";
export const productList = (data = [], action) => {
  switch (action.type) {
    // case PRODUCT_LIST:
    //   console.log("Product list r", action);
    //   return [action.data];
    case SET_PRODUCT_LIST:
      console.log("SET_PRODUCT_LIST", action);
      return [...action.data];
    default:
      return data;
  }
};
