const puppeteer = require('puppeteer');
const { scrollPageToBottom } = require('puppeteer-autoscroll-down');
/*
(async () => {
  const browser = await puppeteer.launch({headless : false});
  const page = await browser.newPage();
  await page.goto('https://www.autotrader.com/cars-for-sale/all-cars?zip=33401&makeCodeList=ACURA&modelCodeList=ILX');
  //await page.screenshot({path: 'mywebsite.png'})
  //const title = await page.title();
  //const url = await page.url();
  //console.log(title, url);
  //col-xs-4 item-card-side This is the image
  //img class='img-responsive-scale'
  //await page.waitForSelectorAll('.img-responsive-scale');
  //const imgSrc = await page.$eval('.img-responsive-scale', (el) => el.src);
  const grabParagraph = await page.evaluate(() =>{
    //const pgTag = document.querySelector('.img-responsive-scale').src; //maybe take .alt too
    //const pgTag = document.querySelectorAll('.img-responsive-scale'); //maybe take .alt too
    const srcs = Array.from(
        document.querySelectorAll(".img-responsive-scale")
      ).map((image) => image.getAttribute("src"));
      
    
 
    //const innerText = document.querySelectorAll('.text-bold.text-size-400.text-size-sm-500.link-unstyled').innerText;
    const innerText = document.querySelectorAll('.text-bold.text-size-400.text-size-sm-500.link-unstyled');

    const price = document.querySelector('.first-price').innerText;
    const carDescription = [];
    const imageArray = [];
    innerText.forEach(tag => carDescription.push(tag.innerText));
    //pgTag.forEach(tag => imageArray.push(tag.src));
    
    //console.log(pgTag);
    //console.log(innerText)
    resultArray = []
    //resultArray.push(pgTag, innerText, price);
    return srcs;
  })
  //console.log('imgSrc--->', imgSrc)
  console.log(grabParagraph)
  await browser.close();
}) ()
*/
(async () => {
    //const url = `https://www.autotrader.com/cars-for-sale/all-cars/${make.toLowerCase()}/${model.toLowerCase()}/${zip}?searchRadius=50&startYear=${minYear}&sortBy=derivedpriceASC&numRecords=50`
    //https://www.autotrader.com/cars-for-sale/all-cars/acura/ilx/33401?searchRadius=50&startYear=2020&sortBy=derivedprice&numRecords=25
    const browser = await puppeteer.launch({headless : false});
    const page = await browser.newPage();
    await page.setViewport({width: 1300, height: 1000});
    await page.goto('https://www.autotrader.com/cars-for-sale/all-cars?zip=33401&makeCodeList=ACURA&modelCodeList=ILX', {waitUntil: 'load'});
    await page.evaluate(_ => window.scrollTo(0,0));
    await scrollPageToBottom(page);
    const date = new Date();
    const actualDate = `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`;
    const imageLinks = await page.$$eval('.img-responsive-scale', imgLinks => {
        return imgLinks.map((i) => i.src);
    });
    const carDescriptions = await page.$$eval('.text-bold.text-size-400.text-size-sm-500.link-unstyled', carDescriptions => {
        return carDescriptions.map((i) => i.innerText);
    });
    const carPrices = await page.$$eval('.first-price', carPrices => {
        return carPrices.map((i) => i.innerText);
    });
    const carMileage = await page.$$eval('.item-card-specifications.col-xs-9.margin-top-4.text-subdued-lighter div', carMileage => {
      return carMileage.map((i) => i.innerText);
    });
    const carLink = await page.$$eval('.positioned-overlay-base.image-container a', carLink => {
    return carLink.map((i) => i.href);
    });
    const resultArray = [];

    for (let i = 1; i < carMileage.length; i++){
      resultArray.push({
        "price": Number(carPrices[i].replace(/\D/g, '')),
        "image": imageLinks[i],
        "mileage": Number(carMileage[i].replace(/\D/g, '')),
        "year": Number(carDescriptions[i].replace(/\D/g, '')),
        "model": carDescriptions[i],
        "make": carDescriptions[i],
        "url": carLink[i],
        "zip": "placeholder",
        "date": actualDate
      })
    }
    //console.log('imgSrc--->', imgSrc)
    // console.log('imageLinks--->', imageLinks, imageLinks.length);
    // console.log('carDescriptions-->', carDescriptions, carDescriptions.length);
    // console.log('carPrices-->', carPrices, carPrices.length);
    // console.log('carMileage-->', carMileage, carMileage.length);
    // console.log('carLink-->', carLink, carLink.length);
    console.log(resultArray);

//IMPORTANT, THE FIRST ELEMENT SHOULD NOT BE INCLUDED BECAUSE THE FIRST SPONSORED LINK DOES NOT HAVE MILAGE
    await browser.close();
  }) ()


  /*
  "autoTraderData": [
        {
            "price": 8995,
            "image": "https://media.nbclosangeles.com/2021/10/Uber_StarCars_PRHero_SB_STREET_16x9-01.png?fit=1920%2C1080&quality=85&strip=all",
            "mileage": 142846,
            "year": 2010,
            "model": "LS400",
            "make": "Lexus",
            "url": "autotrader.com/cars-for-sale/vehicledetails.xhtml?listingId=620320198&allListingType=all-cars&makeCodeList=LEXUS&location=&searchRadius=50&startYear=2010&sortBy=derivedpriceASC&numRecords=50&zip=33401&state=FL&city=West%20Palm%20Beach&dma=&isNewSearch=false&referrer=%2Fcars-for-sale%2Fall-cars%2Flexus%2Fls400%2F33467%3FsearchRadius%3D50%26startYear%3D2010%26sortBy%3DderivedpriceASC%26numRecords%3D50&clickType=listing",
            "zip": 33467,
            "date": "6/15/2022"
        },
        {
            "price": 8998,
            "image": "https://media.nbclosangeles.com/2021/10/Uber_StarCars_PRHero_SB_STREET_16x9-01.png?fit=1920%2C1080&quality=85&strip=all",
            "mileage": 176885,
            "year": 2010,
            "model": "LS400",
            "make": "Lexus",
            "url": "autotrader.com/cars-for-sale/vehicledetails.xhtml?listingId=630353386&allListingType=all-cars&makeCodeList=LEXUS&location=&searchRadius=50&startYear=2010&sortBy=derivedpriceASC&numRecords=50&zip=33401&state=FL&city=West%20Palm%20Beach&dma=&isNewSearch=false&referrer=%2Fcars-for-sale%2Fall-cars%2Flexus%2Fls400%2F33467%3FsearchRadius%3D50%26startYear%3D2010%26sortBy%3DderivedpriceASC%26numRecords%3D50&clickType=listing",
            "zip": 33467,
            "date": "6/15/2022"
        }
      ]



  */