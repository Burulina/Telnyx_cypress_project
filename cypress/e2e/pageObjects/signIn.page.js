import { CommonMethods } from "./common.methods";

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

export class SignInPage extends CommonMethods {

    constructor() {
        super();
    }
    
    fillLoginInput (email, password) {
        super.typeInput(businessEmailInput, email);
        super.typeInput(passwordInput, password);
    }
    
    fillBusinessNameInput(name) {
        super.typeInput(businessNameInput, name);
    }

    fillCompanyEmailInput (email) {
        super.typeInput(companyEmailInput, email);
    }

    checkSignInTitle (text){
        super.checkVisibilityContainText(signInTitle, text);
    }

    checkLoginErrorMessage (text){
        super.checkVisibilityContainText(loginErrorMessage, text);
    }

    clickLoginButton() {
        super.clickElem(loginButton);
    }

    clickSingleSignOnButton() {
        super.clickElem(singleSignOnButton);
    }

    clickContinueButton() {
        super.clickElem(continueButton);
    }

    clickCompanyNameEmailLink() {
        super.clickElem(companyNameEmailLink);
    }

}

export const signInPage = new SignInPage();