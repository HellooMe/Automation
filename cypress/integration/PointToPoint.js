
import Point from '../fixtures/PageObjectClasses/point';
const p = new Point();
import registeration from'../fixtures/PageObjectClasses/Registeration';
const register = new registeration();
import Time from '../fixtures/PageObjectClasses/timetable';
const timetable = new Time();
import ticketcatalog from'../fixtures/PageObjectClasses/ticketcatalog';
const ticket = new ticketcatalog();

describe("Point", () => {
  
    it('Point', () => { 

        cy.visit('https://www.preprod.arrivabus.co.uk/authorization/sign-in')
        //timetable.getNavigation();
        timetable.getTopLine().contains('Your Privacy')
        timetable.getLogo() 
        timetable.getButton().contains('Agree and proceed').click({force:true})
        cy.wait(1000)
        register.getLoginButton()

        cy.wait(1000)
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

        timetable.getNavVerified();
        cy.wait(4000)
        register.getLoginBus()
        cy.wait(5000)
        p.getSource()
        p.getSource1()
        //cy.get('._1CotQ4FEPteVJVbeWCJyim > span').contains('Okay').click({force:true})

        // Date Picker Calander
        //p.getselectedDate()
        //p.VerifyDatesInDatePicker()
        //p.NavigateToNewMonth()
        p.getCalander()
        
        cy.wait(6000)
        p.getVerifyJourney()
        
        
        p.getPlan()
        cy.wait(3000)
        //later buses
       // p.getVerifyJourney()
        
        p.getJourney()
        cy.wait(1000)
        
        p.getButton()
        cy.wait(2000)
        p.getBuyTicket()
        
        p.getBasketButton()
        cy.wait(10000)
        
        //payment
        //ticket.getIframe2()
        cy.wait(10000)
        p.getSubmitPayment()
        p.getCardinalIframe()
        
        //cy.url().should('be.equal', 'https://www.preprod.arrivabus.co.uk/buy-tickets')

    })




})