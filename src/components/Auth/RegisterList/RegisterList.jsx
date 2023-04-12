import * as React from "react";
import video from "../../../IMAGES/video.mp4";
import { useAuth } from "../../../context/AuthContextProvider";
import "./RegisterList.css";
import {
  Box,
  Button,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import { AccountCircle } from "@mui/icons-material";
import KeyIcon from "@mui/icons-material/Key";
export default function RegisterList() {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [passwordConfirm, setPasswordConfirm] = React.useState("");
  const [userName, setUserName] = React.useState("");

  const { handleRegister, loading, error, setError } = useAuth();

  const handleSave = (e) => {
    e.preventDefault();

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

  return (
    <>
      <div className="main_register_container">
        <video className="video_bg" src={video} autoPlay loop muted />
        <div className="conteiner_of_form">
          <Typography className="h1_of_inputs">Register</Typography>
          <form
            className="form_of_inputs"
            action="submit"
            onSubmit={handleSave}
          >
            <Box sx={{ display: "flex", alignItems: "flex-end" }}>
              <AccountCircle sx={{ color: "action.light", mr: 1, my: 0.5 }} />
              <TextField
                fullWidth
                className="inputs_in_form"
                onChange={(e) => setEmail(e.target.value)}
                id="input-with-sx"
                label="email"
                variant="standard"
              />
            </Box>
            <Box sx={{ display: "flex", alignItems: "flex-end" }}>
              <KeyIcon sx={{ color: "action.active", mr: 1, my: 0.5 }} />
              <TextField
                className="inputs_in_form"
                onChange={(e) => setPassword(e.target.value)}
                id="input-with-sx"
                label="password"
                variant="standard"
              />
            </Box>
            <Box sx={{ display: "flex", alignItems: "flex-end" }}>
              <KeyIcon sx={{ color: "action.active", mr: 1, my: 0.5 }} />
              <TextField
                className="inputs_in_form"
                onChange={(e) => setPasswordConfirm(e.target.value)}
                id="input-with-sx"
                label="confirm password"
                variant="standard"
              />
            </Box>
            <Box sx={{ display: "flex", alignItems: "flex-end" }}>
              <AccountCircle sx={{ color: "action.active", mr: 1, my: 0.5 }} />
              <TextField
                className="inputs_in_form"
                onChange={(e) => setUserName(e.target.value)}
                id="input-with-sx"
                label="user name"
                variant="standard"
              />
            </Box>
            {error ? <h2>{error}</h2> : null}
            {email && password && passwordConfirm && userName ? (
              <Button className="button_of_register" variant="text">
                Register
              </Button>
            ) : (
              <Button variant="text" disabled>
                Register
              </Button>
            )}
          </form>
        </div>
      </div>
    </>
  );
}
