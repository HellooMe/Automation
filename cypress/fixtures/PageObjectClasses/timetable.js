export class Time{

    getNavigation(){
        return cy.visit('https://www.preprod.arrivabus.co.uk/')
    }
    getTopLine(){
       return  cy.get('.top_line')
    }
    getLogo(){
        cy.get('.top_line').find('img').should('have.attr', 'src', 'https://arrivabus.prod.acquia-sites.com/sites/default/files/2020-06/aukb_logo_154x62.png')
    }
    getButton(){
       return  cy.get('#consent_prompt_submit')
    }
    getArrivaLogo(){
        return cy.get('[data-elid="ariva-logo"]')
    }
    getNavVerified(){
        cy.wait(1000)
        //cy.get('[data-elid="Services & timetables"]').should('have.text','Services & timetables')
        cy.wait(1000)
        
        cy.get('[data-elid="Locations"]').should('have.text','Locations')
        cy.wait(1000)
        cy.get('[data-elid="Tickets"]').should('have.text','Tickets')
        cy.wait(1000)
        cy.get('[data-elid="News"]').should('have.text','News')
        cy.wait(1000)
        cy.get('[data-elid="Help"]').should('have.text','Help')
        
        cy.wait(1000)   
    }
    getPopup(){
        return cy.get('[data-elid="info-popup"]')
    }
    getBusClick(){
        return cy.get('._2pveK8thUr2h2Vk11GZg6M')
    }
    getBusContainer(){
         cy.get('.HA1judLdgkgyIvi3uJxw8').should('be.visible')
         //cy.get('.search-select__control css-yk16xz-control').should('be.visible')
    }
    getBusType(){
        return cy.get('.search-select__control')
    }
    getBusColumn(){
        return cy.get('#react-select-5-option-0')
    }
    getBusService(){
        return cy.get('#button-find-services')
    }
    getBusRoute(){
        return cy.get('._3yRQ3kr982HrFm7CEzZH-h')
    }
    getverifytext()
    {
        //cy.get('._2HbwNcitJugmsIlP507Fol > :nth-child(1) > span').contains('Coalville Memorial Square')
        cy.get('._3pHaPri1iKBc2irBLhuP59 > ._nfmPejYIgKBBPi4ONjx7').click({forc:true})
    }
    getSquare(){
        return cy.get('._3k294I4dKHOh4R1C8b_fun')
    }
    getVerifyMap(){
        cy.get('[style="z-index: 3; position: absolute; height: 100%; width: 100%; padding: 0px; border-width: 0px; margin: 0px; left: 0px; top: 0px; touch-action: pan-x pan-y;"]').should('exist')
    }
    getclickpdf(){
        return cy.contains('126 Leicester to Coalville (from 22 Oct 2022)')
    }
}
export default Time;