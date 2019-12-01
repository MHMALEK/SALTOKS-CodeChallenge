

describe('Networ kRequest Test', () => {
    beforeEach(() => {
        cy.visit('/');
    });

    context('Homepage View', () => {

        it('api shoud result repositories data', () => {
            cy.request('https://api.github.com/search/repositories?q=test&per_page=10').as('repositorySearch')

            cy.get('@repositorySearch').should((response) => {
                expect(response.status).to.eq(200)
                expect(response).to.have.property('headers')
                expect(response).to.have.property('body')
                expect(response).to.have.property('body').to.have.property('items')
                expect(response).to.have.property('body').to.have.property('total_count')

            })
        });
    });
});