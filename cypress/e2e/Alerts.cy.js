describe('Alerts', () => {

    //1) JS Alert: It will have som text and an 'OK' button
    it('JS alert', () => {
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
        cy.get("button[onclick='jsAlert()']").click()

        //cy.on to trigger the event
        cy.on('window:alert', (t) => {
            expect(t).to.contains('I am a JS Alert')
        })

        //alert window is automatically closed by cypress
        cy.get('#result').should('have.text', 'You successfully clicked an alert')
    })

    //2) JS Confirm Alert: It will have some text with 'OK' and 'Cancel' buttons
    it('JS Confirm Alert - OK', () => {
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
        cy.get("button[onclick='jsConfirm()']").click()

        //cypress automatically closed alert window by OK button
        cy.on('window:confirm', (t) => {
            expect(t).to.contains('I am a JS Confirm')
        })

        cy.get('#result').should('have.text', 'You clicked: Ok')
    })

    it('JS Confirm Alert - Cancel', () => {
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
        cy.get("button[onclick='jsConfirm()']").click()

        cy.on('window:confirm', (t) => {
            expect(t).to.contains('I am a JS Confirm')
        })

        cy.on('window:confirm', () => false) //closes alert window using cancel button

        cy.get('#result').should('have.text', 'You clicked: Cancel')
    })

    //3) JS Prompt Alert: It will have some text with a text box for user input along with 'OK'
    it('JS prompt alert - OK', () => {
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')

        cy.window().then((win) => {
            cy.stub(win, 'prompt').returns('welcome');
        })

        cy.get("button[onclick='jsPrompt()']").click()

        cy.get('#result').should('have.text', 'You entered: welcome')
    })

    //4) Authenticated Alert
    it.only('JS Authenticated Alert', () => {

        //Approach one to pass credentials (within visit url in json format)
        // cy.visit('https://the-internet.herokuapp.com/basic_auth', {
        //     auth: {
        //         username: "admin",
        //         password: "admin"
        //     }
        // })

        // cy.get("div[class='example'] p").should('have.contain', 'Congratulations')
    
        //Approach two to pass credentails (with url)
        cy.visit('https://admin:admin@the-internet.herokuapp.com/basic_auth')
        cy.get("div[class='example'] p").should('have.contain', 'Congratulations')
    })

})