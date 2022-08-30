/// <reference types="cypress" />
const commonMethods = require ('../pageObjects/common.methods');
const homePage = require ('../pageObjects/home.page.js');
const prodStoragePage = require ("../pageObjects/prod.storage.page");

describe('telnyx.com', () => {
  let data;
  before(() => {
    cy.fixture('dataSet').then((fData) => {
      data = fData;
    });
    cy.visit('https://telnyx.com/');
    commonMethods.closeCookiesForm();
    cy.url().should('eq', 'https://telnyx.com/');
  });

  it('TC6 - Should check ability to join waitlist for Telnyx storage after redirection from home page', () => {
    homePage.clickJoinWaitlistLink();
    cy.url().should('include', '/products/storage');
    prodStoragePage.clickJoinWaitlistButton();
    cy.url().should('include', '/products/storage#form');
    prodStoragePage.fillJoinWaitlistForm(data.valid.name, data.valid.lastname, data.valid.email, data.valid.company);
    prodStoragePage.clickRecieveEmailCheckBox();
    // prodStoragePage.clickApplyNowButton(); - commented to avoid spamming the site
  })

})