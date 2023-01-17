
//hooks: 
    //before (executes only once before it blocks),
    //after (executes only once after it blocks),
    //beforeEach (executes before every it blocks),
    //afterEach (executes after every it blocks)

//tags: 
    //skip (skips the particular it block while executing),
    //only (makes the particular it block executable. The Remaining it blocks will not be executed)

describe('MyTestSuite', () => {

    before(() => {
        cy.log("******** Launch app ********")
    })

    after(() => {
        cy.log("******** Close app ********")
    })

    beforeEach(() => {
        cy.log("******** Login ********")
    })

    afterEach(() => {
        cy.log("******** Logout ********")
    })

    it('Search', () => {
        cy.log("******** Search ********")
    })

    it.skip('Advanced Search', () => {
        cy.log("******** Advanced search ********")
    })

    it.only('Listing Products', () => {
        cy.log("******** Listing products ********")
    })
})