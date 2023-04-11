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
export default function LoginList() {
  return (
    <Box
      sx={{
        "& > :not(style)": { m: 1 },
      }}
    >
      <h1>LOGIN</h1>
      <FormControl variant="standard">
        <InputLabel htmlFor="input-with-icon-adornment">email</InputLabel>
        <Input
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
        Login
      </Button>
    </Box>
  );
}
