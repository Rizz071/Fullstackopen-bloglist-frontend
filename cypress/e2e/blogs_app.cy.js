// describe('template spec', () => {
//   it('passes', () => {
//     cy.visit('https://example.cypress.io')
//   })
// })


describe('BLOGS Application', function () {

  beforeEach(function () {
    cy.request('POST', 'http://localhost:3003/api/testing/reset')
    const user = {
      name: 'Test User',
      username: 'testuser',
      password: 'salasana'
    }
    cy.request('POST', 'http://localhost:3003/api/users/', user)
    cy.visit('http://localhost:5173')
  })


  it('front page can be opened', function () {
    cy.visit('http://localhost:5173')
    cy.contains('BLOGS Application')
  })

  it('login form can be opened', function () {
    cy.contains('Login').click()
  })

  it('user can login', function () {
    cy.contains('Login').click()
    cy.get('input:first').type('testuser')
    cy.get('input:last').type('salasana')

    cy.get('#login-button').click()
    cy.contains('testuser logged in')
  })


})

