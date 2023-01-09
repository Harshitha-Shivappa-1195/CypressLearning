export class LoginPage {

    username_textbox = 'input[name="username"]'
    password_textbox = 'input[name="password"]'
    login_button = 'button[class$="login-button"]'


    login(userName, password) {
        cy.get(this.username_textbox).type(userName)

        cy.get(this.password_textbox).type(password)

        cy.get(this.login_button).click()

        cy.contains('My Info')
    }
}