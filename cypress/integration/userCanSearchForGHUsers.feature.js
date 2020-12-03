describe("User can see search for Github users", () => {
  describe("by entering a search value in input field and clicking the button", () => {
    beforeEach(() => {
      cy.server()
      cy.route({
        url: "https://api.github.com/search/users?q=barack",
        method: "GET",
        response: "fixture:search_for_barack.json"
      })
      cy.visit("/");
      cy.get('[data-cy="search-input"]').type("barack");
      cy.get('[data-cy="search-button"]').click();
    });

    it("is expected to display search results", () => {
      cy.get('[data-cy="search-results"]').within(() => {
        cy.get("li").contains("barack").should("exist");
        cy.get("li").contains("PresidentObama").should("exist");
        cy.get("li").contains("shentibeitaokongle").should("exist");
      });
    });
  });
});
