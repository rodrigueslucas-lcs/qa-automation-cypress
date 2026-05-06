class InventoryPage {
  addBackpackToCart() {
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()
  }

  goToCart() {
    cy.get('.shopping_cart_link').click()
  }

  validateCartCount(count) {
    cy.get('.shopping_cart_badge').should('contain', count)
  }
}

export default new InventoryPage()