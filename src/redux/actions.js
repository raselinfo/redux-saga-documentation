export const ADD_TO_CART = (data) => {
  console.log("add to cart", data);

  return {
    type: "ADD_TO_CART",
    data,
  };
};
