
describe("My Test Suite", () => {

    it('DataDrivenTest', () => {

        cy.fixture("orangehrm").then((data) => {

            cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

            data.forEach((userdata) => {
                cy.get("input[placeholder='username']").type(userdata.name)
                cy.get("input[placeholder='password']").type(userdata.password)
                cy.get("button[type='submit']").click()

                if (userdata.name == 'Admin' && userdata.password == 'admin123') {
                    cy.get(".oxd-topbar-header-breadcrumb > .oxd-text")
                        .should('have.text', userdata.expected)
                    
                    cy.get(".oxd-userdropdown-tab > .oxd-icon").click()
                    cy.contains('Logout').click()
                }
                else {
                    cy.get(".oxd-alert-content > .oxd-text")
                        .should("have.text", userdata.expected)
                }
            })
        })
    })
})