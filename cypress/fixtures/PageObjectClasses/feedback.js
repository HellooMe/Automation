/*
data-elid="Services & timetables"
*/ 

class FeedBack{

    getService(){
     return cy.get('[data-elid="Services & timetables"]')
    }
    getGreenLine(){
        return cy.get('[data-elid="Greenline"]')
    }
    getComponent(){
        return cy.get('[data-elid="All Component"]')
    }
    
    getvalidatemessage(){
        
        cy.get('[type="submit"]').contains('Send').click({force:true})
        cy.get('#first_name').click()
        cy.get('#last_name').click()
        cy.get('#contact_email_address').click()
        cy.get('#contact_number').click()
        cy.get('#publication_or_organisation').click()
        cy.get('#summary_of_enquiry').click()
        cy.get('#deadline_for_response_if_applicable_').click()
        
        var number = 0;
        while(number<6){
        cy.get('.B_QczvGBwOM0e7yf7CrA6').children().eq(number).contains('Mandatory Field').should('exist')
        number++;
        
        }
        
    }
    getformfields(){

        cy.get('#first_name').type('Hamza')
        

        cy.get('#last_name').type('Ali')


        cy.get('#contact_email_address').type('hamzaalihussain@ucp.edu.pk')


        cy.get('#contact_number').type('03238445151')


        cy.get('#publication_or_organisation').type('Home')


        cy.get('#summary_of_enquiry').type('tickets')


        cy.get('#deadline_for_response_if_applicable_').type('nill')


    }
}
export default FeedBack;