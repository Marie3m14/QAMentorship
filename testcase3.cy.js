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
 
})

it('Verify if zoom in and zoom out works', () => {
    //Verify if zoom in and zoom out works
 // cy.get('a[href="/search"]').click()
 cy.get('a[href="/search"]').click()
 // cy.get('button.gm-control-active').should('exist')
 cy.get('button[title="Zoom in"]').should('exist')
 cy.get('button[title="Zoom in"]').click()
 //cy.get('div.gm-style').should('have.css','z-index','992')

 
 cy.get('button[title="Zoom out"]').should('exist')



})
  


})
