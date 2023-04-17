/// <reference types="cypress" />

describe('Test example', () => {
  beforeEach(() => {
        //Navigate to main mage
        cy.visit('https://iwanttohelp.bim.assistcloud.services/')
  })
        //Test if the main page is loaded

it('Navigate to Top voluntari  page', () => {
  //Click on the link to Top Voluntari page
cy.get('a[href="/search"]').click()
  //Check if the url is correct
//cy.url().should('contains','/search')
  //Check if the title is correct
//cy.get('input.form-control').should('exist')
})

it('Verify map exists  page', () => {
    //Click on the link to Top Voluntari page
  cy.get('a[href="/search"]').click()
    //Check if the url is correct
  //cy.url().should('contains','/search')
    //Check if the title is correct
  cy.get('div.vue-map-container').should('exist')
  })
  

it('Verify at least one volunteer exists', () => {
    //Click on the link to Top Voluntari page
 // cy.get('a[href="/search"]').click()
  cy.get('div.card-body').should('exist')

  //cy.get('div.card-body').then cy.log('At least one volunteer exists')

})
  


})
