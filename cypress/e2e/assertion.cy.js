
it('learning assertions', function() {

    cy.visit('https://example.cypress.io/')
    cy.contains('get').click()

    cy.get('#query-btn')
        .should('contain', 'Button')

    cy.get('#query-btn')
        .should('contain', 'Button')
        .should('have.class', 'query-btn')
        .should('be.visible')
        .should('be.enabled')

    cy.get('#query-btn').invoke('attr', 'id')
        .should('equal', 'query-btn')

    cy.get('#query-btn')
        .should('contain', 'Button')
        .and('have.class', 'query-btn')

    //added custom wait
    // cy.get('#query-btn', {timeout:6000})
    //     .should('contain', 'SubmitButton')

    //Explicit Assertion
    expect(true).to.be.true

    let name = 'Cypress'
    expect(name).to.be.equal('Cypress')

    assert.equal(4, 4, 'Not Equal')

    assert.equal(4, '4', 'Not Equal')

   //  assert.strictEqual(4, '4', 'Not Strictly Equal')

    // assert.equal(4, 5, 'Not Equal')
})