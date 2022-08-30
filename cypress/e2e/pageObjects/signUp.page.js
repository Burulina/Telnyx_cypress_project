const commonMethods = require ('./common.methods');

// Selectors
const createAccountButton = 'button[type="submit"]';
const workEmailInput = '#email';
const fullNameInput = '#full_name';
const passwordInput = '#password';
const privacyPolicyLink = 'a[href="/privacy-policy"]';
const privacyPolicyHeading = 'div h1';
const sinUpFormHeading = 'h1[class*=Text]';
const termsErrorMessage = '#terms_and_conditions_error';

class SignUpPage {

    getSinUpFormHeading () {
        return cy.get(sinUpFormHeading);
    }

    getTermsErrorMessage () {
        return cy.get(termsErrorMessage);
    }

    getPrivacyPolicyHeading () {
        return cy.get(privacyPolicyHeading);
    }

    clickCreateAccountButton() {
        commonMethods.clickElemNewTab(createAccountButton);
    }

    clickPrivacyPolicyLink() {
        commonMethods.clickElemNewTab(privacyPolicyLink);
    }

    fillSignUpInput (email, name, password) {
        commonMethods.typeInput(workEmailInput, email);
        commonMethods.typeInput(fullNameInput, name);
        commonMethods.typeInput(passwordInput, password);
    }

}

module.exports = new SignUpPage();