
class Verification{
 getArriva(){
    cy.get('[data-elid="top-line-account-logged-in"]').contains('My arriva').click({force:true})
 }
 getuser(){
    cy.get('[data-elid="user-info"]').contains('Hamza Ali').should('exist')
    cy.get('[data-elid="user-info"]').contains('hamza.hussain@tareenity.com').should('exist')
 }
 getbutton(){
    cy.get('[type="button"]').contains('Add').click({force:true})
 }

 getAddress(){
    cy.get('.search-select__value-container').type("Halewood Portway")
    cy.wait(2000)
    cy.get('#react-select-3-option-0').contains('Halewood Portway').click({force:true})
 }
 getbutton1(){
    cy.get('[type="button"]').contains('Save').click({force:true})
    cy.wait(2000)
    cy.get('._1FQWzlLu120Y4osZb0G2mh > p').contains('Halewood Portway').should('exist')
 }
 getbutton2(){
    cy.get('[type="button"]').eq(1).contains('Add').click({force:true})
 }
 getWork(){
    cy.get('.search-select__value-container').type("Hale Aran Close")
    cy.wait(2000)
    cy.get('#react-select-5-option-0').contains('Hale Aran Close').click({force:true})
 }
 getbutton3(){
    cy.get('[type="button"]').contains('Save').click({force:true})
    cy.wait(1000)
    cy.get('._1yhWtCWJF4kIj6uHFrG9Ql').contains('Hale Aran Close').should('exist')
 }
 getPlaces(){
    cy.get('._3032uhWls3h2_zA1GlVRaX').contains('Add favourite').eq(0).click({force:true})
    cy.get('[name="favouritePlaces.0.name"]').type('London')
    cy.get('.search-select__value-container').type("Hale Aran Close")
    cy.wait(2000)
    cy.get('#react-select-7-option-0').contains('Hale Aran Close').click({force:true})
    cy.get('[type="button"]').contains('Save').click({force:true})

 }
 getButton4(){
    cy.get('._1FQWzlLu120Y4osZb0G2mh > p').contains('Hale Aran Close').should('exist')
 }
 getJourney(){
    cy.wait(2000)
    cy.get(':nth-child(3) > ._2KZkKX3FvZMzAHaFth8fNu > ._nfmPejYIgKBBPi4ONjx7').contains('Add favourite').click({force:true})
    cy.wait(1000)
    cy.get('[id="favouriteJourneys.0.name"]').click({force:true}).type('London')
 
   
    cy.get('.search-select__value-container').eq(0).type("Hale Aran Close")
    cy.wait(2000)
    cy.get('#react-select-9-option-0').eq(0).contains('Hale Aran Close').click({force:true})
    
    
    cy.get('.search-select__value-container').eq(1).type("Halewood Trispen Close")
    cy.wait(2000)
    cy.get('[id="react-select-10-option-0"]').contains('Halewood Trispen Close').click({force:true})
    //cy.get('[type="button"]').contains('Save').click({force:true})
    
    
 }

}
export default Verification;