// Basic - Selenium Example Script
// see https://github.com/SeleniumHQ/selenium/wiki/WebDriverJs for details
// runs test against http://crossbrowsertesting.github.io/selenium_example_page.html

var webdriver = require('selenium-webdriver');
var SeleniumServer = require('selenium-webdriver/remote').SeleniumServer;
var request = require('request');
var assert = require('selenium-webdriver/testing/assert');
var remoteHub = 'http://hub.crossbrowsertesting.com:80/wd/hub';

var username = 'user@email.com'; //replace with your email address 
var authkey = '12345'; //replace with your authkey 
 
var caps = {
    name : 'Basic Example',
    browser_api_name : 'IE10', 
    os_api_name : 'Win7x64-C2', 
    screen_resolution : '1024x768',
    record_video : 'true',
    record_network : 'true',
    browserName : 'internet explorer', // <---- this needs to be the browser type in lower case: firefox, internet explorer, chrome, opera, or safari
    username : username,
    password : authkey
};

var sessionId = null;

//register general error handler
webdriver.promise.controlFlow().on('uncaughtException', webdriverErrorHandler);
 
var driver = new webdriver.Builder()
    .usingServer(remoteHub)
    .withCapabilities(caps)
    .build();

driver.get('http://crossbrowsertesting.github.io/selenium_example_page.html');
driver.getTitle().then(function(title){
    console.log('page title is ', title);
    assert(title).equals('Selenium Test Example Page');
});

driver.quit();

