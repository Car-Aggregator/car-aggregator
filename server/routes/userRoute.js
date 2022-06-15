const express = require('express');
const Router = express.Router();
const userController = require('../controllers/userController.js');
const sessionController = require('../controllers/sessionController.js');

Router.get('/login', userController.findUser, sessionController.isLoggedIn, (req, res) => {
  console.log('about to complete response to client from findUser router');
  return res.status(200).json(res.locals.user);
});

Router.post('/signup', userController.createUser, sessionController.isLoggedIn, (req, res) => {
  console.log('about to complete response to client from createUser router');
  return res.status(200).json(res.locals.user);
});

module.exports = Router;