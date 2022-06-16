import axios from "axios";
import "../styles/styles.scss";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import Box from "@mui/material/Box";

function SignIn() {
  const navigate = useNavigate();

  const [email, setEmail] = React.useState();
  const [password, setPassword] = React.useState();

  function signUp() {
    axios
      .post("/user/signup", {
        email,
        password,
      })
      .then((res) => {
        console.log(res.status);
        console.log("here's res: ", res);
        if (res.data.length !== 0) {
          navigate("/home", { state: { email } });
        } else {
          navigate("/");
        }
      });
  }

  function login() {
    console.log(email, "email");
    axios
      .post("/user/login", {
        email,
        password,
      })
      .then((res) => {
        console.log(
          "<><><><><><><<><>><><<>this is response:",
          res,
          "><><><><><>><><><><><><><><><><><><"
        );
        if (res.data.length !== 0) {
          navigate("/home", { state: { email } });
        } else {
          navigate("/");
        }
      });
  }

  return (
    <>
      <div className="container">
        <Box className="loginBox">
          <TextField
            onChange={(e) => setEmail(e.target.value)}
            id="outlined-basic"
            label="Email"
            variant="outlined"
          />
          <TextField
            onChange={(e) => setPassword(e.target.value)}
            id="outlined-basic"
            label="Password"
            variant="outlined"
          />
          <Button variant="contained" color="success" onClick={signUp}>
            Sign Up
          </Button>
          <Button variant="contained" color="success" onClick={login}>
            Login
          </Button>
        </Box>
      </div>
    </>
  );
}

export default SignIn;
