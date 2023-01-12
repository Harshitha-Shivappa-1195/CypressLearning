//Radio Button, Checkbox, Dropdown

describe('Fill all the details', () => {

    it.skip('Dropdown, Checkbox, Radio Button', () => {

     //   cy.viewport(1920, 1080)
        cy.visit("http://seleniumpractise.blogspot.com/2022/02/sample-registration-form.html")
   
        cy.get("#fname").type("Cypress")

        //Selection based on text
        //cy.get("[name='city']").select("Chennai").find(":selected").contains("Chennai")

        //assertion fails here due to wrong select assertion
        //cy.get("[name='city']").select("Chennai").find(":selected").contains("Bangalore")
        
        //Selection based on value
        //cy.get("[name='city']").select("Chen").find(":selected").contains("Chennai")

        //Selection based on index
        cy.get("[name='city']").select(3).find(":selected").contains("Indore")

        //multi select dropdown
        //cy.get("[name='Hobbies']").select("Dance", "Singing")

        //checks all the checkbox options
        //cy.get("input[type='checkbox']").check()

        //to check all the checkbox options even if the checkbox is disabled
        //cy.get("input[type='checkbox']").check({force: true})
    
        //selects the first checkbox and performs assertion (checked or not)
        //cy.get("input[type='checkbox']").first().check().should("be.checked")

        //checked based on value
        //cy.get("input[type='checkbox']").check("new").should("be.checked")
    
        //check disabled checkbox based on value and perform assertion
        //cy.get("input[type='checkbox']").check("dis", {force: true}).should("be.checked")

        //cy.get("input[type='radio']").check({force:true})

        cy.get("input[type='radio']").check("N").should("be.checked")
    })

    it("Dropdown without select", () => {

        cy.visit("https://www.dummyticket.com/dummy-ticket-for-visa-application/")

        cy.get("#select2-billing_country-container").click()

        cy.get(".select2-search__field").type("Italy").type("{enter}")

        cy.get("#select2-billing_country-container").should('have.text', 'Italy')


    })
})