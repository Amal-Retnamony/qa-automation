import Page from './page.js';

class samplePage extends Page {
  get signInButton() { return browser.element('//a[@class="login"]');}
  get searchBar() { return browser.element('//input[contains(@class, "search_query")]');}
  get signInEmailText() { return browser.element('//input[@id="email_create"]');}
  get signInEmailSubmit() { return browser.element('//button[contains(@class,"button-medium exclusive")]');}
  get inputFirstName() { return browser.element('//input[@id="customer_firstname"]');}
  get email() { return browser.element('//input [@id="email"]');}
  get addressFirstName() { return browser.element('//input [@id="firstname"]');}
  get addressLastName() { return browser.element('//input[@id="lastname"]');}
  get address() { return browser.element('//input[@id="address1"]');}
  get state() { return browser.element('//select[@id="id_state"]');}
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
  get proceedToCheckout(){return browser.element('//a[@class="btn btn-default button button-medium"]');}
  get proceedToCheckout2(){return browser.element('//a[@class="button btn btn-default standard-checkout button-medium"]');}
  get proceedToCheckout3(){return browser.element('//button[@class="button btn btn-default button-medium"]');}
  get proceedToCheckout4(){return browser.element('//button[@class="button btn btn-default standard-checkout button-medium"]');}
  get declaration(){return browser.element('//input[@type="checkbox"]');}
  //button[@class="button btn btn-default standard-checkout button-medium"]
  goToHome () {
    browser.url(' http://automationpractice.com');
    browser.pause(1000);
  }

  goToDeveloperGuide () {
    this.signInButton.click();
    browser.pause(1000);
  }

  enterSearchItem () {
    this.searchBar.setValue("shirt");
    this.searchButton.click();
    browser.pause(1000);
  }

  enterEmail(){
    this.signInEmailText.setValue("kklleerrggggrr44@gmail.com");
    this.submitCreate.click();
    browser.pause(1000);
  }

  enterDetail(){
    browser.pause(5000);
    this.inputFirstName.setValue("aaaa");
    this.inputLastName.setValue("lll");
    this.email.setValue("kklleerrggggrr44@gmail.com");
    this.passWord.setValue("jyasgd2333@@");
    this.addressFirstName.setValue("aaaa");
    this.addressLastName.setValue("LLL");
    this.address.setValue("KUFKASDUJYGK");
    this.city.setValue("vvvv");
    this.state.selectByVisibleText("Ohio");
    this.postCode.setValue("88333");
    this.country.selectByVisibleText("United States");
    this.phoneNo.setValue("3555535553");
    this.futureReference.setValue("kklleerrggggrr44@gmail.com");
    this.signInSubmit.click();
    browser.pause(1000);
  }

  addToCart(){
    this.addToCartButton.click();
  }

  proccedToPayment(){
    browser.pause(3000);
    this.proceedToCheckout.click();
    this.proceedToCheckout2.click();
    this.proceedToCheckout3.click();
    this.declaration.click();
    this.proceedToCheckout4.click();
  }

};
export default new samplePage();
