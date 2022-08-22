// Selectors
const closeCookiesButton = '[aria-label="close and deny"]';
const baseUrl = 'https://telnyx.com/';

export class CommonMethods {

    constructor () {

    }

    closeCookiesForm () {
        cy.get("body").then(($body) => {
            if ($body.find(closeCookiesButton).length > 0) {
                this.clickElem(closeCookiesButton);
            }
          });
       
    }

    clickElem (elem) {
        cy.get(elem).click();
    }

    clickDoubleElem (elem, num) {
        cy.get(elem).eq(num).click();
    }

    clickElemNewTab (elem) {
        cy.get(elem).invoke('removeAttr', 'target').click();
    }

    typeInput (elem, text) {
        cy.get(elem).type(text);
    }

    checkVisibilityContainText (elem, text){
        cy.get(elem).should('be.visible').and('contain.text', text);
    }

    checkUrlInclude (urlValue){
        cy.url().should('include', urlValue);
    }

    checkBaseUrl (){
        cy.url().should('eq', baseUrl);
    }

}

export const commonMethods = new CommonMethods();


