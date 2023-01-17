//https://www.npmjs.com/package/cypress-file-upload
describe('File Uploads', () => {

    it('Single File Upload', () => {

        cy.visit("https://the-internet.herokuapp.com/upload")
        //files that needs to be uploaded should be part of fixtures
        cy.get('#file-upload').attachFile('example.json')
        cy.get('#file-submit').click();
        cy.wait(5000)

        //assert the file upload message
        cy.get("div[class='example'] h3").should('have.text', 'File Uploaded!')
    })

    it('File Upload - Rename', () => {

        cy.visit("https://the-internet.herokuapp.com/upload")
        //files that needs to be uploaded should be part of fixtures
        cy.get('#file-upload').attachFile({filePath:'example.json', fileName:'myfile.json'})
        cy.get('#file-submit').click();
        cy.wait(5000)

        //assert the file upload message
        cy.get("div[class='example'] h3").should('have.text', 'File Uploaded!')
    })

    it('File Upload - Drag and drop', () => {

        cy.visit("https://the-internet.herokuapp.com/upload")
   
        cy.get('#drag-drop-upload').attachFile("example.json", {subjectType: 'drag-n-drop'})
        cy.wait(2000)

        cy.get('#drag-drop-upload > .dz-preview > .dz-details > .dz-filename > span')
            .contains('example.json')
    })

    it('Multiple files Upload', () => {

        cy.visit("https://davidwalsh.name/demo/multiple-file-upload.php")
        cy.get('#filesToUpload').attachFile(["credentials.json", "example.json"])
        cy.wait(2000)

        cy.get(":nth-child(6) > strong").should('contain.text', 'Files You Selected:')
    })

    it.only('File Upload - Shadow Dom', () => {

        cy.visit("https://www.htmlelements.com/demos/fileupload/shadow-dom/index.htm")

        cy.get('.smart-browse-input', {includeShadowDom: true}).attachFile("example.json")
        cy.wait(3000)

        cy.get('.smart-item-name', {includeShadowDom: true}).contains('example.json')
    })
})