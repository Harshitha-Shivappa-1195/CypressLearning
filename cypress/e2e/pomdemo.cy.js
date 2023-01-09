import { LoginPage } from "./pages/login_page"

const loginPage = new LoginPage()

//beforeEach will get executed before each test in this spec file
// beforeEach(function() {
//     cy.visit('https://opensource-demo.orangehrmlive.com/')
// })

describe('All login tests', () => {

    beforeEach(function() {
        cy.visit('https://opensource-demo.orangehrmlive.com/')
    })

    //executes only this test
    // it.only('Login Test 1', () => {
    //     cy.visit('https://opensource-demo.orangehrmlive.com/')
        
    //     loginPage.login('Admin', 'admin123')
    // })

    //skips this particular test in this group
    // it.skip('Login Test 1', () => {
    //     cy.visit('https://opensource-demo.orangehrmlive.com/')
        
    //     loginPage.login('Admin', 'admin123')
    // })
    
    it('Login with valid credentails', () => {
        
        loginPage.login('Admin', 'admin123')
    })

    it('Login with invalid username', () => {
        
        loginPage.login('Admin123', 'admin123')
    })

})

// it('Login with invalid password', () => {
        
//     loginPage.login('Admin', 'admin456')
// })