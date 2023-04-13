import React, { useEffect, useState } from "react";
import { useAuth } from "../../../context/AuthContextProvider";
import "./LoginList.css";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { useNavigate } from "react-router-dom";

const LoginList = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { handleLogin, error, setError, loading } = useAuth();

  const handleSave = async (e) => {
    e.preventDefault();

    if (!email.trim() || !password.trim()) {
      alert("заполните все поля!");
    } else {
      let formData = new FormData();
      formData.append("username", email);
      formData.append("password", password);
      await handleLogin(formData, email);
    }
  };

  useEffect(() => {
    setError(false);
  }, []);

  const navigate = useNavigate();
  // if (loading) {
  //   return <Loader />;
  // }

  return (
    <>
      <div className="main_login_container">
        {error ? <h2>{error}</h2> : null}
        <form className="login_box_form" action="submit" onSubmit={handleSave}>
          <h1>Login Page</h1>
          <input
            onChange={(e) => setEmail(e.target.value)}
            type="text"
            placeholder="User Name"
          />
          <input
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="Password"
          />

          <button>Login</button>
          <button onClick={() => navigate("/forgotPassword")}>
            forgot password
          </button>
        </form>
      </div>
    </>
  );
};

export default LoginList;
