//import chromedriver
require('chromedriver');


var webdriver = require('selenium-webdriver');
var sleep = require('sleep');


//create driver object for chromedriver
var driver = new webdriver.Builder()
  .forBrowser('chrome')
  .build();

function searchForTreehouse() {
	searchbar = driver.findElement(webdriver.By.name('q'))
		.then(function(searchbar) {
			searchbar.sendKeys('TeamTreehouse.com');
			searchbar.submit();
		});
}

function clickTreehouse() {
	clickLink = driver.findElement(webdriver.By.linkText("Start Learning at Treehouse for Free"))
		.then(function(clickLink) {
			clickLink.click();
			sleep.sleep(15)//sleep for 5 seconds
		});
}
driver.get('http://google.com')
setTimeout(function() {
	searchForTreehouse();
	setTimeout(function() {
		clickTreehouse();
		setTimeout(function() {
			driver.quit();
		}, 5000)
	}, 5000);
}, 5000);