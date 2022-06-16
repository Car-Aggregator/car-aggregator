<<<<<<< HEAD
import axios from "axios";
import "../styles/styles.scss";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import TextField from "@mui/material/TextField";
import { Button } from '@mui/material';
import Box from '@mui/material/Box';

function SignIn() {
  let navigate = useNavigate();

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
        if (res.status === 200) {
          navigate("/home");
        }
      });
  }

  function login() {
    axios
      .get("/user/login", {
        email,
        password,
      })
      .then((res) => {
        console.log(res.status);
        if (res.status === 200) {
          navigate("/home");
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
=======
import React from "react";
import axios from "axios";
>>>>>>> max
