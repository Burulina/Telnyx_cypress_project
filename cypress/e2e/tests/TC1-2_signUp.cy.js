/// <reference types="cypress" />
const commonMethods = require ('../pageObjects/common.methods');
const homePage = require ('../pageObjects/home.page.js');
const signUpPage = require ("../pageObjects/signUp.page");

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
  })

  it('TC1 - Should check ability to sign up without agree terms of conditions and privacy policy', () => {
    homePage.clickSingUpButton();
    cy.url().should('include', '/sign-up');
    signUpPage.getSinUpFormHeading().should('be.visible').and('contain.text', 'Create a free account');
    signUpPage.fillSignUpInput(data.valid.email, data.valid.name, data.valid.password);
    signUpPage.clickCreateAccountButton();
    signUpPage.getTermsErrorMessage().should('be.visible').and('contain.text', 'Please accept the terms and conditions');
  })

  it('TC2 - Should check ability to open sign up page after clicking "Try for free" with invalid email', () => {
    homePage.fillEmailInput(data.invalid.email);
    homePage.clickTryForFreeButton();
    cy.screenshot('Invalid_email_error_message', {capture: 'viewport'});
    cy.url().should('eq', 'https://telnyx.com/');
  })

})