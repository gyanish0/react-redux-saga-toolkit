import { ADD_TO_CART, EMPTY_CART, REMOVE_FROM_CART } from "./constant";
export const addToCart = (data) => {
  // console.log("add to cart", data);
  return {
    type: ADD_TO_CART,
    data: data,
  };
};
export const removeFromoCart = (data) => {
  console.log("Remove from cart", data);
  return {
    type: REMOVE_FROM_CART,
    data: data,
  };
};
export const emptyCart = (data) => {
  console.log("empty from cart");
  return {
    type: EMPTY_CART,
  };
};
