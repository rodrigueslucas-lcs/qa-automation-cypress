import LoginPage from '../../pages/LoginPage'
import InventoryPage from '../../pages/InventoryPage'
import CheckoutPage from '../../pages/CheckoutPage'

describe('Validações de Checkout', () => {
  beforeEach(() => {
    LoginPage.visit()
    LoginPage.fillUsername('standard_user')
    LoginPage.fillPassword('secret_sauce')
    LoginPage.submit()

    InventoryPage.addBackpackToCart()
    InventoryPage.goToCart()
    CheckoutPage.goToCheckout()
  })

  it('não deve continuar sem preencher dados', () => {
    CheckoutPage.continue()
    cy.contains('Error').should('be.visible')
  })

  it.only('não deve aceitar CEP vazio', () => {
  CheckoutPage.fillUserInfo('Lucas', 'QA', '')
  CheckoutPage.continue()

  cy.get('[data-test="error"]')
    .should('be.visible')
    .and('contain', 'Postal Code is required')
})

  it('deve finalizar com dados válidos', () => {
    CheckoutPage.fillUserInfo('Lucas', 'QA', '12345')
    CheckoutPage.continue()
    CheckoutPage.finish()

    CheckoutPage.validateSuccess()
  })
})