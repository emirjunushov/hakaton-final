// import * as React from "react";
// import { useAuth } from "../../../context/AuthContextProvider";
// import "./RegisterList.css";
// import AccountCircle from "@mui/icons-material/AccountCircle";
// import { Button, Typography } from "@mui/material";
// import { useNavigate } from "react-router-dom";

// import { useState } from "react";

// export default function RegisterList() {
//   const [email, setEmail] = React.useState("");
//   const [password, setPassword] = React.useState("");
//   const [passwordConfirm, setPasswordConfirm] = React.useState("");
//   const [userName, setUserName] = React.useState("");
//   const [check, setCheck] = useState(null);
//   const { handleRegister, loading, error, setError } = useAuth();
//   console.log(check);
//   const handleSave = () => {
//     // e.preventDefault();

//     if (
//       !email.trim() ||
//       !password.trim() ||
//       !passwordConfirm.trim() ||
//       !userName.trim()
//     ) {
//       alert("заполните все поля!");
//     } else {
//       let formData = new FormData();
//       formData.append("email", email);
//       formData.append("password", password);
//       formData.append("password2", passwordConfirm);
//       formData.append("username", userName);
//       handleRegister(formData);
//     }
//   };

//   React.useEffect(() => {
//     setError(false);
//   }, []);
//   const navigate = useNavigate();

//   return (
//     <div className="bg">
//       <div className="register__container">
//         <div className="main_register_container">
//           <div className="register__cap">
//             <Typography className="h1_of_inputs">Зарегистрироваться</Typography>
//           </div>
//           <div className="formOfInputs">
//             <div className="forInp">
//               <input
//                 placeholder="user name"
//                 className="textfield"
//                 onChange={(e) => setUserName(e.target.value)}
//               />
//             </div>
//             <div className="forInp">
//               <input
//                 placeholder="email"
//                 className="textfield"
//                 onChange={(e) => setEmail(e.target.value)}
//                 type="email"
//               />
//             </div>
//             <div className="forInp">
//               <input
//                 placeholder="password"
//                 className="textfield"
//                 onChange={(e) => setPassword(e.target.value)}
//                 type="password"
//               />
//             </div>
//             <div className="forInp">
//               <input
//                 placeholder="password confirm"
//                 className="textfield"
//                 onChange={(e) => setPasswordConfirm(e.target.value)}
//                 type="password"
//               />
//             </div>
//             {error ? (
//               <Typography sx={{ color: "#8B0000", marginTop: "5px" }}>
//                 {error} !!!
//               </Typography>
//             ) : null}
//           </div>
//           <div className="registerBtn">
//             {email && password && passwordConfirm && userName && check ? (
//               <Button
//                 onClick={handleSave}
//                 className="button_of_register"
//                 variant="button"
//               >
//                 Register
//               </Button>
//             ) : (
//               <Button className="button_of_register1" variant="button" disabled>
//                 Register
//               </Button>
//             )}
//           </div>
//           <div className="login-from-register">
//             <Button
//               className="btnLogin"
//               onClick={() => navigate("/login")}
//               sx={{ color: "black" }}
//             >
//               Log in
//             </Button>
//             {check ? (
//               <Button sx={{ color: "black" }} onClick={() => setCheck(false)}>
//                 <CheckBoxIcon />Я принимаю все условия
//               </Button>
//             ) : (
//               <Button
//                 sx={{ color: "rgba(0, 0, 0, 0.508)" }}
//                 onClick={() => setCheck(true)}
//               >
//                 <CheckBoxOutlineBlankIcon />Я принимаю все условия
//               </Button>
//             )}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// !!!!!!
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
import { useAuth } from "../../../context/AuthContextProvider";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import "./RegisterList.css";
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
export default function RegisterList() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
  };
  // !=================================
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [passwordConfirm, setPasswordConfirm] = React.useState("");
  const [userName, setUserName] = React.useState("");
  const [check, setCheck] = useState(null);
  const { handleRegister, loading, error, setError } = useAuth();
  console.log(check);
  const handleSave = () => {
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
              Зарегистрироваться
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
                name="userName"
                label="User Name"
                type="userName"
                id="userName"
                autoComplete="current-password"
              />
              <TextField
                onChange={(e) => setEmail(e.target.value)}
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
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
              <TextField
                onChange={(e) => setPasswordConfirm(e.target.value)}
                margin="normal"
                required
                fullWidth
                name="password2"
                label="Подтвердите пароль"
                type="password"
                id="password"
                autoComplete="current-password"
              />
              {error ? (
                <Typography sx={{ color: "red" }}>{error}!!</Typography>
              ) : (
                ""
              )}
              {check ? (
                <Button sx={{ color: "black" }} onClick={() => setCheck(false)}>
                  <CheckBoxIcon />Я хочу получать вдохновение, маркетинговые
                  акции и обновления по электронной почте.
                </Button>
              ) : (
                <Button
                  sx={{ color: "rgba(0, 0, 0, 0.508)" }}
                  onClick={() => setCheck(true)}
                >
                  <CheckBoxOutlineBlankIcon />Я хочу получать вдохновение,
                  маркетинговые акции и обновления по электронной почте.
                </Button>
              )}
              {email && password && passwordConfirm && userName && check ? (
                <Button
                  onClick={handleSave}
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                >
                  Зарегистрироваться
                </Button>
              ) : (
                <Button
                  onClick={handleSave}
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                  disabled
                >
                  Зарегистрироваться
                </Button>
              )}
              <Grid container>
                <Grid item>
                  <Button
                    className="sign_in_style"
                    onClick={() => navigate("/login")}
                  >
                    {"У вас уже есть аккаунт? Войти"}
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
