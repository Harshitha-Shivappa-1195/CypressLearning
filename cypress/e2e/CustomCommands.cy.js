//click on link using label
//over writing existing contains() command
//re-useable custom commands

describe('Custom commands', () => {

    it.only("Handling links", () => {

        cy.visit("https://demo.nopcommerce.com/")

        //using direct path to click
        //cy.get("div[class='item-grid'] div:nth-child(2) div:nth-child(1) div:nth-child(2) h2:nth-child(1) a:nth-child(1)").click()

        //using custom command
        cy.clickLink("Apple MacBook Pro 13-inch")
        cy.get("div[class='product-name'] h1").should('have.text','Apple MacBook Pro 13-inch')
    })

    it("Contains insensitive", () => {

        cy.visit("https://demo.nopcommerce.com/")

         //using custom command
         cy.clickLink("APPLE MacBook Pro 13-inch")
         cy.get("div[class='product-name'] h1").should('have.text','Apple MacBook Pro 13-inch')
    })

    it("Login command", () => {

        cy.visit("https://demo.nopcommerce.com/")

        cy.clickLink("Log in");
        cy.loginapp("cypress@gmail.com", "Cypress@123")

        cy.get('.ico-account').should('have.text', 'My account')
    })
})