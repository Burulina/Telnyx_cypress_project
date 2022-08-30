/// <reference types="cypress" />
const commonMethods = require ('../pageObjects/common.methods');
const homePage = require ('../pageObjects/home.page.js');
const supportCenterPage = require ("../pageObjects/support.center.page");

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
    homePage.clickSupportCenterLink();
    cy.url().should('include', '/support.telnyx.com');
    supportCenterPage.getSupportCenterHeading().should('be.visible').and('contain.text', 'Support Center');
  })

  it('TC7 - Should Check search topics in main page of support center telnyx', () => {
    supportCenterPage.getSearchMainTopics().should('be.visible').and('have.length',15);
    supportCenterPage.consoleLogSearchMainTopics();
  })

  it('TC8 - Should check searching in support center telnyx', () => {
    supportCenterPage.fillSearchInput(data.search + '{enter}');
    cy.url().should('include', data.search);
    supportCenterPage.getSearchResultHeading().should('be.visible').and('contain.text', data.search);
  })

})