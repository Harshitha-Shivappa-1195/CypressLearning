import { LoginPage } from "./pages/login_page"

const loginPage = new LoginPage()


describe('All login tests', () => {

    beforeEach(function() {
        cy.visit('https://opensource-demo.orangehrmlive.com/')
    })

    //Direct access
   /* it('Login with valid username', () => {
        
        cy.fixture('credentials.json').then((data) => {
            loginPage.login(data.name, data.password)
        })
  }) */

    //Access through hook - for multiple it blocks
    let userdata;
    before(() => {
        cy.fixture("credentials").then((data) => {
            userdata = data;
        })
    })

    it('FixturesDemoTest', () => {
        loginPage.login(userdata.name, userdata.password)

        cy.get(".oxd-topbar-header-breadcrumb > .oxd-text")
            .should('have.text', 'Dashboard')
    })

})