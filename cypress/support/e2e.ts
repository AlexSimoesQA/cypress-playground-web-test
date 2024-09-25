import './page-objects/commands'

Cypress.on('fail', (error) => {
    debugger
    throw error
})