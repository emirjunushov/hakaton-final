import React, { createContext, useContext, useEffect, useReducer } from "react";
import { API } from "../helpers";
import axios from "axios";

export const AddComments = createContext();
export const useAddComments =()=> useContext(AddComments);

const INIT_STATE = {
  comments: []
}
function reducer(state = INIT_STATE, action){
switch (action.type) {
  case 'GET_COMMENTS':
    return {...state, comments: action.payload}

  default:
    break;
}
}


const AddCommentsProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);

  const getOneComment = async (id) => {
    try {
      const tokens = JSON.parse(localStorage.getItem("tokens"));
      const Authorization = `Bearer ${tokens.access}`;
      const config = {
        headers: {
          Authorization,
        },
      };

      const res = await axios.get(`${API}/comments/`, config);
      dispatch({ type: "GET_COMMENTS", payload: res.data });
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(()=>{
    getOneComment()
  },[])
  const values = {};
  return <AddComments.Provider value={values}>{children}</AddComments.Provider>;
};

export default AddCommentsProvider;
