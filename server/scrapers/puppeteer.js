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
// <div data-cmp="inventoryListing" class="inventory-listing cursor-pointer panel panel-default" id="640521631" data-qaid="cntnr-listing-640521631"><div class="padding-0 panel-body"><div data-cmp="positionedOverlay" class="positioned-overlay"><div class="positioned-overlay-wrapper"><div data-cmp="positionedOverlayBase" class="positioned-overlay-base"><div class="row overlay-actions-container"><div class="overlay-glyphs text-right col-xs-12 padding-right-1 col-sm-4"><div><span data-cmp="saveGlyph" class="glyphicon-stack text-gray-base save-glyph text-size-600 cursor-pointer margin-vertical-4 margin-horizontal-4"><span class="transparent glyphicon glyphicon-heart"></span><span class="text-inverse glyphicon glyphicon-heart-o"></span></span></div><div></div></div></div><div data-cmp="itemCard" class="item-card row display-flex align-items-stretch"><div class="col-xs-4 item-card-side"><div data-cmp="inventoryListImage" class="positioned-overlay bg-gray-darker inventory-listing-media text-center"><div class="positioned-overlay-wrapper"><div data-cmp="positionedOverlayBase" class="positioned-overlay-base image-container"><a rel="nofollow" href="/cars-for-sale/vehicledetails.xhtml?listingId=640521631&amp;allListingType=all-cars&amp;zip=33401&amp;makeCodeList=ACURA&amp;modelCodeList=ILX&amp;state=FL&amp;city=West%20Palm%20Beach&amp;dma=&amp;searchRadius=50&amp;isNewSearch=false&amp;referrer=%2Fcars-for-sale%2Fall-cars%3Fzip%3D33401%26makeCodeList%3DACURA%26modelCodeList%3DILX&amp;clickType=listing" aria-label="Used 2019 Acura ILX w/ Premium Package"><div style=""><img class="img-responsive-scale" data-cmp="inventoryImage" width="252" height="189" alt="Used 2019 Acura ILX w/ Premium Package" src="https://images.autotrader.com/borderscaler/252/189/2d363e/hn/c/ad73e25817364e9cb57d4ecf145e1e1e.jpg" loading="lazy" style="width: 100%; max-width: 100%; --aspect-ratio-calculation:75%;"></div></a></div></div></div></div><div class="col-xs-8 item-card-content display-flex flex-column justify-content-between"><div class="item-card-body margin-bottom-auto"><div><div class="inventory-listing-body padding-top-3 padding-right-3 margin-bottom-2"><div class="row"><div class="text-left col-xs-8"><div class="display-flex justify-content-between"><a rel="nofollow" href="/cars-for-sale/vehicledetails.xhtml?listingId=640521631&amp;allListingType=all-cars&amp;zip=33401&amp;makeCodeList=ACURA&amp;modelCodeList=ILX&amp;state=FL&amp;city=West%20Palm%20Beach&amp;dma=&amp;searchRadius=50&amp;isNewSearch=false&amp;referrer=%2Fcars-for-sale%2Fall-cars%3Fzip%3D33401%26makeCodeList%3DACURA%26modelCodeList%3DILX&amp;clickType=listing"><h2 data-cmp="subheading" class="text-bold text-size-400 text-size-sm-500 link-unstyled">Used 2019 Acura ILX</h2></a></div><div class="display-grid text-subdued-lighter padding-0"><div class="list-truncated text-size-200 text-size-sm-300">Premium Pkg</div></div></div><div class="margin-left-auto col-xs-4 text-right pull-right"><div data-cmp="pricing" class="text-gray-base text-bold text-size-500"><span class="first-price" data-cmp="firstPrice">26,327</span></div></div></div><div class="row"><div class="item-card-specifications col-xs-9 margin-top-4 text-subdued-lighter"><div class="text-bold">17,421 miles</div></div><div class="col-xs-3 text-right"><span class="display-block text-link text-size-200">See estimated payment</span></div></div></div></div></div><div class="item-card-footer margin-top-auto"><div class="listing-footer text-subdued-lightest text-size-200 padding-right-3"><hr><div class="display-flex flex-wrap justify-content-between align-items-start"><div class="text-left margin-bottom-2 padding-right-5"><div class="display-flex align-items-center"><div data-cmp="ownerDistance" class="text-bold text-subdued">Napleton's West Palm Beach Hyundai<span class="text-normal padding-left-1"> (1.4 mi. away)</span></div></div><div class="display-flex align-items-center text-size-300 margin-bottom-1"><img height="20" width="15" alt="" src="https://www.autotrader.com/content/dam/autotrader/additionalresources/kbb_logo.svg" class="margin-right-1" loading="lazy"><span class="text-subdued text-bold text-size-200 margin-right-2">KBB.com Rating</span><span data-cmp="starRating" class="display-inline-block"><span style="color:#e8bb38" class="margin-right-1 glyphicon glyphicon-star"></span><span class="text-bold text-subdued">4.8</span></span></div><div class="display-flex justify-content-start flex-wrap text-subdued margin-top-1" data-cmp="contactInfo"><div class="display-flex"><span data-cmp="phoneNumber" class="display-block">(561) 578-6980</span></div><span class="padding-horizontal-2">|</span><div data-cmp="emailCTA"><span class="text-link display-block">Confirm Availability</span></div></div><div class="display-flex justify-content-start flex-wrap text-subdued margin-top-3 margin-top-sm-1" data-cmp="dealerProducts"><ul data-cmp="list" class="list list-inline display-inline margin-bottom-0"><li class="display-inline">Video Walkaround</li><li class="display-inline">Test Drive</li><li class="display-inline">Delivery</li></ul></div><div></div></div><div class="display-flex align-items-center padding-bottom-3"><div class="display-inline-block align-self-start"><div data-cmp="linkTile" class="display-flex flex-column flex-sm-row justify-content-center align-items-center " cmp="ec_pa_lgo" cprd="View_CERT" epn="carfaxVHR"><a target="_blank" rel="nofollow noopener" data-cmp="partnerLinkTile" href="https://www.carfax.com/VehicleHistory/ar20/pax-5SUejRgYSqcXNjuNdnWijcDRbXlK2K7npwpscBLXXQEC73rnHlMhUrar_rnCfcwtE-48_yn5BYq3n2zemuWT0jUGFFcqdSA"><div style=""><img src="/resources/img/na/carfax/regular-own.svg" alt="View the Free CARFAX Report" title="View the Free CARFAX Report" height="30" loading="lazy"></div></a></div></div><div class="display-inline-block padding-left-2"><div data-cmp="linkTile" class="display-flex flex-column flex-sm-row justify-content-center align-items-center " cmp="ec_pa_lgo" cprd="ACURA_CERT" epn="CERT"></div></div></div></div></div></div></div></div></div><div data-cmp="positionedOverlayAnchor" class="positioned-overlay-anchor topRight"><div class="offset-top-50"><div class=""><div data-cmp="positionedOverlay" class="positioned-overlay display-flex"><div class="positioned-overlay-wrapper"><div data-cmp="positionedOverlayBase" class="positioned-overlay-base"><div class="ribbon text-bold right ribbon-great-price text-size-200 margin-vertical-1 padding-left-3"><div class="ribbon-content-right">GREAT PRICE</div></div></div><div data-cmp="positionedOverlayAnchor" class="positioned-overlay-anchor topLeft"><div style=""><img class="media-gallery-viewer order-2" height="34" width="25" alt="KBB.com Price Advisor" 
*/
(async () => {
    const browser = await puppeteer.launch({headless : false});
    const page = await browser.newPage();
    await page.setViewport({width: 1300, height: 1000});
    await page.goto('https://www.autotrader.com/cars-for-sale/all-cars?zip=33401&makeCodeList=ACURA&modelCodeList=ILX', {waitUntil: 'load'});
    await page.evaluate(_ => window.scrollTo(0,0));
    await scrollPageToBottom(page);
    const imageLinks = await page.$$eval('.img-responsive-scale', imgLinks => {
        return imgLinks.map((i) => i.src);
    });
    const carDescriptions = await page.$$eval('.text-bold.text-size-400.text-size-sm-500.link-unstyled', carDescriptions => {
        return carDescriptions.map((i) => i.innerText);
    });
    const carPrices = await page.$$eval('.first-price', carPrices => {
        return carPrices.map((i) => i.innerText);
    });

 
    // const grabParagraph = await page.evaluate(() =>{
        
    //     scrollPageToBottom(page);
    //   //const pgTag = document.querySelector('.img-responsive-scale').src; //maybe take .alt too
    //   //const pgTag = document.querySelectorAll('.img-responsive-scale'); //maybe take .alt too
    //   const srcs = Array.from(
    //       document.querySelectorAll(".img-responsive-scale")
    //     ).map((image) => image.getAttribute("src"));
        
      
   
    //   //const innerText = document.querySelectorAll('.text-bold.text-size-400.text-size-sm-500.link-unstyled').innerText;
    //   const innerText = document.querySelectorAll('.text-bold.text-size-400.text-size-sm-500.link-unstyled');
  
    //   const price = document.querySelector('.first-price').innerText;
    //   const carDescription = [];
    //   const imageArray = [];
    //   innerText.forEach(tag => carDescription.push(tag.innerText));
    //   //pgTag.forEach(tag => imageArray.push(tag.src));
      
    //   //console.log(pgTag);
    //   //console.log(innerText)
    //   resultArray = []
    //   //resultArray.push(pgTag, innerText, price);
    //   return srcs;
    // })
    //console.log('imgSrc--->', imgSrc)
    console.log(imageLinks.length);
    console.log(carDescriptions.length);
    console.log(carPrices.length);

    await browser.close();
  }) ()