/// <reference types="cypress" />
const commonMethods = require ('../pageObjects/common.methods');
const homePage = require ('../pageObjects/home.page.js');
const signInPage = require ("../pageObjects/signIn.page");

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
    cy.url().should('eq', 'https://telnyx.com/');
    homePage.clickLogInButton();
    cy.url().should('include', '/sign-in');
    signInPage.getSignInTitle().should('be.visible').and('contain.text', 'Log in');

  })

  it('TC3 - Should check ability to Log In with not exist credentials after redirection from  home page header', () => {
    signInPage.fillLoginInput(data.valid.email, data.valid.password);
    signInPage.clickLoginButton();
    signInPage.getLoginErrorMessage().should('be.visible').and('contain.text', 'That email and password combination is not valid, or your browser could not be authenticated via recaptcha. Please try again.');
  })

  it('TC4 - Should check ability to Single Sign-on with not exist credentials after redirection from home page footer', () => {   
    signInPage.clickSingleSignOnButton();
    signInPage.fillCompanyEmailInput(data.valid.email);
    signInPage.clickContinueButton();
    signInPage.getLoginErrorMessage().should('be.visible').and('contain.text', 'The requested resource or URL could not be found.');
    signInPage.clickCompanyNameEmailLink();
    signInPage.fillBusinessNameInput(data.valid.company);
    signInPage.clickContinueButton();
    signInPage.getLoginErrorMessage().should('be.visible').and('contain.text', 'The requested resource or URL could not be found.');
  })

})