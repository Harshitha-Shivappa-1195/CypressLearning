describe("Capture Screenshots and Videos", () => {
    
    it('Manually and Automatically', () => {

        cy.visit("https://demo.opencart.com/")
        // cy.screenshot("homepage")

        // cy.wait(5000)
        // cy.get(":nth-child(1) > form > .product-thumb > .image > a > .img-fluid").screenshot("image")

        //Automatically capture screenshot and video on failure

        cy.get("li:nth-child(7) a:nth-child(1)").click()

        cy.get("div[id='content'] h2").should('have.text', "Tablets")
    })
})