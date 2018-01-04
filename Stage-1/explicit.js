

var webdriver = require('selenium-webdriver');

//create driver object for chromedriver
var driver = new webdriver.Builder()
  .forBrowser('chrome')
  .build();

function searchForTreehouse() {
	searchbar = driver.wait(webdriver.until.elementLocated(webdriver.By.name('q')), 500)
		.then(function(searchbar) {
			searchbar.sendKeys('TeamTreehouse.com');
			searchbar.submit();
		});
}

function clickTreehouse() {
	clickLink = driver.wait( webdriver.until.elementLocated(webdriver.By.linkText("Start Learning at Treehouse for Free")), 1)
		.then(function(clickLink) {
			clickLink.click();
		});
}
driver.get('http://google.com')
	.then(searchForTreehouse())
	.then(clickTreehouse());

driver.quit();