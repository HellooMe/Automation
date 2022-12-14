import ticketcatalog from'../fixtures/PageObjectClasses/ticketcatalog';
const ticket = new ticketcatalog();
import registeration from'../fixtures/PageObjectClasses/Registeration';
const register = new registeration();
import Time from '../fixtures/PageObjectClasses/timetable';
const timetable = new Time();
import print from '../fixtures/PageObjectClasses/Print';
const p = new print();

describe("Ticket Catalog", () => {
  
    it('Print At Home', () => { 
        cy.visit('https://www.preprod.arrivabus.co.uk/')
        //timetable.getNavigation();
        timetable.getTopLine().contains('Your Privacy')
        timetable.getLogo() 
        timetable.getButton().contains('Agree and proceed').click({force:true})
        cy.wait(2000)
        //cy.get('[data-elid="info-popup-ok-button"]').contains('Okay').click({force:true})
        timetable.getArrivaLogo().should('be.visible')
        timetable.getNavVerified() 
        
        //Registeration
        register.getLoginButton()
        cy.wait(2000)
        register.getLoginBus()
        cy.wait(2000)
        
        // form 
        //register.getFillForm()
        ticket.getTicket().trigger('mouseover')
        ticket.getBuyTicket().contains('Buy tickets').click()
        p.getGreenLine()
        cy.wait(4000)
        //cy.get('[data-braintree-id="toggle"]').click()
        cy.wait(2000)
        ticket.getIframe2()
    })


    })

