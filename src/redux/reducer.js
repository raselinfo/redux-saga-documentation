export const cartData = (payload = [], action) => {
  console.log("reducer is here", payload, action);
  if (action === "ADD_TO_CART") {
    return payload;
  }
  return payload;
};
