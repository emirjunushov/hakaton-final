import axios from "axios";
import React, { createContext, useContext, useReducer, useState } from "react";
import { useNavigate } from "react-router-dom";
import { API } from "../helpers";

export const AddProduct = createContext("");
export const useProduct = () => useContext(AddProduct);

const INIT_STATE = {
  products: [],
  oneProduct: null,
};

function reducer(state = INIT_STATE, action) {
  switch (action.type) {
    case "GET_PRODUCTS":
      return {
        ...state,
        products: action.payload,
      };
    case "GET_ONE_PRODUCT":
      return { ...state, oneProduct: action.payload };
    default:
      return state;
  }
}

const AddProductProvider = ({ children }) => {
  const navigate = useNavigate();
  const [state, dispatch] = useReducer(reducer, INIT_STATE);
  const createProduct = async (formData) => {
    try {
      const tokens = JSON.parse(localStorage.getItem("tokens"));
      const Authorization = `Bearer ${tokens.access}`;
      const config = {
        headers: {
          Authorization,
        },
      };

      await axios.post(`${API}/apartments/`, formData, config);
    } catch (error) {
      console.log(error);
    }
  };
  //! ==================================================GET PRODUCTS=====================================================================================

  const getProducts = async () => {
    try {
      const res = await axios.get(`${API}/apartments/`);
      dispatch({ type: "GET_PRODUCTS", payload: res.data.results });
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };
  // ! ================================================DELETE=======================================================================================

  const deleteProduct = async (id) => {
    try {
      const tokens = JSON.parse(localStorage.getItem("tokens"));
      const Authorization = `Bearer ${tokens.access}`;
      const config = {
        headers: {
          Authorization,
        },
      };

      await axios.delete(`${API}/apartments/${id}/`, config);
      getProducts();
    } catch (error) {
      console.log(error);
    }
  };

  //! ======================================================GET ONE PRODUCT=================================================================================

  const getOneProduct = async (id) => {
    try {
      const tokens = JSON.parse(localStorage.getItem("tokens"));
      const Authorization = `Bearer ${tokens.access}`;
      const config = {
        headers: {
          Authorization,
        },
      };

      const res = await axios.get(`${API}/apartments/${id}/`, config);
      console.log(res);
      dispatch({ type: "GET_ONE_PRODUCT", payload: res.data });
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  //! =======================================================UPDATE PRODUCT================================================================================

  const updateProduct = async (id, editedProduct) => {
    try {
      const tokens = JSON.parse(localStorage.getItem("tokens"));
      const Authorization = `Bearer ${tokens.access}`;
      const config = {
        headers: {
          Authorization,
        },
      };

      await axios.patch(`${API}/apartments/${id}/`, editedProduct, config);
      navigate("/products");
      console.log("works");
    } catch (error) {
      console.log(error);
    }
  };

  //! =======================================================================================================================================

  const values = {
    products: state.products,
    oneProduct: state.oneProduct,
    createProduct,
    getProducts,
    deleteProduct,
    getOneProduct,
    updateProduct,
  };
  return <AddProduct.Provider value={values}>{children}</AddProduct.Provider>;
};

export default AddProductProvider;
