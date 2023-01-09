/// <reference types = "cypress"/>

before(function() {
    cy.fixture('example.json').as('test_data')
})

it('Read files using fixture', function() {

    cy.fixture('example.json').then((data) => {
        cy.log(data.name)

        cy.log(data.email)
    })

    //cy.fixture('example').its('name').should('eq', 'harshitha')
    cy.log(this.test_data.name)
})

it('Read file using readFile()', function() {
    cy.readFile('./cypress/fixtures/example.json').then((data) => {
        cy.log(data.name)
    })

    cy.readFile('./cypress/fixtures/example.json').its('name').should('eq', 'harshitha')
})

it('Write file demo', function() {
    cy.writeFile('./cypress/fixtures/sample.txt', 'Hello, let us learn cypress\n')

    cy.writeFile('./cypress/fixtures/sample.txt', 'Welcome to learnings', {flag: 'a+'})
})