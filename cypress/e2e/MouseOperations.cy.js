import 'cypress-iframe'
require ('@4tw/cypress-drag-drop')

describe("Mouse Operations", () => {

    it('Mouse Hover', () => {

        cy.visit("https://demo.opencart.com/")
        
        cy.get(":nth-child(1) > .dropdown-menu > .dropdown-inner > .list-unstyled > :nth-child(2) > .nav-link")
            .should('not.be.visible')

        cy.get('.nav > :nth-child(1) > .dropdown-toggle').trigger('mouseover').click()

        cy.get(":nth-child(1) > .dropdown-menu > .dropdown-inner > .list-unstyled > :nth-child(2) > .nav-link")
            .should('be.visible')
    })

    it('Right click', () => {

        cy.visit("https://swisnl.github.io/jQuery-contextMenu/demo.html")
        
        //Approach 1
        // cy.get('span.context-menu-one.btn.btn-neutral').trigger('contextmenu')
        // cy.get('.context-menu-icon-copy > span').should('be.visible')
    
        cy.get('span.context-menu-one.btn.btn-neutral').rightclick()
        cy.get('.context-menu-icon-copy > span').should('be.visible')
    })

    it('Double click', () => {

        cy.visit("https://www.w3schools.com/tags/tryit.asp?filename=tryhtml5_ev_ondblclick3")
        cy.frameLoaded('#iframeResult') //Load the frame

        //Approach 1 - triggger()
       /* cy.iframe('#iframeResult')
            .find("button[ondblclick='myFunction()']")
            .trigger('dblclick')*/
        
            cy.iframe('#iframeResult')
            .find("button[ondblclick='myFunction()']")
            .dblclick()
        
        //Validate the text
        cy.iframe('#iframeResult')
            .find('#field2')
            .should('have.value', 'Hello World!')
    })

    it('Drag and drop using plugin', () => {

        cy.visit("http://www.dhtmlgoodies.com/scripts/drag-drop-custom/demo-drag-drop-3.html")

        cy.get('#box6').should('be.visible')
        cy.get('#box101').should('be.visible')

        cy.get('#box6').drag('#box101', {force:true})
    })

    it.only('Scrolling Page', () => {

        cy.visit("https://www.countries-ofthe-world.com/flags-of-the-world.html")

        cy.get(':nth-child(1) > tbody > :nth-child(86) > :nth-child(2)')
            .scrollIntoView({duration: 2000}) //2000 miliseconds
        cy.get(':nth-child(1) > tbody > :nth-child(86) > :nth-child(2)')
            .should('be.visible')

        cy.get(':nth-child(1) > tbody > :nth-child(22) > :nth-child(1) > img')
            .scrollIntoView({duration: 2000})
        cy.get(':nth-child(1) > tbody > :nth-child(22) > :nth-child(1) > img')
            .should('be.visible')

        cy.get('#footer').scrollIntoView()
    })
})