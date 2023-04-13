import * as React from "react";
import { useAuth } from "../../../context/AuthContextProvider";
import "./RegisterList.css";
import AccountCircle from "@mui/icons-material/AccountCircle";
import { Button, Typography } from "@mui/material";
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
    <div className="bg">
      <div className="register__container">
        <div className="main_register_container">
          <div className="register__cap">
            <Typography className="h1_of_inputs">Зарегистрироваться</Typography>
          </div>
          <div className="formOfInputs">
            <div className="forInp">
              <input
                placeholder="user name"
                className="textfield"
                onChange={(e) => setUserName(e.target.value)}
              />
            </div>
            <div className="forInp">
              <input
                placeholder="email"
                className="textfield"
                onChange={(e) => setEmail(e.target.value)}
                type="email"
              />
            </div>
            <div className="forInp">
              <input
                placeholder="password"
                className="textfield"
                onChange={(e) => setPassword(e.target.value)}
                type="password"
              />
            </div>
            <div className="forInp">
              <input
                placeholder="password confirm"
                className="textfield"
                onChange={(e) => setPasswordConfirm(e.target.value)}
                type="password"
              />
            </div>
            {error ? (
              <Typography sx={{ color: "#8B0000", marginTop: "5px" }}>
                {error} !!!
              </Typography>
            ) : null}
          </div>
          <div className="registerBtn">
            {email && password && passwordConfirm && userName ? (
              <Button
                onClick={handleSave}
                className="button_of_register"
                variant="button"
              >
                Register
              </Button>
            ) : (
              <Button className="button_of_register1" variant="button" disabled>
                Register
              </Button>
            )}
          </div>
          <div className="login-from-register">
            <Button
              className="btnLogin"
              onClick={() => navigate("/login")}
              sx={{ color: "black" }}
            >
              Log in
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
