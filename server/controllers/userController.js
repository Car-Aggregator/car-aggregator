const db = require('../models/pgModels.js');

// Controller for validating credentials of our application's users
const userController = {};

userController.findUser = async (req, res, next) => {
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

userController.createUser = async (req, res, next) => {
  const { email, password } = req.body;

  try {
    const queryStr = 'INSERT INTO users(email,password) VALUES($1,$2) RETURNING *'
    const queryValues = [email, password];
    const user = await db.query(queryStr, queryValues)
    res.locals.user = user.rows;
    console.log('user-->', user)
    return next();
  }
  catch (err) {
    return next({
      log: 'Error in userController.createUser',
      status: 502
    })
  }
}

module.exports = userController;