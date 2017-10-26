// Drag and Drop - Selenium Example Script
// see https://github.com/SeleniumHQ/selenium/wiki/WebDriverJs for details
// runs test against http://crossbrowsertesting.github.io/drag-and-drop.html

var webdriver = require('selenium-webdriver');
var request = require('request');
var assert = require('selenium-webdriver/testing/assert');

//register general error handler
webdriver.promise.controlFlow().on('uncaughtException', webdriverErrorHandler);

console.log('Connection to the CrossBrowserTesting remote server');

var driver = new webdriver.Chrome
            
//load your URL
driver.get('http://crossbrowsertesting.github.io/drag-and-drop.html');

//get draggable and droppable elements
var draggable = driver.findElement(webdriver.By.id("draggable"));
var droppable = driver.findElement(webdriver.By.id("droppable"));

//move draggable to droppable and release via actions
// driver.actions()
//     .mouseMove(draggable)
//     .mouseDown()
//     .mouseMove(droppable)
//     .mouseUp()
//     .perform();

//shortcut method for drag and drop
driver.actions().dragAndDrop(draggable,droppable).perform();

droppable.findElement(webdriver.By.css("p")).getText().then(function(text){
    assert(text).equalTo('Dropped!');
})

//quit the driver
driver.quit()
