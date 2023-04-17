/// <reference types="cypress" />

describe('Test example', () => {
  beforeEach(() => {
        //Navigate to main mage
        cy.visit('https://iwanttohelp.bim.assistcloud.services/')
  })
        //Test if the main page is loaded
  it('Navigate to Despe noi page', () => {
        //Click on the link to Despre noi page
    cy.get('a[href*="/about"]').click()
        //Check if the url is correct
    cy.url().should('contains','/about')
        //Check if the title is correct
    
  })

  it('Navigate to Acasa  page', () => {
    //Click on the link to Acasa page
cy.get('a[href="/"]').first().click()
    //Check if the url is correct
cy.url().should('contains','/')
    //Check if the title is correct
//cy.get('.mb-5 h3.card-title').should('have.text', 'Acasa')
})

it('Navigate to Top voluntari  page', () => {
  //Click on the link to Top Voluntari page
cy.get('a[href="/search"]').click()
  //Check if the url is correct
cy.url().should('contains','/search')
  //Check if the title is correct
cy.get('input.form-control').should('exist')
})


it('Navigate to Nevoi  page', () => {
  //Click on the link to Nevoi page
cy.get('a[href="/needs_list"]').click()
  //Check if the url is correct
cy.url().should('contains','/needs_list')
  //Check if the title is correct
cy.get('h3.card-title').first().should('have.text', 'Lista nevoi & Cazuri speciale')
})

it('Navigate to Ofera sugestii', () => {
  //Click on the link to Ofera sugestii page
cy.get('a[href="/contact"]').click()
  //Check if the url is correct
cy.url().should('contains','/contact')
  //Check if the title is correct
cy.get('h5.title').should('have.text', 'Ofera o sugestie')
})

it('Navigate to Inregistrarei', () => {
  //Click on the link Inregistrare page
cy.get('a[href="/auth/register"]').click()
  //Check if the url is correct
cy.url().should('contains','/auth/register')
  //Check if the title is correct
cy.get('h5.title').should('have.text', 'Inregistrare')
})



it('Navigate to Autentificare', () => {
  //Click on the link Autentificare page
cy.get('a[href="/auth/login"]').click()
  //Check if the url is correct
cy.url().should('contains','/auth/login')
  //Check if the title is correct
cy.get('h5.title').should('have.text', 'Autentificare')
})

})
