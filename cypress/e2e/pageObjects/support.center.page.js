const commonMethods = require ('./common.methods');

// Selectors
const searchInput = '.search__input';
const supportCenterHeading = 'h1.header__headline';
const searchResultHeading = '.search__headline';
const searchMainTopics = 'h2.c__primary';

class SupportCenterPage {

    getSearchMainTopics () {
        return cy.get(searchMainTopics);
    }
    
    getSupportCenterHeading () {
        return cy.get(supportCenterHeading);
    }

    getSearchResultHeading () {
        return cy.get(searchResultHeading);
    }

    fillSearchInput (text) {
        commonMethods.typeInput(searchInput, text);
    }

    consoleLogSearchMainTopics() {
        cy.get(searchMainTopics).each(($el, index, $list) => {
        const text=$el.text();
        cy.log(text);
        })
    }

}

module.exports = new SupportCenterPage();