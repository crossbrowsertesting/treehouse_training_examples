var webdriver = require('selenium-webdriver');


var driver = new webdriver.Builder()
  .forBrowser('chrome')
  .build();
//driver.manage().timeouts().implicitlyWait(10);
function elapsedTime() {

		var start = new Date().getTime();
 		driver.executeAsyncScript('window.setTimeout(arguments[arguments.length - 1], 500);').
     			then(function() {
       			console.log('Elapsed time: ' + (new Date().getTime() - start) + ' ms');
     });
}

driver.get('https://teamtreehouse.com/')
    .then(elapsedTime());

driver.quit()                                                                                