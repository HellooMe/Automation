import Time from '../fixtures/PageObjectClasses/timetable';
const timetable = new Time();
import registeration from'../fixtures/PageObjectClasses/Registeration';
const register = new registeration();

describe("Ticket Catalog", () => {
  
    it('Ticket Catalog ', () => { 
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
        cy.wait(1000)
        register.getSigntext().should('have.text','Sign in')
        register.getCreateAccountText().contains('Create an account')
      /*
        register.getCreateAccountText().contains('Create an account').click()
        //Registeration
        //register.getVerifyForm()
        register.getFillForm()
        */
       /*
        //Login
        register.getVerifyBus()
        */
        register.getLoginBus()

        // form 
        //register.getFillForm()
         

    })





})