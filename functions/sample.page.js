import Page from './page.js';

class samplePage extends Page {
  get SignInButton() { return browser.element('//a[@class="login"]');}
  get SearchBar() { return browser.element('//input[contains(@class, "search_query")]');}
  get SignInEmailText() { return browser.element('//input[@id="email_create"]');}
  get SignInEmailSubmit() { return browser.element('//button[contains(@class,"button-medium exclusive")]');}
  get inputFirstName() { return browser.element('//input[@id="customer_firstname"]');}
  get Email() { return browser.element('//input [@id="email"]');}
  get addressFirstName() { return browser.element('//input [@id="firstname"]');}
  get addressLastName() { return browser.element('//input[@id="lastname"]');}
  get address() { return browser.element('//input[@id="address1"]');}
  get State() { return browser.element('//select[@id="id_state"]');}
  get postCode() { return browser.element('//input[@id="postcode"]');}
  get phoneNo() { return browser.element('//input[@id="phone_mobile"]');}
  get futureReference() { return browser.element('//input[@id="alias"]');}
  get addToCartButton() { return browser.element('//a[contains(@class,"ajax_add_to_cart_button btn")]');}
  get submitCreate(){return browser.element('//button[@id="SubmitCreate"]');}
  get inputLastName(){ return browser.element('//input[@id="customer_lastname"]');}
  get passWord(){return browser.element('//input[@id="passwd"]');}
  get city(){return browser.element('//input[@id="city"]');}
  get country(){return browser.element('//select[@id="id_country"]');}
  get signInSubmit(){return browser.element('//button[@id="submitAccount"]');}
  get searchButton(){return browser.element('//button[contains(@class,"button-search")]');}
  goToHome () {
    browser.url(' http://automationpractice.com');
    browser.pause(1000);
  }

  goToDeveloperGuide () {
    this.SignInButton.click();
    browser.pause(1000);
  }

  enterSearchItem () {
    this.SearchBar.setValue("shirt");
    this.searchButton.click();
    browser.pause(1000);
  }

  enterEmail(){
    this.SignInEmailText.setValue("kkll@gmail.com");
    this.submitCreate.click();
    browser.pause(1000);
  }

  enterDetail(){
    browser.pause(5000);
    this.inputFirstName.setValue("aaaa");
    this.inputLastName.setValue("lll");
    this.Email.setValue("kkll@gmail.com");
    this.passWord.setValue("jyasgd2333@@");
    this.addressFirstName.setValue("aaaa");
    this.addressLastName.setValue("LLL");
    this.address.setValue("KUFKASDUJYGK");
    this.city.setValue("vvvv");
    this.State.selectByVisibleText("Ohio");
    this.postCode.setValue("ygsddjy333");
    this.country.selectByVisibleText("United States");
    this.phoneNo.setValue("3555535553");
    this.futureReference.setValue("ssdd@gmail.com");
    this.signInSubmit.click();
    browser.pause(1000);
  }

  addToCart(){
    this.addToCartButton.click();
  }

};
export default new samplePage();
