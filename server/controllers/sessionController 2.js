const db = require('../models/pgModels.js');

// Controller for creating cookies of user credentials and checking if incoming cookies are valid login credentials
const sessionController = {};

sessionController.createUserCookie = (req, res, next) => {
  const { email } = req.body;
  const createdCookie = res.cookie('ssid', email, { HttpOnly: true });
  res.locals.cookieID = email;
  return next();
}

sessionController.startSession = async (req, res, next) => {
  const { email, password } = req.body;
  const values = [res.locals.cookieID, email];

  try {
    const text = `UPDATE users SET cookie=$1 WHERE email=$2`
    await db.query(text, values)
  }
  catch (err) {
    return next({
      log: 'Error in sessionController.startSession',
      status: 502
    })
  }
}

sessionController.isLoggedIn = (req, res, next) => {
  let cookie = req.cookies;
  // variable pulling apart the login credientials sent in on cookie
  // query database for the cookie credentials 
  return next();
}


module.exports = sessionController;
