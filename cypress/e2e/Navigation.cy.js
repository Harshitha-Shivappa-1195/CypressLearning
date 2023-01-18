describe("Navigation Test", () => {

    it('Go() and Reload()', () => {

        cy.visit("https://demo.opencart.com/")
        cy.title().should('eq', 'Your Store')

        cy.xpath("//a[normalize-space()='Cameras']").click()
        cy.get("div[id='content'] h2").should('have.text', "Cameras")

        cy.go('back') //go back to home
        cy.title().should('eq', 'Your Store')

        cy.go('forward')
        cy.get("div[id='content'] h2").should('have.text', "Cameras")

        cy.go(-1) //home
        cy.title().should('eq', 'Your Store')

        cy.go(1)
        cy.get("div[id='content'] h2").should('have.text', "Cameras")

        cy.reload();
    })
})