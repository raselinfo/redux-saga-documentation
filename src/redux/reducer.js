export const cartData = (initialValue = [], action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return [...initialValue, action.data];

    default:
      return initialValue;
  }
};
