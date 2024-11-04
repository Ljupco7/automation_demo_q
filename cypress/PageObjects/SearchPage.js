class SearchPage
{

    searchInputField()
    {
        cy.get("#search_query_top").type("blouse")
        cy.contains('button', 'Search').click();

    }

    

}


export default SearchPage;