
describe("Handle Auto Suggestion", () => {

    it("Select values from google auto suggestion", () => {

        cy.visit("https://www.google.com/")

        cy.get("input[name='q']").type("cypress automation")

        cy.get("div[role='option']").each(function($ele, index, $list) {
            
            if($ele.text().includes("cypress automation tool")) {
                cy.wrap($ele).click()
            }
            else {
                cy.log($ele.text())
            }
        })
    })
})