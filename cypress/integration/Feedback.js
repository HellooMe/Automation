import Time from '../fixtures/PageObjectClasses/timetable';
const timetable = new Time();
import FeedBack from '../fixtures/PageObjectClasses/feedback'
const f = new FeedBack()

describe("FeedBack Form", () => {
  
    it('Visit Website', () => { 
     cy.visit('https://www.preprod.arrivabus.co.uk/')
     
        timetable.getTopLine().contains('Your Privacy')
        timetable.getLogo() 
        timetable.getButton().contains('Agree and proceed').click({force:true})
        cy.wait(1000)

    })
    it('Visit Menu', () => { 
        cy.wait(1000)
        f.getService().trigger('mouseover')
        f.getGreenLine().trigger('mouseover')
        f. getComponent().contains('All Component').click({force:true})

    })
    it('Enquiry form negative test case ', () => { 
       cy.wait(500)
      //negative test case
       //f.getvalidatemessage()
       // positive test case
       f.getformfields()

    })





})