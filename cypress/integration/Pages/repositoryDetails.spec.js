describe('Repository Details Page', () => {
   beforeEach(() => {
      cy.visit('/repos/sschoger/heroicons-ui'); // sample repo
   });

   context('Repository Details View', () => {
      it('displays a bread crumb with page name', () => {
         cy.get('a.breadcrumb-item').contains('Repository Details');
      });
      it('should load lazyload placeholder', () => {
         cy.get('div').contains('readMePlaceHolder');
      });
   });
});
