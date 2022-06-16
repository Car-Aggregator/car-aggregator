const express = require('express');
const favoritesController = require('../controllers/favoritesController.js');
const Router = express.Router();

Router.post('/addfavorite', favoritesController.saveCar, (req, res) => {
  console.log('about to complete response to client from saveCar router');
  return res.status(200).json(res.locals.favoritedCar);
});

Router.delete('/removefavorite', favoritesController.removeFavorite, (req, res) => {
  console.log('about to complete response to client from removeFavorite router');
  return res.status(200).json('favorited car successfully removed');
})

Router.post('/', favoritesController.getFavorites, (req, res) => {
  console.log('about to complete response to client from getFavorites router');
  return res.status(200).json(res.locals.favorites);
})

// Router.delete('/removefavoritefromscraper', favoritesController.removeFavoriteFromScraper, (req, res) => {
//   console.log('about to complete response to client from removeFavoriteFromScraper router');
//   return res.status(200).json('favorited car successfully removed');
// })

module.exports = Router;