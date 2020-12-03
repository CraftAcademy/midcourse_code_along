describe('Application main view', () => {
  beforeEach(() => {
    cy.visit('/')
  });

  it('contains title', () => {
    cy.get("section[data-cy='title']")
      .should('contain', 'GitHub Search engine')
  });
});