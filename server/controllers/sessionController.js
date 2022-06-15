const db = require('../models/pgModels.js');

// Controller for creating cookies of user credentials
const sessionController = {};

sessionController.isLoggedIn = (req, res, next) => {
  res.cookie('ssid', res.locals.user, { HTTPOnly: true });

  return next();
}

module.exports = sessionController;
