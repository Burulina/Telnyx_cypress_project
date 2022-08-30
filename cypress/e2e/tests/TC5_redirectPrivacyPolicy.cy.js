/// <reference types="cypress" />
const commonMethods = require ('../pageObjects/common.methods');
const homePage = require ('../pageObjects/home.page.js');
const signUpPage = require ("../pageObjects/signUp.page");

describe('telnyx.com', () => {
  
  before(() => {
    cy.visit('https://telnyx.com/');
    commonMethods.closeCookiesForm();
    cy.url().should('eq', 'https://telnyx.com/');
  })

  it('TC5 - Should check redirection to Privacy Policy information from Sign Up page', () => {   
    homePage.clickSignUpLink();
    cy.url().should('include', '/sign-up');
    signUpPage.getSinUpFormHeading().should('be.visible').and('contain.text', 'Create a free account');
    signUpPage.clickPrivacyPolicyLink();
    cy.url().should('include', '/privacy-policy');
    commonMethods.closeCookiesForm();
    signUpPage.getPrivacyPolicyHeading().should('be.visible').and('contain.text', 'Privacy Policy');
  })

})