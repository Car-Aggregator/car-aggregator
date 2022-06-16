const db = require('../models/pgModels.js');

// Controller for validating credentials of our application's users
const favoritesController = {};

favoritesController.saveCar = async (req, res, next) => {
  const { email, price, image, mileage, year, model, make, url, zip } = req.body;
  // INSERT INTO favorited_cars (price, image, mileage, year, model, make, url, zip, user_id) VALUES ($2, $3, $4, $5, $6, $7, $8, $9)
  // SELECT id FROM users WHERE email=email
  // SELECT * INTO newtable [IN externaldb] FROM oldtable WHERE condition;

  try {
    const findUser = 'SELECT id FROM users WHERE email=$1'
    const emailValue = [email];
    //REMOVE RETURNING AFTER DEBUGG FROM FRONTEND
    const insertFav = 'INSERT INTO favorited_cars (price, image, mileage, year, model, make, url, zip, user_id) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9) RETURNING *';
    const favoritedValues = [price, image, mileage, year, model, make, url, zip];

    await db.query(findUser, emailValue).then(user => {
      const user_id = user.rows[0].id;
      favoritedValues.push(user_id);
      db.query(insertFav, favoritedValues).then(carInfo => {
        //IF you want an array take out the [0]
        res.locals.favoritedCar = carInfo[0].rows; // need to send back the 
        console.log('res.locals.favoritedCar: ', res.locals.favoritedCar);
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

favoritesController.getFavorites = async (req, res, next) => {
  const { email } = req.body;

  try {
    const findUser = 'SELECT id FROM users WHERE email=$1'
    const emailValue = [email];
    // 'SELECT favorited_cars.id, favorited_cars.price, favorited_cars.image, favorited_cars.mileage, favorited_cars.year, favorited_cars.model,favorited_cars.make, favorited_cars.url, favorited_cars.zip FROM favorited_cars WHERE favorited_cars.user_id= $1'

    //const favoritesValues = [email]; //THIS NEEDS A PROMISE CHAIN TO GET USER ID
    await db.query(findUser, emailValue).then(user => {
      const user_id = user.rows[0].id;
      const favoritesQuery = 'SELECT favorited_cars.id, favorited_cars.price, favorited_cars.image, favorited_cars.mileage, favorited_cars.year, favorited_cars.model,favorited_cars.make, favorited_cars.url, favorited_cars.zip FROM favorited_cars WHERE favorited_cars.user_id= $1';
      const idQuery = [user_id];
      db.query(favoritesQuery, idQuery).then(carArray => {
        console.log('response from query--->', carArray)
        res.locals.favorites = carArray.rows
        next()
      })
    })

  } catch (err) {
    return next({
      log: 'Error in favoritesController.getFavorites',
      status: 502
    })
  }
}

favoritesController.removeFavorite = async (req, res, next) => {
  const { email, } = req.body;

  try {
    const findUser = 'SELECT id FROM users WHERE email=$1'
    const emailValue = [email];

    await db.query(findUser, emailValue).then(user => {
      const user_id = user.rows[0].id;

    })

    const deleteVehicle = 'DELETE FROM favorited_cars WHERE id=$1';
    const vehicleValue = [id];

    await db.query(deleteVehicle, vehicleValue).then(vehicle => {
      console.log('successful query and delete');
      return next();
    });
  }
  catch (err) {
    return next({
      log: 'Error in the removeFavorite middleware function',
      status: 502
    })
  }
}
// favoritesController.removeFavoriteFromScraper = async (req, res, next) => {
//   const { email, price, image, mileage, year, model, make, url, zip } = req.body;


//   try {
//     const findUser = 'SELECT id FROM users WHERE email=$1'
//     const emailValue = [email];
//     const deleteVehicle = 'DELETE FROM favorited_cars WHERE id=$1';
//     const vehicleValue = [id];

//     await db.query(deleteVehicle, vehicleValue).then(vehicle => {
//       const deleteQuery = 'DELETE FROM favorited_cars WHERE favorited_cars_id=$1, favorited_cars.price=$2, favorited_cars.image=$3, favorited_cars.mileage=$4, favorited_cars.year=$5, favorited_cars.model=$6,favorited_cars.make=$7, favorited_cars.url=$8, favorited_cars.zip=$9';

//       console.log('successful query and delete');
//       return next();
//     });
//   }
//   catch (err) {
//     return next({
//       log: 'Error in the removeFavorite middleware function',
//       status: 502
//     })
//   }
// }

module.exports = favoritesController;