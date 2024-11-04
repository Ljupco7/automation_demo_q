import SearchPage from "../PageObjects/SearchPage"

const search_page = new SearchPage();

describe('Search Button Test', () => {
    before(() => {
        cy.visit('http://www.automationpractice.pl/index.php');

    });

    it('should find and click the search button', () => {

        search_page.searchInputField()


    });
});