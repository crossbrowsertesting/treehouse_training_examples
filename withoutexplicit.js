
var webdriver = require('selenium-webdriver');

//create driver object for chromedriver
var driver = new webdriver.Builder()
  .forBrowser('chrome')
  .build();

function enterUsername(){
     //find checkout and click it 
    username = driver.findElement(webdriver.By.id("username"))
        .then(function(username){
            username.sendKeys("tester@crossbrowsertesting.com");

        });
}

function enterPassword(){
     //find checkout and click it 
    password = driver.findElement(webdriver.By.xpath("//*[@type=\"password\"]"))
        .then(function(password){
            password.sendKeys("test123");

        });
}


function clickSubmit() {
    clickButton = driver.findElement(webdriver.By.css("button[type=submit]"))
        .then(function(clickButton) {
            clickButton.click();
        });
}


function waitForMessage(){
    //loginMessage = driver.wait(webdriver.until.elementLocated(webdriver.By.id("logged-in-message")), 10000);
    //command without an wait, which fails the test
    loginMessage = driver.findElement(webdriver.By.id("logged-in-message"));
}
//wait on logged in message

//load your URL
driver.get('http://crossbrowsertesting.github.io/login-form.html')
    .then(enterUsername())
    .then(enterPassword())
    .then(clickSubmit())
    .then(waitForMessage());
    
//quit the driver
driver.quit()
