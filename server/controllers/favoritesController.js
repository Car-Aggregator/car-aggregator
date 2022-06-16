const db = require('../models/pgModels.js');

// Controller for validating credentials of our application's users
const favoritesController = {};

favoritesController.saveCar = async (req, res, next) => {
  const { email, price, image, mileage, year, model, make, url, zip } = req.body;
  // INSERT INTO favorited_cars (price, image, mileage, year, model, make, url, zip, user_id) VALUES ($2, $3, $4, $5, $6, $7, $8, $9)
  // SELECT id FROM users WHERE email=email

  try {
    const findUser = 'SELECT id FROM users WHERE email=$1'
    const emailValue = [email];
    //REMOVE RETURNING AFTER DEBUGG FROM FRONTEND
    const insertFav = 'INSERT INTO favorited_cars (price, image, mileage, year, model, make, url, zip, user_id) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9) RETURNING *';
    const favoritedValues = [price, image, mileage, year, model, make, url, zip]

    await db.query(findUser, emailValue).then(user => {
      const user_id = user.rows[0].id;
      favoritedValues.push(user_id);
      db.query(insertFav, favoritedValues).then(carInfo => {
        //IF you want an array take out the [0]
        res.locals.favoritedCar = carInfo[0].rows
        return next();
      })
    });
  }
  catch (err) {
    return next({
      log: 'Error in favoritesController.saveCar',
      status: 502
    })
  }
}

module.exports = favoritesController;