import ticketcatalog from'../fixtures/PageObjectClasses/ticketcatalog';
const ticket = new ticketcatalog();
import registeration from'../fixtures/PageObjectClasses/Registeration';
const register = new registeration();
import Time from '../fixtures/PageObjectClasses/timetable';
const timetable = new Time();
 
describe("Ticket Catalog", () => {
  
    it('Registeration and Login  ', () => { 
        timetable.getNavigation();
        timetable.getTopLine().contains('Your Privacy')
        timetable.getLogo() 
        timetable.getButton().contains('Agree and proceed').click({force:true})
        cy.url().should('be.equal','https://www.preprod.arrivabus.co.uk/')
        cy.wait(1000)
        
        timetable.getArrivaLogo().should('be.visible')
        timetable.getNavVerified() 
        
        //Registeration
        register.getLoginButton()
        
        //cy.wait(1000)
        /*
        //register.getSigntext().should('have.text','Sign in')
        //register.getCreateAccountText().contains('Create an account')
      
        register.getCreateAccountText().contains('Create an account').click()
        //Registeration
        //register.getVerifyForm()
        register.getFillForm()
        
       
        //Login
        register.getVerifyBus()
         */
        cy.wait(2000)
        register.getLoginBus()
        cy.wait(2000)
        
        // form 
        //register.getFillForm()
        ticket.getTicket().trigger('mouseover')
        ticket.getBuyTicket().contains('Buy tickets').click({force:true})
        
        cy.url().should('be.equal', 'https://www.preprod.arrivabus.co.uk/buy-tickets')
        //cy.wait(1000)
        //ticket.getpopup().contains('be.visible','Locations')
        
        ticket.getRegion()
        cy.wait(6000)
        ticket.getIframe2()
        

        


         

    })





})