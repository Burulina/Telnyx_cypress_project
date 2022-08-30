/// <reference types="cypress" />
const commonMethods = require ('../pageObjects/common.methods');
const homePage = require ('../pageObjects/home.page.js');
const wirelessPricingPage = require ("../pageObjects/wireless.pricing.page");

describe('telnyx.com', () => {
  
  before(() => {
    cy.visit('https://telnyx.com/');
    commonMethods.closeCookiesForm();
    cy.url().should('eq', 'https://telnyx.com/');
  })

  it('TC10 - Should check ability to change country on wireless pricing page', () => {     
    homePage.clickWirelessPricingLink();
    cy.url().should('include', '/pricing/wireless-pricing');
    wirelessPricingPage.clickCountryListboxButton();
    wirelessPricingPage.fillCountrySearchInput('Ukraine{enter}');
    cy.url().should('include', '/pricing/wireless-pricing/ua');
    wirelessPricingPage.getWirelessPricingPageTitle().should('be.visible').and('contain.text', 'Ukraine');
  }) 

})