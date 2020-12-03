describe('User can search for GitHub users', () => {
  describe('by entering a seach value in input field and clocking the button', () => {
    beforeEach(() => {
      cy.server()
      cy.route({
        url: "https://api.github.com/search/users?q=barack",
        method: "GET",
        response: "fixture:search_for_barack.json"
      })
      cy.visit('/')
      cy.get("[data-cy='search_input']").type('barack')
      cy.get("[data-cy='search_button']").click()
    })

    it('is expected to display search results', () => {
      cy.get("[data-cy='search_results']").within(() => {
        cy.get("li").contains('barack').should('exist')
        cy.get("li").contains('PresidentObama').should('exist')
        cy.get("li").contains('shentibeitaokongle').should('exist')
      })
    });
  });
});