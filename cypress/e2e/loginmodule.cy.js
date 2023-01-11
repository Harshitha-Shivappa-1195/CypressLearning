import { LoginPage } from "./pages/login_page"

const loginPage = new LoginPage()


describe('All login tests', () => {

    beforeEach(function() {
        cy.visit('https://opensource-demo.orangehrmlive.com/')
    })

    it('Login with valid username', () => {
        
        cy.fixture('credentials.json').then((data) => {
            loginPage.login(data.name, data.password)
        })
  })

})