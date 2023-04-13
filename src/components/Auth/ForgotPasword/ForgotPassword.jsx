import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import StepContent from "@mui/material/StepContent";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import { Input, TextField } from "@mui/material";
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
      await handleSaveForgotPasswordfinish();
    }
  };

  const handleBack = () => {
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
      return alert("заполните все поля!");
    } else {
      let formData = new FormData();
      formData.append("email", emailForForgotPassword);

      await handleForgotPasswordEmail(formData);
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
    }
  }

  async function handleSaveForgotPasswordfinish() {
    if (!token.trim() || !newPassword.trim() || !newPasswordConfirm.trim()) {
      alert("заполните все полddddя!");
      return;
    } else {
      let formData = new FormData();
      formData.append("token", token);
      formData.append("password", newPassword);
      formData.append("password2", newPasswordConfirm);

      await handleForgotPasswordFinish(formData);
      navigate("/login");
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
    }
  }

  React.useEffect(() => {
    setError(false);
  }, []);
  // !++++++++++++++++++++++++++++++++++++++++++++forgotpassword
  const steps = [
    {
      label: "Select campaign settings",
      description: (
        <TextField
          onChange={(e) => setEmailForForgotPassword(e.target.value)}
          id="outlined-basic"
          label="Outlined"
          variant="outlined"
        />
      ),
    },

    {
      label: "Create an ad",
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
  return (
    <div className="forgotPassword__container">
      <Box sx={{ maxWidth: 400 }}>
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
        {/* {activeStep === steps.length && (
        <Paper square elevation={0} sx={{ p: 3 }}>
          <Typography>All steps completed - you&apos;re finished</Typography>
          <Button onClick={handleReset} sx={{ mt: 1, mr: 1 }}>
            Reset
          </Button>
        </Paper>
      )} */}
      </Box>
    </div>
  );
}
