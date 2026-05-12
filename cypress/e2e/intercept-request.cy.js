describe('Intercept Request Tests', () => {

  it('deve validar request enviado', () => {

    cy.intercept(
      'POST',
      'https://jsonplaceholder.typicode.com/posts'

    ).as('createPost')

    cy.visit('https://example.cypress.io')

    cy.window().then((win) => {

      return win.fetch(
        'https://jsonplaceholder.typicode.com/posts',

        {
          method: 'POST',

          headers: {
            'Content-Type': 'application/json'
          },

          body: JSON.stringify({
            title: 'Teste Cypress',
            body: 'Automação API',
            userId: 1
          })

        })

    })

    cy.wait('@createPost').then((interception) => {

      expect(interception.request.body.title)
        .to.eq('Teste Cypress')

      expect(interception.request.body.body)
        .to.eq('Automação API')

      expect(interception.request.body.userId)
        .to.eq(1)

    })

  })

})