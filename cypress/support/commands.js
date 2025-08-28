Cypress.Commands.add('leoLogin', (
    userEmail = Cypress.env('username'),
    password = Cypress.env('password')
) => {
    cy.visit('/home')
    cy.get('#email').click()
    cy.get('#email').type(userEmail)
    cy.get('#senha').click()
    cy.get('#senha').type(password)
    cy.get('#bottom-wizard > .submit').click()
})

Cypress.Commands.add('sessionLogin', (
    userEmail = Cypress.env('username'),
    password = Cypress.env('password')
) => {
    const login = () => cy.leoLogin(userEmail, password)
    cy.session(userEmail, login)
})

