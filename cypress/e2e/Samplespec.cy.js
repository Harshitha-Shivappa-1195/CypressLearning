describe("First Test Suite", function() {
    it("First Test", function() {
        expect(true).to.equal(true)
    })

    // it("Second Test", function() {
    //     expect(true).to.equal(false)
    // })

    it('Assertion Demo', () => {
        cy.visit('https://example.cypress.io')
    })
})