var assert = require('assert');
var webdriver = require('selenium-webdriver');
const util = require('util');
//create driver object for chromedriver
var driver = new webdriver.Builder()
  .forBrowser('chrome')
  .build();
 

  function searchForTreehouse() {
  searchbar = driver.wait(webdriver.until.elementLocated(webdriver.By.name('q')), 500)
    .then(function(searchbar) {
      searchbar.sendKeys('TeamTreehouse.com');
      searchbar.submit();
      //  title = driver.getTitle();
      //get the page title
      driver.getTitle().then(function(title){
          console.log('page title is ', title)
      try{
        assert.equal("TeaeemTreehouse.com - Google Search", title, ["hey"])
        console.log("Strings are equal");
      }catch (ERR){
        console.log("Strings are not equal");
      }

      });
          });
      }


driver.get('http://google.com')
    .then(searchForTreehouse());
driver.quit()

