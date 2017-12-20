
var webdriver = require('selenium-webdriver');

//create driver object for chromedriver
var driver = new webdriver.Builder()
  .forBrowser('chrome')
  .build();

console.log("before waits")

console.log("after waits")

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
    //driver.manage().timeouts().implicitlyWait(20);
    console.log("after waits2")
    loginMessage = driver.findElement(webdriver.By.id("logged-in-message"));
}

//driver.manage().timeouts().implicitlyWait(20000)
    //.then(driver.get('http://crossbrowsertesting.github.io/login-form.html'))
  //Comment the the below line and uncomment above two to see it actually works with implicit waits
    driver.get('http://crossbrowsertesting.github.io/login-form.html')
    .then(enterUsername())
    .then(enterPassword())
    .then(clickSubmit()) 

    .then(waitForMessage());

    
//quit the driver
driver.quit()
