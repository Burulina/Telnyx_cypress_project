import { CommonMethods } from "./common.methods";

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

export class HomePage extends CommonMethods {

    constructor() {
        super();
    };

    fillEmailInput(text) {
        super.typeInput(emailInput, text);
    }

    clickHomePageButton() {
        super.clickElem(homePageButton);
    }
    
    clickLogInButton() {
        super.clickDoubleElem(loginButton, 0);
    }

    clickSingUpButton() {
        super.clickDoubleElem(singUpButton, 1);
    }

    clickTalkExpertButton() {
        super.clickElem(talkExpertButton);
    }
    
    clickTryForFreeButton() {
        super.clickElem(tryForFreeButton);
    }

    clickJoinWaitlistLink() {
        super.clickElem(joinWaitlistLink);
    }

    clickLoginLink() {
        super.clickElemNewTab(loginLink);
    }

    clickSignUpLink() {
        super.clickElem(signUpLink);
    }

    clickSupportCenterLink() {
        super.clickElem(supportCenterLink);
    }

    clickWirelessPricingLink() {
        super.clickElem(wirelessPricingLink);
    }

    clickNetworkMenuItem() {
        super.clickElem(networkMenuItem);
    }


}

export const homePage = new HomePage();