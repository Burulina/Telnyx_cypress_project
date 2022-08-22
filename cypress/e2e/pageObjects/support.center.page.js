import { CommonMethods } from "./common.methods";

// Selectors
const searchInput = '.search__input';
const supportCenterHeading = 'h1.header__headline';
const searchResultHeading = '.search__headline';
const searchMainTopics = 'h2.c__primary';

export class SupportCenterPage extends CommonMethods {

    constructor() {
        super();
    }

    checkSupportCenterHeading (text){
        super.checkVisibilityContainText(supportCenterHeading, text);
    }

    checkSearchResult (text) {
        super.checkVisibilityContainText(searchResultHeading, text);
    }

    fillSearchInput (text) {
        super.typeInput(searchInput, text);
    }

    checkSearchMainTopics() {
        cy.get(`${searchMainTopics}:visible`).should('have.length',15);
        cy.get(searchMainTopics).each(($el, index, $list) => {
        const text=$el.text();
        cy.log(text);
        })
    }

}

export const supportCenterPage = new SupportCenterPage();