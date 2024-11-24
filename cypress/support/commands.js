// Login command
Cypress.Commands.add('login', (username, password) => {
  cy.visit('/')
  cy.get('#user_user_name').type(username)
  cy.get('#user_password').type(password)
  cy.get('#sign-in-button').click()
})

Cypress.Commands.overwrite('clearLocalStorage', () => {
  cy.clearLocalStorage()
})

Cypress.Commands.overwrite('clearCookies', () => {
  cy.clearCookies()
})

