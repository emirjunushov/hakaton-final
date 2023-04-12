import * as React from "react";
import video from "../../../IMAGES/video.mp4";
import { useAuth } from "../../../context/AuthContextProvider";
import "./RegisterList.css";
import AccountCircle from "@mui/icons-material/AccountCircle";
import { Button, TextField, Typography } from "@mui/material";

import KeyIcon from "@mui/icons-material/Key";
import { useNavigate } from "react-router-dom";
export default function RegisterList() {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [passwordConfirm, setPasswordConfirm] = React.useState("");
  const [userName, setUserName] = React.useState("");

  const { handleRegister, loading, error, setError } = useAuth();

  const handleSave = () => {
    // e.preventDefault();

    if (
      !email.trim() ||
      !password.trim() ||
      !passwordConfirm.trim() ||
      !userName.trim()
    ) {
      alert("заполните все поля!");
    } else {
      let formData = new FormData();
      formData.append("email", email);
      formData.append("password", password);
      formData.append("password2", passwordConfirm);
      formData.append("username", userName);
      handleRegister(formData);
    }
  };

  React.useEffect(() => {
    setError(false);
  }, []);
  const navigate = useNavigate();
  return (
    <>
      <video className="video_bg" src={video} autoPlay loop muted />
      <div className="main_register_container">
        <div style={{ textAlign: "center", marginRight: " 34%" }}>
          <Typography className="h1_of_inputs">Register</Typography>
          <AccountCircle />
        </div>
        <div className="formOfInputs">
          {/* <form
            className="form_of_inputs"
            action="submit"
            onSubmit={handleSave}
          > */}

          <TextField
            className="inputs_in_form"
            onChange={(e) => setUserName(e.target.value)}
            id="standard-basic"
            label="user name"
            variant="standard"
          />
          <TextField
            className="inputs_in_form"
            onChange={(e) => setEmail(e.target.value)}
            id="standard-basic"
            label="email"
            variant="standard"
          />
          <TextField
            className="inputs_in_form"
            onChange={(e) => setPassword(e.target.value)}
            id="standard-basic"
            label="password"
            variant="standard"
          />
          <TextField
            className="inputs_in_form"
            onChange={(e) => setPasswordConfirm(e.target.value)}
            id="standard-basic"
            label="password confirm"
            variant="standard"
          />
          {error ? (
            <Typography sx={{ color: "#8B0000", marginTop: "5px" }}>
              {error} !!!
            </Typography>
          ) : null}
        </div>
        <>
          {" "}
          {email && password && passwordConfirm && userName ? (
            <Button
              onClick={handleSave}
              className="button_of_register"
              variant="button"
            >
              Register
            </Button>
          ) : (
            <Button
              style={{ marginTop: "5%", marginLeft: " 23% " }}
              variant="button"
              disabled
            >
              Register
            </Button>
          )}
        </>
        <div style={{ marginLeft: " 13% " }}>
          <Button onClick={() => navigate("/login")} sx={{ color: "black" }}>
            Log in ?
          </Button>
          <Button sx={{ color: "black" }}>Forgot Password?</Button>
        </div>
      </div>
    </>
  );
}
