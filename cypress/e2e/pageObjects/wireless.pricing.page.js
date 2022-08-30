const commonMethods = require ('./common.methods');

// Selectors
const countrySearchInput = 'input[type="search"]';
const countryListboxButton  = 'button[aria-haspopup="listbox"]';
const wirelessPricingPageTitle = 'div>h1';

class WirelessPricingPage {

    getWirelessPricingPageTitle () {
        return cy.get(wirelessPricingPageTitle);
    }

    clickCountryListboxButton() {
        commonMethods.clickDoubleElem(countryListboxButton, 0);
    }

    fillCountrySearchInput (text) {
        commonMethods.typeInput(countrySearchInput, text);
    }

}

module.exports = new WirelessPricingPage();