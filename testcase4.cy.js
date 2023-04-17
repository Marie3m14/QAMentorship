/// <reference types="cypress" />

describe('Test example', () => {
  beforeEach(() => {
        //Navigate to main mage
        cy.visit('https://iwanttohelp.bim.assistcloud.services/')
  })



it('Navigate to Autentificare', () => {
  //Click on the link Autentificare page
cy.get('a[href="/auth/login"]').click()
  //Check if the url is correct
cy.url().should('contains','/auth/login')
  //Check if the title is correct
cy.get('h5.title').should('have.text', 'Autentificare')

cy.get('input[name="phone_number"]').type('0766303737')
cy.get('input[name="password"]').type('Assist1')
cy.get('button[type="submit"]').click()
cy.get('a[href="/dashboard/profile"]').should('exist')



})

})
