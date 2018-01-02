
var webdriver = require('selenium-webdriver');
const util = require('util');
//create driver object for chromedriver
var driver = new webdriver.Builder()
  .forBrowser('chrome')
  .build();
 
function alert() {
      	element = driver.findElement(webdriver.By.css("#pop-up-page > button:nth-child(2)")).click()
      	driver.findElement(webdriver.By.id("closepopup")).click()
}

driver.get('http://crossbrowsertesting.github.io/selenium_example_page.html?text=&select=&radio=&textarea=')
    .then(alert());
driver.quit()

