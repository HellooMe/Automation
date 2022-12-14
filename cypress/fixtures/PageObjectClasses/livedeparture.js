

class Departure{
   getDeparture(){

    return cy.get('.acLEMjKYyJWeE80KQrxlA')
   }
   getDropDown(){

    return cy.get('.dropDown')

   }
   getDiv(){

    return cy.get('[data-test="departures-list"]')
   }
   getButton(){
    return cy.get('._nfmPejYIgKBBPi4ONjx7')
   }
   getMenu(){
    return cy.get('._2TCKPWQ6EpspHBVfnDRrwe')
   }
   getselect(){
    return cy.get('._1_nuV5CNMmHDt84Y07y-BW')
   }
   gettext(){
    return cy.get('._2jpYrAP18kffhUzoUVe44i')
   }
   getverifytext(){
      return cy.get('._3dNf0D4d2eW6PcP-UrCysZ > :nth-child(2)')
   }
   getverifylast(){
      return cy.get(':nth-child(35) > ._2SzANZ1ca-Y6tBR3MQzHH1 > ._2jpYrAP18kffhUzoUVe44i > span')
   }

}
export default Departure;