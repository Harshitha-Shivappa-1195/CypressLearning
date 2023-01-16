describe('Handle tabs', (() => {
    it('Approach 1 - remove target attribute', () => {

        cy.visit('https://the-internet.herokuapp.com/windows')

        //target atrribute is responsible for opning in new tab hence performed remove attribute
        cy.get('.example > a').invoke('removeAttr', 'target').click()

        cy.url().should('include', 'https://the-internet.herokuapp.com/windows/new')
        
        cy.wait(5000)

        //back to parent url/tab
        cy.go('back')

    })

    it.only('Approach 2 - capture url', () => {

        cy.visit('https://the-internet.herokuapp.com/windows')

        cy.get('.example > a').then((e) => {
            let url = e.prop('href');
            cy.visit(url)
        })

        cy.url().should('include', 'https://the-internet.herokuapp.com/windows/new')
        
        cy.wait(3000)

        //back to parent url/tab
        cy.go('back')
    })
}))