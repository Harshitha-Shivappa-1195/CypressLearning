

it("Login", () => {

    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

    cy.xpath("//input[@placeholder='Username']").type("Admin")

    cy.xpath("//input[@name='password']").type("admin123")

    cy.xpath("//button[@type='submit']").click()
})