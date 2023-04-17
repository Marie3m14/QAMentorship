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
cy.get('a[href="/dashboard/recommended_needs"]').first().click()
cy.get('i[title="Vizualizeaza"]').first().click()
cy.get('input[name="contact_first_name"]').should('exist')
cy.get('input[name="contact_last_name"]').should('exist')
cy.get('input[name="contact_phone_number"]').should('exist')
cy.get('input[type="search"]').should('exist')
//cy.wait(3000)
//cy.get('div[id="vs2__combobox"]').type('{downArrow}')
cy.get('ul[id="vs1__listbox"]').should('exist')
//cy.get('input[aria-activedescendant="vs2__option-1"]').click()
cy.get('textarea[name="description"]').should('exist')
cy.get('input.pac-target-input').should('exist')
cy.get('input[name="details"]').should('exist')
cy.get('input[name="county"]').should('exist')
cy.get('input[name="city"]').should('exist')
cy.get('input[name="postal_code"]').should('exist')


Cypress.on('uncaught:exception', (err, runnable) => {
    console.log("To DO!!!!!!!!")
      return false
    });











})

})
