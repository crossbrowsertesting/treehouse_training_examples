
var webdriver = require('selenium-webdriver');
const util = require('util');
//create driver object for chromedriver
var driver = new webdriver.Builder()
  .forBrowser('chrome')
  .build();
 
function alert() {
      	element = driver.findElement(webdriver.By.css("body > div > div:nth-child(12) > button")).click()
			.then(function(element){
            var alert = driver.switchTo().alert();
            alert.getText().then(function(text) {
  			console.log('alert text: ' + text);
  			alert.accept();
			});
             
    });
}

driver.get('http://crossbrowsertesting.github.io/selenium_example_page.html?text=&select=&radio=&textarea=')
    .then(alert());
driver.quit()

