import LoginPage from '../../pages/LoginPage'
import InventoryPage from '../../pages/InventoryPage'
import CheckoutPage from '../../pages/CheckoutPage'

describe('Checkout SauceDemo', () => {
  beforeEach(() => {
    LoginPage.visit()
    LoginPage.fillUsername('standard_user')
    LoginPage.fillPassword('secret_sauce')
    LoginPage.submit()
  })

  it('deve finalizar compra com sucesso', () => {
    InventoryPage.addBackpackToCart()
    InventoryPage.goToCart()

    CheckoutPage.goToCheckout()
    CheckoutPage.fillUserInfo('Lucas', 'QA', '12345')
    CheckoutPage.continue()
    CheckoutPage.finish()

    CheckoutPage.validateSuccess()
  })
})