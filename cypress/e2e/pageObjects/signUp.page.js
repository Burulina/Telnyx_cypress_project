import { CommonMethods } from "./common.methods";

// Selectors
const createAccountButton = 'button[type="submit"]';
const workEmailInput = '#email';
const fullNameInput = '#full_name';
const passwordInput = '#password';
const privacyPolicyLink = 'a[href="/privacy-policy"]';
const privacyPolicyHeading = 'div h1';
const sinUpFormHeading = 'h1[class*=Text]';
const termsErrorMessage = '#terms_and_conditions_error';

export class SignUpPage extends CommonMethods {

    constructor() {
        super();
    }

    clickCreateAccountButton() {
        super.clickElemNewTab(createAccountButton);
    }

    checkPrivacyPolicyHeading (text){
        super.checkVisibilityContainText(privacyPolicyHeading, text);
    }

    checkSinUpFormHeading (text){
        super.checkVisibilityContainText(sinUpFormHeading, text);
    }


    checkTermsErrorMessage (text){
        super.checkVisibilityContainText(termsErrorMessage, text);
    }

    clickPrivacyPolicyLink() {
        super.clickElemNewTab(privacyPolicyLink);
    }

    fillSignUpInput (email, name, password) {
        super.typeInput(workEmailInput, email);
        super.typeInput(fullNameInput, name);
        super.typeInput(passwordInput, password);
    }


}

export const signUpPage = new SignUpPage();