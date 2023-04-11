import * as React from "react";
import Box from "@mui/material/Box";
import Input from "@mui/material/Input";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import LoginIcon from "@mui/icons-material/Login";
import AccountCircle from "@mui/icons-material/AccountCircle";
import KeyIcon from "@mui/icons-material/Key";
import { Button } from "@mui/material";
import { useAuth } from "../../../context/AuthContextProvider";
export default function RegisterList() {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [passwordConfirm, setPasswordConfirm] = React.useState("");
  const [userName, setUserName] = React.useState("");

  const { handleRegister } = useAuth();

  const handleSave = () => {
    if (!email.trim() || !password.trim() || !passwordConfirm.trim()) {
      alert("заполните все поля!");
    } else {
      let newObj = {
        email,
        password,
        passwordConfirm,
        userName,
      };
      handleRegister(newObj);
    }
  };

  return (
    <Box
      sx={{
        "& > :not(style)": { m: 1 },
      }}
    >
      <h1>Register</h1>
      <FormControl variant="standard">
        <InputLabel htmlFor="input-with-icon-adornment">User Name</InputLabel>
        <Input
          onChange={(e) => setUserName(e.target.value)}
          id="input-with-icon-adornment"
          startAdornment={
            <InputAdornment position="start">
              <AccountCircle />
            </InputAdornment>
          }
        />
      </FormControl>
      <FormControl variant="standard">
        <InputLabel htmlFor="input-with-icon-adornment">email</InputLabel>
        <Input
          onChange={(e) => setEmail(e.target.value)}
          id="input-with-icon-adornment"
          startAdornment={
            <InputAdornment position="start">
              <AccountCircle />
            </InputAdornment>
          }
        />
      </FormControl>
      <FormControl variant="standard">
        <InputLabel htmlFor="input-with-icon-adornment">pasword</InputLabel>
        <Input
          onChange={(e) => setPassword(e.target.value)}
          id="input-with-icon-adornment"
          startAdornment={
            <InputAdornment position="start">
              <KeyIcon />
            </InputAdornment>
          }
        />
      </FormControl>
      <FormControl variant="standard">
        <InputLabel htmlFor="input-with-icon-adornment">
          Confirm Password
        </InputLabel>
        <Input
          onChange={(e) => setPasswordConfirm(e.target.value)}
          id="input-with-icon-adornment"
          startAdornment={
            <InputAdornment position="start">
              <KeyIcon />
            </InputAdornment>
          }
        />
      </FormControl>
      <Button variant="text">
        <LoginIcon />
        Register
      </Button>
    </Box>
  );
}
