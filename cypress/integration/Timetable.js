import Time from '../fixtures/PageObjectClasses/timetable';
const timetable = new Time();

describe("Time-Table", () => {
  
    it('TimeTable ', () => { 

        timetable.getNavigation();
        timetable.getTopLine().contains('Your Privacy')
        timetable.getLogo() 
        timetable.getButton().contains('Agree and proceed').click({force:true})
        cy.url().should('be.equal','https://www.preprod.arrivabus.co.uk/')
        cy.wait(3000)
        timetable.getArrivaLogo().should('be.visible')
        timetable.getNavVerified()
        //timetable.getPopup().contains('has.visible','location')
        timetable.getBusClick().contains('Find my bus').click({force:true})
        timetable.getBusContainer()
        timetable.getBusType().type('126')
        cy.wait(2000)
        timetable.getBusColumn().contains('126 Leicester to Coalville').type('{enter}') 
        timetable.getBusService().should('have.text','Find services')
        cy.wait(2000)
        timetable.getBusService().contains('Find services').click({force:true})
        timetable.getBusRoute().should('be.visible','Bus route')
        //timetable.getverifytext()
        timetable.getSquare().should('exist')
        cy.wait(2000)
        timetable.getVerifyMap() 
        cy.wait(2000)
        timetable.getverifytext()
        timetable.getclickpdf().click() 

    });
  })