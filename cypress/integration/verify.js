import Verification from '../fixtures/PageObjectClasses/myaccountverify'
import registeration from'../fixtures/PageObjectClasses/Registeration';
import Time from '../fixtures/PageObjectClasses/timetable';
import Point from '../fixtures/PageObjectClasses/point';
const p = new Point();
const timetable = new Time();
const register = new registeration();
const v = new Verification();
 
describe("Account verification", () => {
    it('Verification ', () => {
    
         cy.visit('https://web-qa.test.acex.tech/')

         timetable.getTopLine().contains('Your Privacy')
         timetable.getLogo() 

         timetable.getButton().contains('Agree and proceed').click({force:true})
         cy.wait(1000)

         register.getLoginButton()
         timetable.getNavVerified();

         cy.wait(2000)
         register.getLoginBus()
         cy.wait(2000)

         v.getArriva()
         v.getuser()
         v.getbutton()
         cy.wait(2000)
         
         v.getAddress()
         v.getbutton1()
         v.getbutton2()
         v.getWork()
         
         v.getbutton3()
         v.getPlaces()
         v.getButton4()

         v.getJourney()


         
         //p.getSource()
         

    

     })
})