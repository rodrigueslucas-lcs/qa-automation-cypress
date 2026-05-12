import LoginPage from '../../pages/LoginPage'

describe('Login SauceDemo', () => {

  it('login com sucesso', () => {

    LoginPage.visit()

    LoginPage.login('standard_user', 'secret_sauce')

    cy.url().should('include', 'inventory')

  })

})