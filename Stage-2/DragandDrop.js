// Drag and Drop - Selenium Example Script
// see https://github.com/SeleniumHQ/selenium/wiki/WebDriverJs for details
// runs test against http://crossbrowsertesting.github.io/drag-and-drop.html

var webdriver = require('selenium-webdriver');
var assert = require('selenium-webdriver/testing/assert');
var droppable
var draggable
var driver = new webdriver.Builder()
  .forBrowser('chrome')
  .build();

function draggingAndDropiing() {
    draggable = driver.findElement(webdriver.By.id("draggable"))
    droppable = driver.findElement(webdriver.By.id("droppable"))
    driver.actions().dragAndDrop(draggable,droppable).perform();
 
}
/*
//move draggable to droppable and release via actions
function draggingAndDropiing() {
    draggable = driver.wait(webdriver.until.elementLocated(webdriver.By.id("draggable"), 500))
    droppable = driver.wait(webdriver.until.elementLocated(webdriver.By.id("droppable"), 500))  
    driver.actions()
     .mouseMove(draggable)
     .mouseDown()
     .mouseMove(droppable)
     .mouseUp()
     .perform();

}
 */
function dropable() {
        dropped = droppable.findElement(webdriver.By.css("p")).getText()
             .then(function(dropped){
                assert(dropped).equalTo('Dropped!');
    });
}

driver.get('http://crossbrowsertesting.github.io/drag-and-drop.html')
    .then(draggingAndDropiing())
    .then(dropable());

driver.quit()









