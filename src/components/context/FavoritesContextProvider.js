import React, { createContext, useContext, useReducer } from "react";
import { ACTIONS } from "../../helpers/const";
import { getLocalStorageFavorites } from "../../helpers/functions";
export const favorites = createContext();
export const useLike = () => useContext(favorites);

const INIT_STATE = {
  like: JSON.parse(localStorage.getItem("like")),
};
const reducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case ACTIONS.GET_LIKE:
      return { ...state, like: action.payload };
      break;
    default:
      return state;
  }
};
const FavoritesContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);

  // ! GET
  const getLike = () => {
    let like = getLocalStorageFavorites();
    if (!like) {
      localStorage.setItem(
        "like",
        JSON.stringify({
          products: [],
        })
      );
      like = {
        products: [],
      };
    }
    dispatch({
      type: ACTIONS.GET_LIKE,
      payload: like,
    });
  };
  // !CREATE LIKE
  const addProductsToLike = (product) => {
    let like = getLocalStorageFavorites();
    if (!like) {
      like = {
        products: [],
      };
    }
    let newProductLike = {
      item: product,
    };
    let productToFindLike = like.products.filter(
      (elem) => elem.item.id === product.id
    );
    if (productToFindLike.length === 0) {
      like.products.push(newProductLike);
    } else {
      like.products = like.products.filter((elem) => elem.item);
    }
    localStorage.setItem("like", JSON.stringify(like));
    dispatch({
      type: ACTIONS.GET_LIKE,
      payload: like,
    });
  };
  // ! CHECK PRODUCT IN CART
  const checkProductInLike = (id) => {
    let like = getLocalStorageFavorites();
    if (like) {
      let newLike = like.products.filter((elem) => elem.item.id == id);
      return newLike.length > 0 ? true : false;
    }
  };
  const deleteProductFromLike = (id) => {
    let like = getLocalStorageFavorites();
    like.products = like.products.filter((elem) => elem.item.id !== id);
    console.log(like.products);
    localStorage.setItem("like", JSON.stringify(like));
    dispatch({
      type: ACTIONS.GET_LIKE,
      payload: like,
    });
  };
  const values = {
    like: state.like,
    deleteProductFromLike,
    checkProductInLike,
    addProductsToLike,
    getLike,
  };
  return <favorites.Provider value={values}>{children}</favorites.Provider>;
};

export default FavoritesContextProvider;
