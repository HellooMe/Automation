

class print{

  getGreenLine(){
    cy.get('._1iiweaVLbU5Eo1UOZRpH_N').contains('Greenline').click({force:true})
    cy.wait(500)
    cy.get(':nth-child(2) > .jyivLROvupXFl2MmbNb__ > a').click({force:true})
    cy.wait(2000)
    cy.get('._1dP3L0IGJNdhuKwfztirAZ ').eq(0).click({force:true})
    cy.wait(2000)
    cy.get(':nth-child(1) > ._2sPEHIu5NOSh4bVF9PcAqk > ._166vlZMKwrsyzgeVsE-7VG > :nth-child(3) > svg').click({force:true})
    cy.get('[data-elid="navigate-to-checkout-button"]').contains('Continue to Checkout').click({force:true})
    cy.wait(1000)
    cy.get('[data-elid="radio-button-checkbox"]').eq(1).click({force:true})
    cy.get('[placeholder="First Name"]').type('Hamza')
    cy.get('[placeholder="Last Name"]').type('Ali')
    cy.get('[data-elid="radio-button-checkbox"]').eq(3).click({force:true})
    cy.get('[placeholder="Date of travel"]').click()
    cy.get('._nfmPejYIgKBBPi4ONjx7 ').contains('Done').click()
    
    cy.wait(2000)
  }
}
export default print;