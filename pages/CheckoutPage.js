class CheckoutPage {
  goToCheckout() {
    cy.get('[data-test="checkout"]').click()
  }

  fillUserInfo(firstName, lastName, postalCode) {
  if (firstName) {
    cy.get('[data-test="firstName"]').type(firstName)
  }

  if (lastName) {
    cy.get('[data-test="lastName"]').type(lastName)
  }

  if (postalCode) {
    cy.get('[data-test="postalCode"]').type(postalCode)
  }
}

  continue() {
    cy.get('[data-test="continue"]').click()
  }

  finish() {
    cy.get('[data-test="finish"]').click()
  }

  validateSuccess() {
    cy.contains('Thank you for your order').should('be.visible')
  }
}

export default new CheckoutPage()