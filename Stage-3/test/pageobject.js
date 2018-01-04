var webdriver = require('selenium-webdriver');

pageobjects = function pageobjects(driver) {
    this.driver = driver;
    this.url = 'http://www.google.com';
    this.Selector = webdriver.By.name('q');
};
 
pageobjects.prototype.visit = function() {
    this.driver.get(this.url);
    return webdriver.promise.fulfilled(true);
};
 
pageobjects.prototype.ContainerPresent = function() {
    //var d = webdriver.promise.defer();
    this.driver.wait(webdriver.until.elementLocated(webdriver.By.name('q')), 50000)
    //driver.wait(until.elementLocated(webdriver.By.name('q')), timeout);
    //this.driver.isElementPresent(this.Selector).then(function(present) {
        .then(function(present) {
        d.fulfill(present);
    });
    return d.promise;
};
 
module.exports = pageobjects;