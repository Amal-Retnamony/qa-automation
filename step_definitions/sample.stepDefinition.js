import samplePage from '../functions/sample.page.js';
import { Given, When, Then } from 'cucumber';

  Given(/^User goes to store Home page$/, () => {
    samplePage.goToHome();
  });

  When(/^User click the sign in button$/, () => {
    samplePage.goToDeveloperGuide();
  });

  When(/^User give email$/, () => {
    samplePage.enterEmail();
  });

  When(/^user enters the details$/, () => {
    samplePage.enterDetail();
  });

  When(/^user goes to search bar$/, () => {
    samplePage.enterSearchItem();
  });


  Then(/^user select item$/, () => {
    samplePage.addToCart();
  });

  Then(/^user proceeding to payment$/, () => {
    samplePage.proccedToPayment();
  });
