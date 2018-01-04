var pageobjects = require('./pageobject.js');
var test = require('selenium-webdriver/testing');
var webdriver = require('selenium-webdriver');
var assert = require('chai')
    var driver = new webdriver.Builder()
      .forBrowser('chrome')
      .build();

test.it('shows a container', function(done) {
    var PageObjects = new pageobjects(driver);
    setTimeout(function() {
    PageObjects.visit();
    driver.quit() 
    done();
    })

   /* PageObjects.ContainerPresent().then(function(present) {
        assert.equal(present, true, "Quote container not displayed");
        done();
    });*/
});
 
