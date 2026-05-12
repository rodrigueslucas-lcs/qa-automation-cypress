class CheckoutPage {

  goToCheckout() {
    cy.get('[data-test="checkout"]').should('be.visible').click()
  }

  fillUserInfo(firstName, lastName, postalCode) {

    cy.get('[data-test="firstName"]').clear()

    if (firstName) {
      cy.get('[data-test="firstName"]').type(firstName)
    }

    cy.get('[data-test="lastName"]').clear()

    if (lastName) {
      cy.get('[data-test="lastName"]').type(lastName)
    }

    cy.get('[data-test="postalCode"]').clear()

    if (postalCode) {
      cy.get('[data-test="postalCode"]').type(postalCode)
    }
  }

  continue() {
    cy.get('[data-test="continue"]').should('be.visible').click()
  }

  finish() {
    cy.get('[data-test="finish"]').should('be.visible').click()
  }

  validateSuccess() {
    cy.contains('Thank you for your order').should('be.visible')
  }
}

export default new CheckoutPage()