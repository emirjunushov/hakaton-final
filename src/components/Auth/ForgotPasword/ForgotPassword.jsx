import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import StepContent from "@mui/material/StepContent";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import { TextField } from "@mui/material";
import { useAuth } from "../../../context/AuthContextProvider";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./ForgotPasword.css";

export default function ForgotPassword() {
  const navigate = useNavigate();
  const [activeStep, setActiveStep] = React.useState(0);
  const handleNext = async () => {
    if (activeStep == 0) {
      handleEmailForForgotPassword();
    } else if (activeStep === 1) {
      handleSaveForgotPasswordfinish();
    }
  };
  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };
  const handleReset = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };
  // !++++++++++++++++++++++++++++++++++++++++++++forgotpassword
  const {
    handleForgotPasswordEmail,
    error,
    setError,
    handleForgotPasswordFinish,
  } = useAuth();
  const [emailForForgotPassword, setEmailForForgotPassword] = useState("");
  const [token, setToken] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [newPasswordConfirm, setNewPasswordConfirm] = useState();
  async function handleEmailForForgotPassword() {
    if (!emailForForgotPassword.trim()) {
      alert("заполните все поля!");
      return;
    } else {
      let formData = new FormData();
      formData.append("email", emailForForgotPassword);
      try {
        await handleForgotPasswordEmail(formData);
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
      } catch (error) {
        console.log(error);
      }
    }
  }

  async function handleSaveForgotPasswordfinish() {
    if (!token.trim() || !newPassword.trim() || !newPasswordConfirm.trim()) {
      return alert("заполните все полddddя!");
    } else {
      let formData = new FormData();
      formData.append("token", token);
      formData.append("password", newPassword);
      formData.append("password2", newPasswordConfirm);

      try {
        await handleForgotPasswordFinish(formData);
        // navigate("/login");
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
      } catch (error) {
        console.log(error);
      }
    }
  }

  React.useEffect(() => {
    setError(false);
  }, []);
  // !++++++++++++++++++++++++++++++++++++++++++++forgotpassword
  //!  activeStep == 0 &&
  const steps = [
    {
      label:
        activeStep == 0 && error ? (
          <h4 style={{ color: "red" }}>{error}!!!</h4>
        ) : (
          "ведите email"
        ),
      description: (
        <TextField
          onChange={(e) => setEmailForForgotPassword(e.target.value)}
          id="outlined-basic"
          label="Email"
          variant="outlined"
        />
      ),
    },
    //! activeStep == 0 &&
    {
      label: error ? <h4 style={{ color: "red" }}>{error}!!!</h4> : "код",
      description: (
        <>
          <TextField
            onChange={(e) => setToken(e.target.value)}
            id="outlined-basic"
            label="код потверждения"
            variant="outlined"
          />
          <TextField
            onChange={(e) => setNewPassword(e.target.value)}
            id="outlined-basic"
            label="новый пароль"
            variant="outlined"
          />
          <TextField
            onChange={(e) => setNewPasswordConfirm(e.target.value)}
            id="outlined-basic"
            label="потвердите пароль"
            variant="outlined"
          />
        </>
      ),
    },
  ];

  React.useEffect(() => {
    setError(false);
  }, []);
  return (
    <div className="forgotPassword_main_container">
      <div className="forgotPassword__container">
        <div className="account_recorvery">
          <h2> Восстановление аккаунта</h2>
          <h3>
            Чтобы обеспечить безопасность вашей учетной записи, Google хочет
            убедиться, что вы действительно пытаетесь войти в нее.
          </h3>
        </div>
        <Box sx={{ maxWidth: 400, marginBottom: "8%" }}>
          <Stepper activeStep={activeStep} orientation="vertical">
            {steps.map((step, index) => (
              <Step key={step.label}>
                <StepLabel
                  optional={
                    index === 2 ? (
                      <Typography variant="caption">Last step</Typography>
                    ) : null
                  }
                >
                  {step.label}
                </StepLabel>
                <StepContent>
                  <Typography>{step.description}</Typography>
                  <Box sx={{ mb: 2 }}>
                    <div>
                      <Button
                        variant="contained"
                        onClick={() => {
                          handleNext();
                        }}
                        sx={{ mt: 1, mr: 1 }}
                      >
                        {index === steps.length - 1 ? "Finish" : "Continue"}
                      </Button>
                      <Button
                        disabled={index === 0}
                        onClick={handleBack}
                        sx={{ mt: 1, mr: 1 }}
                      >
                        Back
                      </Button>
                    </div>
                  </Box>
                </StepContent>
              </Step>
            ))}
          </Stepper>
          {activeStep === steps.length && (
            <Paper sx={{ p: 3, background: "transparent" }}>
              {error ? (
                <Typography>Все шаги не завершены - вы не закончили</Typography>
              ) : (
                <Typography>Все шаги завершены - вы закончили</Typography>
              )}
              <Button onClick={() => navigate("/login")} sx={{ mt: 1, mr: 1 }}>
                Войти
              </Button>
              <Button onClick={handleReset} sx={{ mt: 1, mr: 1 }}>
                Назад
              </Button>
            </Paper>
          )}
        </Box>
        {activeStep == 1 ? (
          <h2 className="account_recorvery_buttom">
            BATIR отправил уведомление на ваш iPhone. Откройте почту ,и введите
            код, чтобы подтвердить, что это вы.
          </h2>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}
