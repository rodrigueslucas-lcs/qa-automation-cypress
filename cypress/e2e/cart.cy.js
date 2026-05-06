import LoginPage from '../../pages/LoginPage'
import InventoryPage from '../../pages/InventoryPage'

describe('Carrinho SauceDemo', () => {
  beforeEach(() => {
    LoginPage.visit()
    LoginPage.fillUsername('standard_user')
    LoginPage.fillPassword('secret_sauce')
    LoginPage.submit()
  })

  it('deve adicionar produto ao carrinho', () => {
    InventoryPage.addBackpackToCart()
    InventoryPage.validateCartCount(1)
  })

  it('deve acessar o carrinho', () => {
    InventoryPage.addBackpackToCart()
    InventoryPage.goToCart()

    cy.url().should('include', 'cart')
  })
})