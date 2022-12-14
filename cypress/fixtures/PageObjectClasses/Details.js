export class details{
 
getDetails(){

    cy.get('[data-elid="My details"]').contains('My details').click({force:true})
}
getUpdate(){
    //update
    cy.get('[data-elid="edit-button"]').contains('Edit').click({force:true})
    cy.get('#firstName').clear()
    cy.get('#firstName').type('Hamzaaaaaaaaaa')
    cy.get('#lastName').clear()
    cy.get('#lastName').type('Hussain')
    cy.get('#phone').clear()
    cy.get('#phone').type('03238445151')
    cy.get('[type="submit"]').contains('Save changes').click({force:true})
    //verify
    cy.wait(2000)
    
    cy.get('._19KVfmY_yN7eg-7tuzZCn0 > div > :nth-child(1)').contains('Hamzaaaaaaaaaa Hussain').should('exist')
    cy.get('._19KVfmY_yN7eg-7tuzZCn0 > div > :nth-child(2)').contains('hamzaalihussain52@gmail.com').should('exist')
    cy.get('._19KVfmY_yN7eg-7tuzZCn0 > div > :nth-child(3)').contains('03238445151').should('exist')
    cy.get('._19KVfmY_yN7eg-7tuzZCn0 > div > :nth-child(4)').contains('NONE').should('exist')
    
    /*
       #firstName
       #lastName
       #email
       #phone
       .__indicator
       .__dropdown-indicator
    
    */ 
}
getrestore(){
    cy.wait(2000)
    cy.get('[data-elid="edit-button"]').contains('Edit').click({force:true})
    cy.get('#firstName').clear()
    cy.get('#firstName').type('Hamzaa')
    cy.get('#lastName').clear()
    cy.get('#lastName').type('Husssain')
    cy.get('#phone').clear()
    cy.get('#phone').type('03238445151')
    cy.get('[type="submit"]').contains('Save changes').click({force:true})
    //verify
    cy.wait(2000)
    /*
    cy.get('._19KVfmY_yN7eg-7tuzZCn0 > div > :nth-child(1)').contains('Hamzaa Hussain').should('exist')
    cy.get('._19KVfmY_yN7eg-7tuzZCn0 > div > :nth-child(2)').contains('hamza.hussain@tareenity.com').should('exist')
    cy.get('._19KVfmY_yN7eg-7tuzZCn0 > div > :nth-child(3)').contains('03238445151').should('exist')
    cy.get('._19KVfmY_yN7eg-7tuzZCn0 > div > :nth-child(4)').contains('NONE').should('exist')
    */
     
} 



}
export default details;