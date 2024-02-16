export const getLocalStorage = () => {
  const cart = JSON.parse(localStorage.getItem("cart"));
  return cart;
};
export const getLocalStorageFavorites = () => {
  const like = JSON.parse(localStorage.getItem("like"));
  return like;
};

export const calcTotalPrice = (products) => {
  const totalPrice = products.reduce((acc, curr) => acc + curr.subPrice, 0);
  return totalPrice;
};

export const getProductsCountInCart = () => {
  let cart = getLocalStorage();
  return cart ? cart.products.length : 0;
};

export const calcSubPrice = (elem) => {
  return elem.item.price * elem.count;
};
