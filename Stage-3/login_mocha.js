var webdriver = require('selenium-webdriver');
var request = require('request');
var assert = require('chai').assert;


describe("Login form", function(){
    //create driver object for chromedriver
    var driver = new webdriver.Builder()
      .forBrowser('chrome')
      .build();
    // set the timeout for each test in this block to 5 minutes
    this.timeout(5 * 1000 * 60);

    // Create the webdriver object on the block level so that it can be accessed by the tests below

    // This function runs before each "it" block below
    // Here, it resets the driver back to the correct page.
    // This is also where we would reset cookies and other browser data we don't want to 
    // persist between test blocks
    beforeEach(function setupWebdriver(done){
        driver.get("http://crossbrowsertesting.github.io/login-form.html").then( done ) 
    });

    // Each "it" block describes one test scenario
    // The first argument is documentation for the test
    it("rejects bad login credentials", function(done){
        // Enter username
        var username = driver.findElement(webdriver.By.id("username"));
        username.click()
        .then(function(){username.sendKeys("username"); } )

        // Enter password
        var password = driver.findElement(webdriver.By.id("password"));
        password.click()
        .then(function(){password.sendKeys("password"); } )

        // Click "Login"
        driver.findElement(webdriver.By.css("div.form-actions>button")).click()

        // Check that the login was rejected
        .then(function(){
            return driver.wait(webdriver.until.elementLocated(webdriver.By.css(".alert")), 5000)
        })
        .then(function(element){
            return element.getText();
        })
        .then(function(text){
            assert.deepEqual( text,  "Username or password is incorrect" );
        })
        .then(done);

    });

    it("accepts good login credentials", function(done){

        var username = driver.findElement(webdriver.By.id("username"));
        username.click()
        .then(function(){username.sendKeys("tester@crossbrowsertesting.com"); } )

        var password = driver.findElement(webdriver.By.id("password"));
        password.click()
        .then(function(){password.sendKeys("test123"); } )

        driver.findElement(webdriver.By.css("div.form-actions>button")).click()

        .then(function(){
            return driver.wait(webdriver.until.elementLocated(webdriver.By.css("#logged-in-message > h2")), 5000)
        })
        .then(function(element){
            return element.getText();
        })
        .then(function(text){
            assert.deepEqual(text, "Welcome tester@crossbrowsertesting.com");
        })
        .then(done);
    });

    // The after block is run after all "it" blocks finish.
    // If driver.quit() isn't called, the session will remain open until the default 10 minute timeout is reached.
    after(function quitWebdriver(done){
        driver.quit()
        .then(done);
    });
});