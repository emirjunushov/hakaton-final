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
  const handleRegister = async (formData) => {
    setLoading(true);
    try {
      const res = await axios.post(`${API}/register/`, formData);
      navigate("/activate");
    } catch (error) {
      setError(Object.values(error.response.data).flat()[0]);
    } finally {
      setLoading(false);
    }
  };
  const handleActivate = async (formData) => {
    try {
      const res = await axios.post(`${API}/activate/`, formData);

      navigate("/login");
    } catch (error) {
      setError(Object.values(error.response.data).flat()[0]);
    }
  };

  const handleLogin = async (formData, email) => {
    setLoading(true);
    try {
      const res = await axios.post(`${API}/accounts/login/`, formData);
      localStorage.setItem("tokens", JSON.stringify(res.data));
      localStorage.setItem("email", email);
      setUser(email);
      navigate("/");
    } catch (error) {
      setError(error.response.data.detail);
    } finally {
      setLoading(false);
    }
  };
  const handleLogout = () => {
    localStorage.removeItem("tokens");
    localStorage.removeItem("email");
    setUser(null);
    navigate("/login");
  };

  const handleForgotPasswordEmail = async (formData) => {
    try {
      const res = await axios.post(`${API}/password_reset_request/`, formData);
    } catch (error) {
      setError(Object.values(error.response.data).flat()[0]);
    }
  };

  const handleForgotPasswordFinish = async (formData) => {
    try {
      const res = await axios.post(`${API}/password_reset/`, formData);
    } catch (error) {
      setError(Object.values(error.response.data).flat()[0]);
    }
  };

  const checkAuth = async () => {
    setLoading(true);
    try {
      const tokens = JSON.parse(localStorage.getItem("tokens"));
      const Authorization = `Bearer ${tokens.access}`;

      const config = {
        headers: {
          Authorization,
        },
      };

      const res = await axios.post(`${API}/account/token/refresh/`, {
        refresh: tokens.refresh,
        config,
      });

      localStorage.setItem(
        "tokens",
        JSON.stringify({ access: res.data.access, refresh: tokens.refresh })
      );

      const email = localStorage.getItem("email");
      setUser(email);
    } catch (error) {
      handleLogout();
    } finally {
      setLoading(false);
    }
  };

  const values = {
    checkAuth,
    handleForgotPasswordFinish,
    handleForgotPasswordEmail,
    handleLogout,
    user,
    handleRegister,
    error,
    loading,
    setError,
    handleActivate,
    handleLogin,
  };
  return <authContext.Provider value={values}>{children}</authContext.Provider>;
};

export default AuthContextProvider;
