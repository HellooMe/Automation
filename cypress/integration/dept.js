
import Departure from '../fixtures/PageObjectClasses/livedeparture';
import Time from '../fixtures/PageObjectClasses/timetable';
const timetable = new Time();
const dept = new Departure();

function mockLocation(latitude, longitude) {

    return {
    
            onBeforeLoad(win) {
    
                cy.stub(win.navigator.geolocation, "getCurrentPosition").callsFake((cb, err) => {
    
            if (latitude && longitude) {
    
                return cb({ coords: { latitude, longitude } });
    
    }
    
             throw err({ code: 1 });
    
            });
            
                }
    
                    };
    
    }
describe("Departure", () => {
  
    it('Departure', () => { 
    
     cy.visit('https://web-qa.test.acex.tech/', mockLocation(52.9221,-1.4713))

     timetable.getTopLine().contains('Your Privacy')
     //timetable.getLogo() 
     timetable.getButton().contains('Agree and proceed').click({force:true})

     cy.wait(4000)
     //dept.getDeparture().contains('Live departures near me')
     dept.getDropDown().eq(0).click({force:true})
     dept.getDropDown().contains('Derby Bus Station').click({force:true})
     cy.wait(8000)

     dept.getDiv().eq(0).should('exist')
     dept.getButton().contains('See more live departures').click({force:true})
     cy.wait(10000)
     dept.getMenu().should('exist')
     dept.getselect().contains('Derby Bus Station').click({force:true})
     //dept.gettext().should('exist')
     cy.wait(2000)
     dept.getverifytext().should('have.text','Derby Bus Station')
     dept.getverifylast().should('have.text','Rose Hill Ivy Square')


    })









})

