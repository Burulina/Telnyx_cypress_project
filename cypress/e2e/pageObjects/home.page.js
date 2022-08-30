const commonMethods = require ('./common.methods');

// Selectors
const homePageButton = '#Logo-Dark_svg__Layer_1';
const loginButton = 'header a[href*="/portal.telnyx.com"]';
const singUpButton = 'header a[href="/sign-up"]';
const talkExpertButton = 'li>div>a[href="/contact-us"]';
const tryForFreeButton = 'button[type="submit"]';
const emailInput = 'input[type="email"]';
const joinWaitlistLink = 'header span a[href="/products/storage"]';
const loginLink = 'footer [href*="/portal.telnyx.com/"]';
const signUpLink = 'footer [href="/sign-up"]';
const supportCenterLink = 'audio + a[href*="/support.telnyx.com"]';
const wirelessPricingLink =  'footer a[href="/pricing/wireless-pricing"]';
const networkMenuItem = 'header span [href="/solutions/global-ip-network"]';

class HomePage {

    fillEmailInput(text) {
        commonMethods.typeInput(emailInput, text);
    }

    clickHomePageButton() {
        commonMethods.clickElem(homePageButton);
    }
    
    clickLogInButton() {
        commonMethods.clickDoubleElem(loginButton, 0);
    }

    clickSingUpButton() {
        commonMethods.clickDoubleElem(singUpButton, 1);
    }

    clickTalkExpertButton() {
        commonMethods.clickElem(talkExpertButton);
    }
    
    clickTryForFreeButton() {
        commonMethods.clickElem(tryForFreeButton);
    }

    clickJoinWaitlistLink() {
        commonMethods.clickElem(joinWaitlistLink);
    }

    clickLoginLink() {
        commonMethods.clickElemNewTab(loginLink);
    }

    clickSignUpLink() {
        commonMethods.clickElem(signUpLink);
    }

    clickSupportCenterLink() {
        commonMethods.clickElem(supportCenterLink);
    }

    clickWirelessPricingLink() {
        commonMethods.clickElem(wirelessPricingLink);
    }

    clickNetworkMenuItem() {
        commonMethods.clickElem(networkMenuItem);
    }

}

module.exports = new HomePage();