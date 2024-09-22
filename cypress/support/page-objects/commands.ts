Cypress.Commands.add('interceptStatus200', (url: string) => {
    cy.intercept('GET', url, { fixture: 'todo' }).as('getTodo')
    cy.contains('button', 'Get TODO').click()
    cy.wait('@getTodo').then((interception) => {
        expect(interception.response?.body).to.deep.equal({
            userId: 2,
            id: 2,
            title: 'rick and morty',
            completed: false
        });
    })
})

Cypress.Commands.add('interceptStatus500', (url: string) => {
    cy.intercept('GET', url, { statusCode: 500 }).as('serverFailure')
    cy.contains('button', 'Get TODO').click()
    cy.wait('@serverFailure').its('response.statusCode').should('be.equal', 500)
    cy.get('#intercept > .error').and('have.text', 'Oops, something went wrong. Refresh the page and try again.')
})