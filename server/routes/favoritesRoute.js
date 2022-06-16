const express = require('express');
const favoritesController = require('../controllers/favoritesController.js');
const Router = express.Router();

//Router.get()
// '/favorites/
Router.post('/addfavorite', favoritesController.saveCar, (req, res) => {
  console.log('about to complete response to client from saveCar router');
  return res.status(200).json(res.locals.favoritedCar);
});

module.exports = Router;