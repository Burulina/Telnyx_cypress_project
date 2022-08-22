/// <reference types="cypress" />
import { commonMethods } from "../pageObjects/common.methods";
import { homePage } from "../pageObjects/home.page.js";
import { signInPage } from "../pageObjects/signIn.page";
import { signUpPage } from "../pageObjects/signUp.page";
import { prodStoragePage } from "../pageObjects/prod.storage.page";
import { supportCenterPage } from "../pageObjects/support.center.page";
import { wirelessPricingPage } from "../pageObjects/wireless.pricing.page";

describe('telnyx.com', () => {
  let data;
  before(() => {
    cy.fixture('dataSet').then((fData) => {
      data = fData;
    });
  });
  
  beforeEach(() => {
    cy.visit('https://telnyx.com/');
    commonMethods.closeCookiesForm();
    commonMethods.checkBaseUrl();
  })

  it('TC1 - Check ability to sign up without agree terms of conditions and privacy policy', () => {
    homePage.clickSingUpButton();
    signUpPage.checkUrlInclude('/sign-up');
    signUpPage.checkSinUpFormHeading('Create a free account');
    signUpPage.fillSignUpInput(data.valid.email, data.valid.name, data.valid.password);
    signUpPage.clickCreateAccountButton();
    signUpPage.checkTermsErrorMessage('Please accept the terms and conditions');  
  })

  it('TC2 - Check ability to open sign up page after clicking "Try for free" with invalid email', () => {
    homePage.fillEmailInput(data.invalid.email);
    homePage.clickTryForFreeButton();
    cy.screenshot('Invalid_email_error_message', {capture: 'viewport'});
    commonMethods.checkBaseUrl();
  })

  it('TC3 - Check ability to Log In with not exist credentials after redirection from  home page header', () => {
    homePage.clickLogInButton();
    signInPage.checkUrlInclude ('/sign-in');
    signInPage.checkSignInTitle('Log in');
    signInPage.fillLoginInput(data.valid.email, data.valid.password);
    signInPage.clickLoginButton();
    signInPage.checkLoginErrorMessage('That email and password combination is not valid, or your browser could not be authenticated via recaptcha. Please try again.');
  })

  it('TC4 - Check ability to Single Sign-on with not exist credentials after redirection from home page footer', () => {   
    homePage.clickLoginLink();
    signInPage.checkUrlInclude ('/sign-in');
    signInPage.checkSignInTitle('Log in');
    signInPage.clickSingleSignOnButton();
    signInPage.fillCompanyEmailInput(data.valid.email)
    signInPage.clickContinueButton();
    signInPage.checkLoginErrorMessage('The requested resource or URL could not be found.');
    signInPage.clickCompanyNameEmailLink();
    signInPage.fillBusinessNameInput(data.valid.company);
    signInPage.clickContinueButton();
    signInPage.checkLoginErrorMessage('The requested resource or URL could not be found.');
  })

  it('TC5 - Check redirection to Privacy Police information from Sign Up page', () => {   
    homePage.clickSignUpLink();
    signUpPage.checkUrlInclude ('/sign-up');
    signUpPage.checkSinUpFormHeading('Create a free account');
    signUpPage.clickPrivacyPolicyLink();
    signUpPage.checkUrlInclude ('/privacy-policy');
    commonMethods.closeCookiesForm();
    signUpPage.checkPrivacyPolicyHeading('Privacy Policy');
  })

  it('TC6 - Check ability to join waitlist for Telnyx storage after redirection from home page', () => {
    homePage.clickJoinWaitlistLink();
    prodStoragePage.checkUrlInclude ('/products/storage');
    prodStoragePage.clickJoinWaitlistButton();
    prodStoragePage.checkUrlInclude ('/products/storage#form');
    prodStoragePage.fillJoinWaitlistForm(data.valid.name, data.valid.lastname, data.valid.email, data.valid.company);
    prodStoragePage.clickRecieveEmailCheckBox();
    // prodStoragePage.clickApplyNowButton(); - commented to avoid spamming the site
  })

  it('TC7 - Check search topics in main page of support center telnyx', () => {
    homePage.clickSupportCenterLink();
    supportCenterPage.checkSearchMainTopics();
  })

  it('TC8 - Search in support center telnyx', () => {
    homePage.clickSupportCenterLink();
    supportCenterPage.checkUrlInclude('/support.telnyx.com');
    supportCenterPage.checkSupportCenterHeading('Support Center');
    supportCenterPage.fillSearchInput(data.search);
    supportCenterPage.fillSearchInput('{enter}');
    supportCenterPage.checkUrlInclude(data.search);
    supportCenterPage.checkSearchResult(data.search);
  })  

  it('TC9 - Test functionality of HomePage button in header', () => {     
    homePage.clickTalkExpertButton();
    homePage.checkUrlInclude ('/contact-us');
    homePage.clickHomePageButton();
    commonMethods.checkBaseUrl();
    homePage.clickNetworkMenuItem();
    homePage.checkUrlInclude ('/solutions/global-ip-network');
    homePage.clickHomePageButton();
    commonMethods.checkBaseUrl();     
  })  

  it('TC10 - Check ability to change country on wireless pricing page', () => {     
    homePage.clickWirelessPricingLink();
    wirelessPricingPage.checkUrlInclude('/pricing/wireless-pricing');
    wirelessPricingPage.clickCountryListboxButton();
    wirelessPricingPage.fillCountrySearchInput('Ukraine{enter}');
    wirelessPricingPage.checkUrlInclude('/pricing/wireless-pricing/ua');
    wirelessPricingPage.checkWirelessPricingPageTitle('Ukraine');  
  }) 


})