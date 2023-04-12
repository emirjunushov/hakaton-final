import React, { useEffect, useState } from "react";
import { useAuth } from "../../../context/AuthContextProvider";
import "./LoginList.css";
import video from "../../../IMAGES/video.mp4";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { handleLogin, error, setError, loading } = useAuth();

  const handleSave = (e) => {
    e.preventDefault();

    if (!email.trim() || !password.trim()) {
      alert("заполните все поля!");
    } else {
      let formData = new FormData();
      formData.append("username", email);
      formData.append("password", password);
      handleLogin(formData, email);
    }
  };

  useEffect(() => {
    setError(false);
  }, []);

  // if (loading) {
  //   return <Loader />;
  // }

  return (
    <div className="main_login_container">
      {/* <video controls autoplay muted loop id="myVideo">
        <source src={video} type="video/mp4" />
      </video> */}
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
      </form>
    </div>
  );
};

export default Login;
