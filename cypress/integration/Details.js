import registeration from'../fixtures/PageObjectClasses/Registeration';
import Time from '../fixtures/PageObjectClasses/timetable';
import Point from '../fixtures/PageObjectClasses/point';
import details from '../fixtures/PageObjectClasses/Details'
import Verification from '../fixtures/PageObjectClasses/myaccountverify'
import ticketcatalog from'../fixtures/PageObjectClasses/ticketcatalog';
const ticket = new ticketcatalog();
const p = new Point();
const timetable = new Time();
const register = new registeration();
const d = new details();
const v = new Verification();

 
describe("Account verification", () => {
    it('Details', () => {
    
         cy.visit('https://www.preprod.arrivabus.co.uk/')

         timetable.getTopLine().contains('Your Privacy')
         timetable.getLogo() 

         timetable.getButton().contains('Agree and proceed').click({force:true})
         cy.wait(1000)

         register.getLoginButton()
         timetable.getNavVerified();

         cy.wait(2000)
         //ticket.getpopup()
         register.getLoginBus() 
         cy.wait(2000)
         v.getArriva()
         d.getDetails()
         d.getUpdate()
         d.getrestore()
    })
})