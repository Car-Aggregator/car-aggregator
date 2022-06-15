const express = require('express');
const scrapeController = require('../controllers/scrapeController');
const Router = express.Router();

// routers to handle requests and invoke middleware functions that get executed by controller
// '/scrape/:make-:model-:minYear-:zip'
Router.get('/scrape/:make/:model/:minYear/:zip',
  scrapeController.getCarsComData,
  scrapeController.getTrueCarData,
  scrapeController.getPupAutoTrader,
  // scrapeController.getCarGurusData,
  (req, res) => res.status(200).json({
    carsComData: res.locals.carsComData,
    trueCarData: res.locals.trueCarData,
    autoTraderData: res.locals.autoTraderData
    // carGurusData: res.locals.carGurusData
  })
);
Router.get('/scrapeCarCom/:make/:model/:minYear/:zip', scrapeController.getCarsComData, (req, res) => {
  res.status(200)
    .json({ carsComData: res.locals.carsComData })
})
Router.get('/scrapePupAuto/:make/:model/:minYear/:zip', scrapeController.getPupAutoTrader, (req, res) => {
  res.status(200)
    .json({ autoTraderData: res.locals.autoTraderData })
})

module.exports = Router;
