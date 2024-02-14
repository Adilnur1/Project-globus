import React, { createContext, useContext, useReducer } from "react";
import { useNavigate } from "react-router-dom";
import { ACTIONS, API, API_CATEGORIES } from "../../helpers/const";
import axios from "axios";
export const productContext = createContext();
export const useProducts = () => useContext(productContext);
const INIT_STATE = {
  products: [],
  oneProduct: {},
  categories: [],
};

const ProductContextProvider = ({ children }) => {
  const navigate = useNavigate();
  const reducer = (state = INIT_STATE, action) => {
    switch (action.type) {
      case ACTIONS.GET_PRODUCTS:
        return { ...state, products: action.payload };
      case ACTIONS.GET_ONE_PRODUCT:
        return { ...state, oneProduct: action.payload };
      case ACTIONS.GET_CATEGORIES:
        return { ...state, categories: action.payload };
      default:
        return state;
    }
  };
  const [state, dispatch] = useReducer(reducer, INIT_STATE);
  // !CREATE
  const addProduct = async (newProduct) => {
    await axios.post(API, newProduct);
    navigate("/");
  };
  // !GET
  const getProducts = async () => {
    const { data } = await axios(API);
    console.log(data);
    dispatch({
      type: ACTIONS.GET_PRODUCTS,
      payload: data,
    });
  };
  // !DELETE
  const deleteProduct = async (id) => {
    await axios.delete(`${API}/${id}`);
    getProducts();
  };
  // !GET_ONE_PRODUCT
  const getOneProduct = async (id) => {
    const { data } = await axios(`${API}/${id}`);
    dispatch({
      type: ACTIONS.GET_ONE_PRODUCT,
      payload: data,
    });
  };
  // !EDIT
  const editProduct = async (id, editedProduct) => {
    await axios.patch(`${API}/${id}`, editedProduct);
    navigate("/");
  };
  // !GET_CATEGORIES
  const getCategories = async () => {
    const { data } = await axios(API_CATEGORIES);
    dispatch({
      type: ACTIONS.GET_CATEGORIES,
      payload: data,
    });
  };
  // !CREATE CATEGORIES
  const createCategory = async (newCategory) => {
    await axios.post(API_CATEGORIES, newCategory);
    getCategories();
  };

  const values = {
    addProduct,
    getProducts,
    deleteProduct,
    products: state.products,
    getOneProduct,
    oneProduct: state.oneProduct,
    editProduct,
    getCategories,
    categories: state.categories,
    createCategory,
  };
  return (
    <productContext.Provider value={values}>{children}</productContext.Provider>
  );
};

export default ProductContextProvider;
