import React, { useEffect, useState } from "react";
import { useAuth } from "../../../context/AuthContextProvider";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";

import TextField from "@mui/material/TextField";

import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";
import "./LoginList.css";
import { CssBaseline } from "@mui/material";
function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const theme = createTheme();

export default function LoginList() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
  };
  // !=================================
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  console.log(userName);
  const { handleLogin, error, setError, loading } = useAuth();

  const handleSave = async () => {
    if (!userName.trim() || !password.trim()) {
      alert("заполните все поля!");
    } else {
      let formData = new FormData();
      formData.append("username", userName);
      formData.append("password", password);
      await handleLogin(formData, userName);
    }
  };

  useEffect(() => {
    setError(false);
  }, []);

  const navigate = useNavigate();

  // !=================================
  return (
    <ThemeProvider theme={theme}>
      <Grid container component="main" sx={{ height: "100vh" }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: "url(https://source.unsplash.com/random)",
            backgroundRepeat: "no-repeat",
            backgroundColor: (t) =>
              t.palette.mode === "light"
                ? t.palette.grey[50]
                : t.palette.grey[900],
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />

        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Войти
            </Typography>
            <Box
              component="form"
              noValidate
              onSubmit={handleSubmit}
              sx={{ mt: 1 }}
            >
              <TextField
                onChange={(e) => setUserName(e.target.value)}
                margin="normal"
                required
                fullWidth
                id="userName"
                label="user name "
                name="userName"
                autoComplete="userName"
                autoFocus
              />
              <TextField
                onChange={(e) => setPassword(e.target.value)}
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
              {error ? (
                <Typography sx={{ color: "red" }}>{error}!!</Typography>
              ) : (
                ""
              )}

              <Button
                onClick={handleSave}
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Войти
              </Button>
              <Grid container>
                <Grid item xs>
                  <Button
                    className="dont_have_accaunt"
                    onClick={() => navigate("/forgotPassword")}
                    variant="body2"
                  >
                    Забыли пароль?
                  </Button>
                </Grid>
                <Grid item>
                  <Button
                    className="dont_have_accaunt"
                    onClick={() => {
                      navigate("/register");
                    }}
                    // variant="body2"
                  >
                    "Нет учетной записи? Зарегистрируйтесь"
                  </Button>
                </Grid>
              </Grid>
              <Copyright sx={{ mt: 5 }} />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}
