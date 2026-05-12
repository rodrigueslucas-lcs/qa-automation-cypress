describe('API Tests', () => {

  it('deve buscar um post com sucesso', () => {

    cy.request({
      method: 'GET',
      url: 'https://jsonplaceholder.typicode.com/posts/1'
    }).then((response) => {

      expect(response.status).to.eq(200)

      expect(response.body).to.have.property('id')
      expect(response.body).to.have.property('title')
      expect(response.body).to.have.property('body')

      expect(response.body.id).to.eq(1)
      expect(response.body.userId).to.eq(1)

    })

  })

})

it('deve criar um post com sucesso', () => {

  cy.request({
    method: 'POST',
    url: 'https://jsonplaceholder.typicode.com/posts',

    body: {
      title: 'Teste API',
      body: 'Automação com Cypress',
      userId: 1
    }

  }).then((response) => {

    expect(response.status).to.eq(201)

    expect(response.body).to.have.property('id')

    expect(response.body.title).to.eq('Teste API')
    expect(response.body.body).to.eq('Automação com Cypress')
    expect(response.body.userId).to.eq(1)

  })

})

it('não deve realizar login sem API Key', () => {

  cy.request({
    method: 'POST',
    url: 'https://reqres.in/api/login',

    failOnStatusCode: false,

    body: {
      email: 'eve.holt@reqres.in',
      password: 'cityslicka'
    }

  }).then((response) => {

    expect(response.status).to.eq(401)

    expect(response.body).to.have.property('error')

    expect(response.body.error).to.eq('missing_api_key')

  })

})