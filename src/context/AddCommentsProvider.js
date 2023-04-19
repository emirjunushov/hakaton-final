import React, { createContext, useContext, useEffect, useReducer } from "react";
import { API } from "../helpers";
import axios from "axios";

export const AddComments = createContext();
export const useAddComments = () => useContext(AddComments);

const INIT_STATE = {
  comments: [],
};
function reducer(state = INIT_STATE, action) {
  switch (action.type) {
    case "GET_COMMENTS":
      return { ...state, comments: action.payload };

    default:
      return state;
  }
}

const AddCommentsProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);
  // !=========================================================================

  const getComents = async () => {
    try {
      const res = await axios.get(`${API}/comments/`);
      console.log(res);
      dispatch({ type: "GET_COMMENTS", payload: res.data });
    } catch (error) {
      console.log(error);
    }
  };
  // !=========================================================================
  // !=========================================================================
  const PostOneComment = async (formData) => {
    try {
      const tokens = JSON.parse(localStorage.getItem("tokens"));
      const Authorization = `Bearer ${tokens.access}`;
      const config = {
        headers: {
          Authorization,
        },
      };

      const res = await axios.post(`${API}/comments/`, formData, config);
      getComents();
    } catch (error) {
      console.log(error);
    }
  };
  // !=========================================================================
  const deleteComments = async (id) => {
    try {
      const tokens = JSON.parse(localStorage.getItem("tokens"));
      const Authorization = `Bearer ${tokens.access}`;
      const config = {
        headers: {
          Authorization,
        },
      };

      const res = await axios.delete(`${API}/comments/${id}/`, config);
      getComents();
    } catch (error) {
      console.log(error);
    }
  };
  // !=========================================================================
  const values = {
    PostOneComment,
    deleteComments,
    getComents,
    allComments: state.comments,
  };
  return <AddComments.Provider value={values}>{children}</AddComments.Provider>;
};

export default AddCommentsProvider;
