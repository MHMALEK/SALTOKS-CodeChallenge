describe('Home Page', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  context('Homepage View', () => {
    it('displays a bread crumb with page name', () => {
      cy.get('a.breadcrumb-item').contains('HomePage');
    });

    it('should input render properly', () => {
      cy.get('input[name=query]').should('have.attr', 'placeholder', 'Start Typing to Search on Github Repos');
      cy.get('input[name=query]').type('sample');
      cy.get('input[name=query]').should('have.attr', 'value', 'sample');
    });

    it('should show search result on input change', () => {
      cy.get('input[name=query]').type('sample');
      cy.get('table').should('not.exist'); // when result box shown up it mean table is hidden
    });


    it('clear button should close the search result box ', () => {
      cy.get('button.clear-button').click();
      cy.get('.mt-6 > .loading-wrapper').should('not.exist');
    });
  });
});
