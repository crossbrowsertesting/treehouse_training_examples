var webdriver = require('selenium-webdriver');

var driver = new webdriver.Builder()
  .forBrowser('chrome')
  .build();


function searchForTreehouse() {
	console.log("ele1") ;
webdriver.By.js(function(){
    var ele1 = document.getElementById('username');
    var ele2 = document.getElementById('password');
    var val = ele1.compareDocumentPosition(ele2);
	console.log("ele1") ;
    if(val === 4) {
    	console.log(ele1) ;
    }
    else {
    	console.log(ele2) ;
    }
},1);
	console.log("ele1") ;
}
  driver.get('http://crossbrowsertesting.github.io/login-form.html')
  		driver.quit() 
  		.then(searchForTreehouse());


/*

function searchForTreehouse() {
            var element1 = "/html/body/div/div/div/div/form/p[2]/small/strong[1]"
        	webdriver.By.js("document.evaluate(element1, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue.innerHTML;", element1)

		}	

  driver.get('http://crossbrowsertesting.github.io/selenium_example_page.html?text=&select=&radio=&textarea=')
  		.then(searchForTreehouse());

driver.quit()*/