const commonMethods = require ('./common.methods');

// Selectors
const joinWaitlistButton = 'h1 ~div>div>a[href="#form"]';
const applyNowButton = 'button[type="submit"]';
const recieveEmailCheckBox = '.mktoCheckboxList #LblSubscription_Opt_In__c';
const addInfoTextForm = '#Form_Additional_Information__c';
const firstNameInput = '#FirstName';
const lastNameInput = '#LastName';
const businessEmailInput = '#Email';

class ProdStoragePage {

    fillJoinWaitlistForm (firstname, lastname, email, text) {
        commonMethods.typeInput(firstNameInput, firstname);
        commonMethods.typeInput(lastNameInput, lastname);
        commonMethods.typeInput(businessEmailInput, email);
        commonMethods.typeInput(addInfoTextForm, text);
    }
    
    clickApplyNowButton() {
        commonMethods.clickElem(applyNowButton);
    }

    clickJoinWaitlistButton() {
        commonMethods.clickElem(joinWaitlistButton);
    }

    clickRecieveEmailCheckBox (){
        commonMethods.clickElem(recieveEmailCheckBox);
    }

}

module.exports = new ProdStoragePage();