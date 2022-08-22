import { CommonMethods } from "./common.methods";

// Selectors
const joinWaitlistButton = 'h1 ~div>div>a[href="#form"]';
const applyNowButton = 'button[type="submit"]';
const recieveEmailCheckBox = '.mktoCheckboxList #LblSubscription_Opt_In__c';
const addInfoTextForm = '#Form_Additional_Information__c';
const firstNameInput = '#FirstName';
const lastNameInput = '#LastName';
const businessEmailInput = '#Email';

export class ProdStoragePage extends CommonMethods {

    constructor() {
        super();
    }


    fillJoinWaitlistForm (firstname, lastname, email, text) {
        super.typeInput(firstNameInput, firstname);
        super.typeInput(lastNameInput, lastname);
        super.typeInput(businessEmailInput, email);
        super.typeInput(addInfoTextForm, text);
    }
    
    clickApplyNowButton() {
        super.clickElem(applyNowButton);
    }

    clickJoinWaitlistButton() {
        super.clickElem(joinWaitlistButton);
    }

    clickRecieveEmailCheckBox (){
        super.clickElem(recieveEmailCheckBox);
    }

}

export const prodStoragePage = new ProdStoragePage();