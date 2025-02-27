const express = require("express");
const Router = express.Router();
const userController = require("../controllers/userController.js");
const sessionController = require("../controllers/sessionController.js");

Router.post(
  "/login",
  userController.findUser,
  sessionController.createUserCookie,
  (req, res) => {
    console.log("about to complete response to client from findUser router");
    return res.status(200).json(res.locals.user);
  }
);

Router.get("/cookie", sessionController.isLoggedIn, (req, res) => {
  console.log("about to complete response to client from validateUser router");
  return res.status(200).json(res.locals.user);
});

Router.post(
  "/signup",
  userController.createUser,
  sessionController.createUserCookie,
  (req, res) => {
    console.log("about to complete response to client from createUser router");
    return res.status(200).json(res.locals.user);
  }
);

module.exports = Router;
