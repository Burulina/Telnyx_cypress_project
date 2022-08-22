import { CommonMethods } from "./common.methods";

// Selectors
const countrySearchInput = 'input[type="search"]';
const countryListboxButton  = 'button[aria-haspopup="listbox"]';
const wirelessPricingPageTitle = 'div>h1';

export class WirelessPricingPage extends CommonMethods {

    constructor() {
        super();
    }

    clickCountryListboxButton() {
        super.clickDoubleElem(countryListboxButton, 0);
    }

    fillCountrySearchInput (text) {
        super.typeInput(countrySearchInput, text);
    }

    checkWirelessPricingPageTitle (text) {
        super.checkVisibilityContainText(wirelessPricingPageTitle, text);
    }

}

export const wirelessPricingPage = new WirelessPricingPage();