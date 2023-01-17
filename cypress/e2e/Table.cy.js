
describe('Handle Tables', () => {

    //gets executed before every it block
    beforeEach('Login', () => {
        cy.visit("https://demo.opencart.com/admin/index.php")

        cy.get("#input-username").type("demo")
        cy.get("#input-password").type("demo")
        cy.get("button[type='submit']").click()

        cy.get(".btn-close").click()

        //Customers--> Customers
        cy.get("#menu-customer>a").click() //Customer main menu
        cy.get('#menu-customer>ul>li:first-child').click() //Customer sub/child menu
    })

    it('Check number rows and columns', () => {

        cy.get("table[class='table table-bordered table-hover']>tbody>tr").should('have.length', '10')
        cy.get("table[class='table table-bordered table-hover']>thead>tr>td").should('have.length', '7')
    })

    it('Check cell data from specific row and column', () => {

        cy.get("table[class='table table-bordered table-hover']>tbody>tr:nth-child(4)>td:nth-child(3)")
            .contains("gorankrezic90@gmail.com")
    })

    it('Read all the rows and columns data in the first page', () => {

        cy.get("table[class='table table-bordered table-hover']>tbody>tr")
            .each(($row, index, $rows) => {

                cy.wrap($row).within(() => {

                    cy.get("td").each(($col, index, $cols) => {
                        cy.log($col.text());
                    })
                })
            })
    })

    it.only('Pagination', () => {

        //Total Number of pages
        // let totalPages
        // cy.get(".col-sm-6.text-end").then( (e) => {
        //     let paginationValue = e.text()
        //     totalPages = paginationValue.substring(paginationValue.indexOf("(") +1, paginationValue.indexOf("Pages")-1)

        //     cy.log("Total number of pages " +totalPages)
        // })

        let totalPages = 5;
        for(let p=1; p<=totalPages; p++) {

            if(totalPages>1) {
                cy.log("Active page is "+p)

                cy.get("ul[class='pagination']>li>a").each(($el, index, $list) => {
                    if ($el.text() == p) {
                      cy.wrap($el).click()
                      cy.wait(1000)
                    }
                  })

                cy.get("table[class='table table-bordered table-hover']>tbody>tr")
                    .each(($row, index, $rows) => {
                        cy.wrap($row).within(() => {
                            cy.get('td:nth-child(3)').then((e) => {
                                cy.log(e.text())
                            })
                        })
                    })
            }
        }


    })
})