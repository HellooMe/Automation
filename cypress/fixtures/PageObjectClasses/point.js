import dayjs from "dayjs"
class Point{

 getSource(){

     cy.get('.search-select__control').eq(0).click({force:true})
     cy.wait(2000)
     //cy.get('._1CotQ4FEPteVJVbeWCJyim > span').contains('Okay').click({force:true})
     cy.get('.search-select').eq(0).click({force:true}).type('Halewood Portway')
     cy.wait(5000)
     cy.get('#react-select-3-option-0').contains('Halewood Portway').click({force:true})
        
 } 
 getSource1(){

    cy.get('.search-select__control').eq(1).click({force:true})
    cy.wait(2000)
    
    cy.get('.search-select').eq(1).click({force:true}).type('Hale Aran Close')
    cy.wait(5000)
    cy.get('#react-select-4-option-0').contains('Hale Aran Close').click({force:true})
       
} 
getCalander(){
    cy.get('#DPdefault').click({force:true})
    cy.wait(1000)
    // in case of pick delevery comment below lines
    cy.get('._nfmPejYIgKBBPi4ONjx7').contains('Done').click({force:true})
    cy.get('._nfmPejYIgKBBPi4ONjx7').contains('Plan my journey').click({force:true})
}
getselectedDate(){
    
    const date = new Date();
    const date1 = date.getDate();
    const date2 = (date.getDate()-1);
    cy.get('#DPdefault').click({force:true})
    
    this.currentdate=dayjs();
   this.newDate = dayjs();
   this.newDate= this.newDate.add(61, 'days');
   this.newYear = this.newDate.format('YYYY');
   this.newMonth = this.newDate.format('MMMM');
   this.newDay = this.newDate.format('D');
  
  if(this.newDate.format('MMMM')!==this.currentdate.format('MMMM')){
    this.currentdate.add(1,'month');
    cy.get('#next-month-handler').click();
    cy.get('#next-month-handler').click();
   
 }
 else{
    cy.log(this.newMonth)
    
 }
}
VerifyDatesInDatePicker(){
   
    const date = new Date();
    const date1 = date.getDate();
    const date2 = (date.getDate()-1);
   cy.get('.react-datepicker__month').find('.react-datepicker__day').filter(':contains('+this.newDay+')').eq(0).should('not.be.enabled') 
   //.contains(+date2).should('be.disabled');
}

getPlan(){
    cy.get('.c92d6CaoK3CaGqz3m97MH').contains('Bus departs at').click({force:true})
}
getDiv(){

    cy.get('._1Ls7L4IG3SdzfnJApyxYzG').then((body) => {
       var number = 0;
        if(body.length>0){
            cy.get('._1Ls7L4IG3SdzfnJApyxYzG').eq(number).should('be.visible')
        number++;
             if(number<=body.length)
             {    
                this.getDiv();
               
             }
         
        }
    })
    

}

getVerifyJourney(){
 
    // Assertions
    cy.get('.search-select__single-value').eq(0).should('exist').and('have.text','Halewood Portway')
    cy.get('.search-select__single-value').eq(1).should('exist').and('have.text','Hale Aran Close')
    cy.get('.D9kIn_IVMyRexfVqJ_i6y').should('exist').and('have.text','Departing 12 Dec 2022')
    //cy.get('._31rQ751Nvg7OHsoayVl0SY').children()
    
    
    
   //cy.get('._1HLbyfas793NJHm8vXSbJ5').contains('Later buses').click({force:true})
}
getJourney(){
    cy.get('._1AM2kQOgVkfUl-5UP-E0rx').should('exist')
}
getVerifyBack(){
    cy.get('._3fp-RO_UAcYLRGQ3it0kNp').click()
}
getButton(){
    cy.get('._nfmPejYIgKBBPi4ONjx7').contains('Buy tickets').click({force:true})
}
getBuyTicket(){
    cy.get('._1DebFuQJHF4VuR7Tx7YtGY').eq(1).click({force:true})
}
getBasketButton(){
    cy.get('[data-elid="top-line-basket"]').click({force:true})
}
getSubmitPayment(){
    cy.get('#submit-payment-button').contains('Confirm Payment').click({force:true})
}
getCardinalIframe(){

    cy.wait(2000)
            cy.get('#Cardinal-ElementContainer').should('exist')

          cy.wait(2000)
             
          cy.get('#Cardinal-CCA-IFrame').then((iframedata1)=>{
             const idata1 =iframedata1.contents().find('body').find('form')
             cy.wrap(idata1).as('iframe1')
            })
            cy.get('@iframe1').find('.input-field').type('1234')

            cy.get('#Cardinal-CCA-IFrame').then((iframedata2)=>{
                const idata1 =iframedata2.contents().find('body').find('form')
                cy.wrap(idata1).as('iframe2')
               })
               cy.get('@iframe2').find('input[type="submit"]').contains('SUBMIT').click({force:true})

}

}
export default Point;