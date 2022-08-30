// Selectors
const closeCookiesButton = '[aria-label="close and deny"]';

class CommonMethods {

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

}

module.exports = new CommonMethods();


