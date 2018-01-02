
var webdriver = require('selenium-webdriver');
const util = require('util');
//create driver object for chromedriver
var driver = new webdriver.Builder()
  .forBrowser('chrome')
  .build();
 
function dropable() {
      	driver.findElement(webdriver.By.id("dropdown")).click()
			.then(function(element){
             driver.findElement(webdriver.By.css("#dropdown > option:nth-child(3)")).click()
             element2 = driver.findElement(webdriver.By.id("submitbtn")).click();
             
    });
}

driver.get('http://crossbrowsertesting.github.io/selenium_example_page.html?text=&select=&radio=&textarea=')
    .then(dropable());
driver.quit()

