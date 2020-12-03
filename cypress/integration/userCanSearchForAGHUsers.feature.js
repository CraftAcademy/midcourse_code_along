describe('User can search for Github users', () => {
    describe('by entering of search value in input field and clicking the button', () => {
        beforeEach(() => {
            cy.server()
            cy.route({
                url: "http://api.github.com/search/users?q=barack",
                method: "GET",
                response: "fixture:search_for_barack.json"

        })
            cy.visit('/')
            cy.get("[data-cy='search_input']").type('barack')
            cy.get("[data-cy='search_button']").click()

        })
        it('is expected to display search results', () => {
            cy.get("[data-cy='search_results']").within(()=> {
                cy.get("li").contains('barack').should('exist')
                cy.get("li").contains('PresidentObama').should('exist')
                cy.get("li").contains('shentibeitaokongle').should('exist')
            });
        });
    });
});