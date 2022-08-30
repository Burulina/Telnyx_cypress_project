const commonMethods = require ('./common.methods');

// Selectors
const continueButton = '[class*="SSOForm__LoginButton"]';
const loginButton = '[class*="LoginForm__LoginButton"]';
const singleSignOnButton = 'button[name="sso"]';
const businessEmailInput = '[aria-label="loginForm"] input[name="email"]';
const businessNameInput = 'input[name="short_name"]';
const companyEmailInput = 'input[name="email"][placeholder]';
const passwordInput = 'input[name="password"]';
const companyNameEmailLink = '[class*="SSOForm__ButtonLink"]';
const loginErrorMessage = 'span[class*="Message__MessageCopy"]';
const signInTitle = '[data-testid="login.signin.title"]';

class SignInPage {
    
    getSignInTitle () {
        return cy.get(signInTitle);
    }

    getLoginErrorMessage () {
        return cy.get(loginErrorMessage);
    }

    fillLoginInput (email, password) {
        commonMethods.typeInput(businessEmailInput, email);
        commonMethods.typeInput(passwordInput, password);
    }
    
    fillBusinessNameInput(name) {
        commonMethods.typeInput(businessNameInput, name);
    }

    fillCompanyEmailInput (email) {
        commonMethods.typeInput(companyEmailInput, email);
    }

    clickLoginButton() {
        commonMethods.clickElem(loginButton);
    }

    clickSingleSignOnButton() {
        commonMethods.clickElem(singleSignOnButton);
    }

    clickContinueButton() {
        commonMethods.clickElem(continueButton);
    }

    clickCompanyNameEmailLink() {
        commonMethods.clickElem(companyNameEmailLink);
    }

}

module.exports = new SignInPage();