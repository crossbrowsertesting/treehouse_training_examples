var assert = require('assert');
var webdriver = require('selenium-webdriver');
const util = require('util');
//create driver object for chromedriver
var driver = new webdriver.Builder()
  .forBrowser('chrome')
  .build();
 

  function searchForGoogle() {
  //searchbar = driver.wait(webdriver.until.elementLocated(webdriver.), 500)
    driver.findElement(webdriver.By.name('qww')).then(function(webElement) {
        console.log('Element exists');
    }, function(err) {
        if (err.state && err.name === 'NoSuchElementError') {
            console.log('error found');
        } else {
            console.log('Element not found and continuing next steps');
        }
    searchbar = driver.wait(webdriver.until.elementLocated(webdriver.By.name('q')), 500)
    .then(function(searchbar) {
      searchbar.sendKeys('TeamTreehouse.com');
      searchbar.submit();
    });

    });

      }

driver.get('http://google.com')
    .then(searchForGoogle());
driver.quit()

