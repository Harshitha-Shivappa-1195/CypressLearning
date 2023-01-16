import 'cypress-iframe'

describe("Handling frame", () => {
     
    it('Approach 1', () => {
        cy.visit('https://the-internet.herokuapp.com/iframe')

        const iframe = cy.get('#mce_0_ifr')
        .its('0.contentDocument.body')
        .should('be.visible')
        .then(cy.wrap)

        iframe.clear()
        
        cy.get("[aria-label='Bold']").click();

        iframe.type('Cypress Automation {cmd+a}')

        
    })

    it('Approach 2 - Custom Command', () => {
        cy.visit('https://the-internet.herokuapp.com/iframe')

        cy.getIframe('#mce_0_ifr').clear().type('Cypress Automation')        
    })

    it.only('Approach 3 - using cypress iframe plugin', () => {
        cy.visit('https://the-internet.herokuapp.com/iframe')
    
        cy.frameLoaded('#mce_0_ifr'); //Load the frame

        cy.iframe('#mce_0_ifr').clear().type("Welcome{selectall}");
    
        cy.get("[aria-label='Bold']").click();
    })
})