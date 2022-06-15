const db = require('../models/pgModels.js');

// Controller for validating credentials of our application's users
const favoritesController = {};

favoritesController.findUser = async (req, res, next) => {
  const { email, password } = req.body;

  try {
    const queryStr = 'SELECT * FROM users WHERE email=$1 AND password=$2'
    const queryValues = [email, password];
    const user = await db.query(queryStr, queryValues)
    console.log('user-->', user)
    res.locals.user = user.rows;
    return next();
  }
  catch (err) {
    return next({
      log: 'Error in userController.findUser',
      status: 502
    })
  }
}
module.exports = favoritesController;
