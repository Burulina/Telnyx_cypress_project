/// <reference types="cypress" />
const commonMethods = require ('../pageObjects/common.methods');
const homePage = require ('../pageObjects/home.page.js');

describe('telnyx.com', () => {

  before(() => {
    cy.visit('https://telnyx.com/');
    commonMethods.closeCookiesForm();
    cy.url().should('eq', 'https://telnyx.com/');
  });

  it('TC9 - Should test functionality of HomePage button in header', () => {     
    homePage.clickTalkExpertButton();
    cy.url().should('include', '/contact-us');
    homePage.clickHomePageButton();
    cy.url().should('eq', 'https://telnyx.com/');
    homePage.clickNetworkMenuItem();
    cy.url().should('include', '/solutions/global-ip-network');
    homePage.clickHomePageButton();
    cy.url().should('eq', 'https://telnyx.com/');    
  })  

})