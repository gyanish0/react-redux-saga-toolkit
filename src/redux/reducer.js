import { ADD_TO_CART, EMPTY_CART } from "./constant";
import { REMOVE_FROM_CART } from "./constant";
export const cartData = (data = [], action) => {
  // if (action.type === ADD_TO_CART) {
  //   console.log("reducer called", action);
  //   return action.data;
  // } else {
  //   return "no action";
  // }
  switch (action.type) {
    case ADD_TO_CART:
      // console.log("reducer called", action);
      return [action.data, ...data];
    case REMOVE_FROM_CART:
      console.log(" romove cart called", action);
      // data.length = data.length ? data.length - 1 : [];
      const remainingItem = data.filter((item) => item.id !== action.data);
      console.log(remainingItem);
      return [...remainingItem];
    case EMPTY_CART:
      console.log("Empty cart called", action);
      data = [];
      return [...data];
    default:
      return data;
  }
};
