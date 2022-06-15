const carsDotComScraper = require('../scrapers/carsDotComScraper.js')
const autoTraderScraper = require('../scrapers/autoTraderScraper.js')
const carGurusScraper = require('../scrapers/carGurusScraper.js');
const trueCarScraper = require('../scrapers/trueCarScraper.js');
const autoTraderPupSearch = require('../scrapers/puppeteer.js');

// Middleware functions for pointing to the scraper functions for each website
const scrapeController = {};

scrapeController.getCarsComData = async (req, res, next) => {
  try {
    const { make, model, minYear, zip } = req.params;
    res.locals.carsComData = await carsDotComScraper(make, model, minYear, zip);

    return next();
  }
  catch (err) {
    return next({
      log: 'Error in scrape controller.getCarsComData',
      status: 502
    });
  }
}

scrapeController.getAutoTraderData = async (req, res, next) => {
  try {
    const { make, model, minYear, zip } = req.params;
    res.locals.autoTraderData = await autoTraderScraper(make, model, minYear, zip);

    return next();
  }
  catch (err) {
    return next({
      log: 'Error in scrape controller.getAutoTraderData',
      status: 502
    });
  }
}

scrapeController.getCarGurusData = async (req, res, next) => {
  try {
    const { make, model, minYear, zip } = req.params;
    res.locals.carGurusData = await carGurusScraper(make, model, minYear, zip);
    return next();
  }

  catch (err) {
    return next({
      log: 'Error in scrapeController.getCarGurusData',
      status: 502
    });
  }
}

scrapeController.getTrueCarData = async (req, res, next) => {
  try {
    const { make, model, minYear, zip } = req.params;
    res.locals.trueCarData = await trueCarScraper(make, model, minYear, zip);
    return next();
  }

  catch (err) {
    return next({
      log: 'Error in scrapeController.getTrueCarData',
      status: 502
    });
  }
}

scrapeController.getPupAutoTrader = async (req, res, next) => {
  try {
    const { make, model, minYear, zip } = req.params;
    res.locals.autoTraderData = await autoTraderPupSearch(make, model, minYear, zip);
    return next();
  }

  catch (err) {
    return next({
      log: 'Error in scrapeController.getPupAutoTrader',
      status: 502
    });
  }
}

module.exports = scrapeController;