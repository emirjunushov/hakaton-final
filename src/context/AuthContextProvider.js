import axios from "axios";
import React, { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { API } from "../helpers";
export const authContext = createContext();
export const useAuth = () => useContext(authContext);

const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleRegister = async (newObj) => {
    setLoading(true);
    try {
      const res = await axios.post(`${API}/register/`, newObj);
      navigate("/register-success");
      console.log(res);
    } catch (error) {
      setError(Object.values(error.response.data).flat()[0]);
    } finally {
      setLoading(false);
    }
  };

  const values = { handleRegister, error, loading };
  return <authContext.Provider value={values}>{children}</authContext.Provider>;
};

export default AuthContextProvider;
