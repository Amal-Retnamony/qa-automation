var webdriverio = require('webdriverio');
var options = {
    desiredCapabilities: {
        browserName: 'firefox'
    }
};

webdriverio
    .remote(options)
    .init()
    .url('http://automationpractice.com/index.php')
    .getTitle().then(function(title) {
        console.log('Title was: ' + title);
    })
    .end()
    //SearchBar.click();
    /*
    get SearchBar() { return browser.element('//input[contains(@class, "search_query")]');}
    get SearchButton() { return browser.element('//button[contains(@class,"button-search")]');}
    get SignInButton() { return browser.element('//a[@class="login"]');}
    get SignInEmailText() { return browser.element('//input[contains(@class,"is_required validate")]');}
    get SignInEmailSubmit() { return browser.element('//button[contains(@class,"button-medium exclusive")]');}
    get inputFirstName() { return browser.element('//input [contains(@class,"validate form-control")]');}
    get Email() { return browser.element('//input [@id="email"]');}
    get password() { return browser.element('//input [@id="passwd"]');}
    get addressFirstName() { return browser.element('///input [@id="firstname"]');}
    get addressLastName() { return browser.element('//input[@id="lastname"]');}
    get address() { return browser.element('///input[@id="address1"]');}
    get city() { return browser.element('//input[@id="city"]');}
    get State() { return browser.element('//select[@id="id_state"]');}
    get postCode() { return browser.element('//input[@id="postcode"]');}
    get selectCountry() { return browser.element('//select[@id="id_country"');}
    get phoneNo() { return browser.element('//input[@id="phone_mobile"]');}
    get futureReference() { return browser.element('//input[@id="alias"]');}
    get addToCartButton() { return browser.element('//a[contains(@class,"ajax_add_to_cart_button btn")]');}
    */

    .catch(function(err) {
        console.log(err);
    });
