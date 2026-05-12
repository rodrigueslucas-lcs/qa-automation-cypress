describe('Mock API Tests', () => {

  it('deve mockar resposta da API', () => {

    cy.intercept(
      'GET',
      'https://jsonplaceholder.typicode.com/posts/1',

      {
        statusCode: 200,

        body: {
          id: 999,
          title: 'Post Mockado'
        }

      }

    ).as('mockPost')

    cy.visit('https://example.cypress.io')

    cy.window().then((win) => {

      return win.fetch('https://jsonplaceholder.typicode.com/posts/1')
        .then((response) => response.json())
        .then((data) => {

          expect(data.id).to.eq(999)

          expect(data.title)
            .to.eq('Post Mockado')

        })

    })

    cy.wait('@mockPost')

  })

})