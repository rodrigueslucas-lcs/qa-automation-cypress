describe('API Error Tests', () => {

  it('deve mockar erro 500 da API', () => {

    cy.intercept(
      'GET',
      'https://jsonplaceholder.typicode.com/posts/1',

      {
        statusCode: 500,

        body: {
          error: 'Erro interno do servidor'
        }

      }

    ).as('serverError')

    cy.visit('https://example.cypress.io')

    cy.window().then((win) => {

      return win.fetch(
        'https://jsonplaceholder.typicode.com/posts/1'
      )

    })

    cy.wait('@serverError').then((interception) => {

      expect(interception.response.statusCode)
        .to.eq(500)

      expect(interception.response.body.error)
        .to.eq('Erro interno do servidor')

    })

  })

})