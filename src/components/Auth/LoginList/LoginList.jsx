import React, { useEffect, useState } from "react";
import { useAuth } from "../../../context/AuthContextProvider";
import "./LoginList.css";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { useNavigate } from "react-router-dom";
// !modal forgot password
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};

function ChildModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <Button onClick={handleOpen}>Open Child Modal</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="child-modal-title"
        aria-describedby="child-modal-description"
      >
        <Box sx={{ ...style, width: 200 }}>
          <h2 id="child-modal-title">Text in a child modal</h2>
          <p id="child-modal-description">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          </p>
          <Button onClick={handleClose}>Close Child Modal</Button>
        </Box>
      </Modal>
    </React.Fragment>
  );
}
// !modal forgot password
const LoginList = () => {
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

  const navigate = useNavigate();
  // if (loading) {
  //   return <Loader />;
  // }
  // !modal forgot password
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  // !modal forgot password
  return (
    <>
      <div className="main_login_container">
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
          <Button onClick={handleOpen}>Open modal</Button>
          <button>Login</button>
        </form>
      </div>

      {/* modal forgot PAsword */}
      <div>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="parent-modal-title"
          aria-describedby="parent-modal-description"
        >
          <Box sx={{ ...style, width: 400 }}>
            <h2 id="parent-modal-title">Text in a modal</h2>
            <p id="parent-modal-description">
              <TextField
                id="outlined-basic"
                label="Outlined"
                variant="outlined"
              />
            </p>
            <ChildModal />
          </Box>
        </Modal>
      </div>
    </>
  );
};

export default LoginList;
