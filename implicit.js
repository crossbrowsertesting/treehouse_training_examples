//import chromedriver
require('chromedriver');


var webdriver = require('selenium-webdriver');

//create driver object for chromedriver
var driver = new webdriver.Builder()
  .forBrowser('chrome')
  .build();

driver.manage().timeouts().implicitlyWait(10);

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
		});
}
driver.get('http://google.com')
	.then(searchForTreehouse())
	.then(clickTreehouse());

driver.quit()

