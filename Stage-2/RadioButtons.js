
var searchbar;

var webdriver = require('selenium-webdriver');

//create driver object for chromedriver
var driver = new webdriver.Builder()
  .forBrowser('chrome')
  .build();



function radioButton() {
	searchbar = driver.findElement(webdriver.By.css('#myform > input[type="radio"]:nth-child(7)')).click();
	
	driver.findElement(webdriver.By.id("submitbtn")).click();					
	
	}
driver.get('http://crossbrowsertesting.github.io/selenium_example_page.html?text=&select=&radio=&textarea=')
	.then(radioButton());

driver.quit()
