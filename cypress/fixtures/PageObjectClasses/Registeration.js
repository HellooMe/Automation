export class registeration{

getLoginButton(){
    cy.get('[data-elid="top-line-account-not-logged"]').contains('Log in').click({force:true})
   // cy.url().should('be.equal','https://www.preprod.arrivabus.co.uk/authorization/sign-in')
}
getSigntext(){
    return cy.get('[data-elid="sign-in-tab"]')
}
getCreateAccountText(){
    return cy.get('[data-elid="sign-up-tab"]')
}
getVerifyAccountText(){
    return cy.get('._3vQfI8LOGISdoTUwn8sXmL')
}
//registeration
getFillForm(){

    cy.get('[data-elid="first-name-input"]').type('Amir')
    cy.get('[data-elid="last-name-input"]').type('Khan')
    var c = Math.floor(Math.random() * 100) + 1;
    var  d=c;
    cy.get('[data-elid="email-input"]').type('amir'+d+'@gmail.com')
    cy.get('[data-elid="confirm-email-input"]').type('amir'+d+'@gmail.com')
    cy.get('.passenger-type__value-container').click()
    cy.wait(2000)
    cy.get('#react-select-5-option-0').click()
    cy.get('[data-elid="phone-number-input"]').type('03238445151')
    
    cy.get('[data-elid="password-input"]').type('Ravians144@')
    cy.get('[data-elid="confirm-password-input"]').type('Ravians144@')
    cy.get(':nth-child(1) > ._1e9QDw-R9X7IrVWA1aLYgp').click({force:true})
    //cy.get('[data-elid="marketing-preferences-in-app-messaging]')
    //cy.get('[data-elid="submit-button"]').contains('Create account').click({force:true})
    
}
getVerifyForm(){

    cy.get('[data-elid="submit-button"]').contains('Create account').click({force:true})
    cy.get('._3XdD3jQFJX5vl5yLd61ujs').eq(0).should('be.visible','Please enter your name')
    cy.get('._3XdD3jQFJX5vl5yLd61ujs').eq(1).should('be.visible','Please enter your name')
    cy.get('._3XdD3jQFJX5vl5yLd61ujs').eq(2).should('be.visible','Please enter your email')
    cy.get('._3XdD3jQFJX5vl5yLd61ujs').should('be.visible','Please enter your password')


}

getLoginBus()
{
    cy.get('[data-elid="email-input"]').type('hamzaalihussain52@gmail.com')
    cy.get('[data-elid="password-input"]').type('Test@123')
    cy.get('._255UOb4yMdP0m2K2o2ZiKH > ._nfmPejYIgKBBPi4ONjx7').contains('Sign in').click({force:true})
}
getVerifyBus()
{
    cy.get('._255UOb4yMdP0m2K2o2ZiKH > ._nfmPejYIgKBBPi4ONjx7').contains('Sign in').click({force:true})
    cy.get('._3XdD3jQFJX5vl5yLd61ujs').eq(0).should('be.visible','Please enter your email')
    cy.get('._3XdD3jQFJX5vl5yLd61ujs').eq(1).should('be.visible','Please enter your password')

}

}
export default registeration;