import { URL } from '../fixtures/constUrl'

describe('Cypress Playground', () => {

    beforeEach(() => {
        cy.visit('/index.html')
    })

    it('test click', () => {
        cy.contains('button', 'Subscribe').click()
        cy.get('span#success').should('have.text', `You've been successfully subscribed to our newsletter.`)
    })

    it('test type', () => {
        cy.get('#signature-textarea').type('Cypress is awesome!')
        cy.get('em#signature').should('have.text', 'Cypress is awesome!')
    })

    it('test check', () => {
        cy.get('#signature-textarea-with-checkbox').type('Luffy')
        cy.get('#signature-checkbox').check()
        cy.get('#signature-triggered-by-check').should('have.text', 'Luffy')
    })

    it('test uncheck', () => {
        cy.get('#signature-textarea-with-checkbox').type('Luffy')
        cy.get('#signature-checkbox').check()
        cy.get('#signature-checkbox').uncheck()
        cy.get('#signature-triggered-by-check').should('have.css', 'text-decoration-line', 'none')
    })

    it('test radio on', () => {
        cy.get('#on').check()
        cy.get('#on-off').should('have.text', 'ON')
            .and('have.css', 'color', 'rgb(0, 128, 0)')
    })

    it('test radio off', () => {
        cy.get('#off').check()
        cy.get('#on-off').should('have.text', 'OFF')
            .and('have.css', 'color', 'rgb(255, 0, 0)')
    })

    it('test select basic', () => {
        cy.get('#selection-type').select('Basic')
        cy.get('#select-selection').should('have.text', `You've selected: BASIC`)
    })

    it('test select standard', () => {
        cy.get('#selection-type').select('Standard')
        cy.get('#select-selection').should('have.text', `You've selected: STANDARD`)
    })

    it('test select vip', () => {
        cy.get('#selection-type').select('VIP')
        cy.get('#select-selection').should('have.text', `You've selected: VIP`)
    })

    it('test select multiple', () => {
        cy.get('select[multiple]').select(['apple', 'cherry', 'banana', 'date', 'elderberry'])
        cy.get('p#fruits-paragraph').should('have.text', `You've selected the following fruits: apple, banana, cherry, date, elderberry`)
    })

    it('test select file', () => {
        cy.get('input[type="file"]').selectFile('cypress/fixtures/example.json')
        cy.get('p#file').should('have.text', `The following file has been selected for upload: example.json`)
    })

    it('test intercept status 200', () => {
        cy.interceptStatus200(URL.api)
    })

    it('test intercept status 500', () => {
        cy.interceptStatus500(URL.api)
    })

})