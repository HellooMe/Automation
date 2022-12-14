class ticketcatalog{

    getTicket()
    {
      return cy.get('[data-elid="Tickets"]')
    }
    getBuyTicket(){
       return cy.get('[data-elid="Buy tickets"]')
    }
    getpopup(){
        cy.get('[data-elid="info-popup-title"]').contains('be.visible','Locations')
        cy.get('[data-elid="info-popup-ok-button"]').click()
    }
    getRegion(){

        //cy.wait(3000)

        //cy.get('._1cdDaktgZG7HGxGLLxkUKw').should('be.visible','Select your region')
        
       // cy.wait(1000)
        //cy.get('._1iiweaVLbU5Eo1UOZRpH_N').should('be.visible','Beds and Bucks')
        //cy.wait(1000)
        cy.get('._1iiweaVLbU5Eo1UOZRpH_N').contains('Beds and Bucks').click({force:true})
        cy.wait(500)
        cy.get('[target="_self"]').contains('All Zone').click({force:true})
        cy.wait(1000)
        cy.get('._1dP3L0IGJNdhuKwfztirAZ ').eq(0).click({force:true})
        cy.wait(2000)
        cy.get(':nth-child(1) > ._2sPEHIu5NOSh4bVF9PcAqk > ._166vlZMKwrsyzgeVsE-7VG > :nth-child(3) > svg').click({force:true})

        // Checkout
        cy.get('[data-elid="navigate-to-checkout-button"]').contains('Continue to Checkout').click({force:true})
        cy.wait(1000)
        // Read More
        cy.get('.kTxFzE3pKH4flus7c51yA').should('exist')
        cy.get('._2BIglbSXgOzIjYzytXXYQT').should('exist')
        cy.get('.RP2ZSnMl7XQRA40W_oef3').click({force:true})

    }
        //Card Iframe
        getIframe2(){

            cy.wait(2000)
            cy.get('.braintree-option__label').contains('Card').click()

          cy.wait(2000)
            
            cy.get('#braintree-hosted-field-number').then((iframedata1)=>{
             const idata1 =iframedata1.contents().find('body').find('form')
             cy.wrap(idata1).as('iframe1')
            })
            cy.get('@iframe1').find('input[id="credit-card-number"]').type('4111 1111 1111 1111')
         
            cy.get('#braintree-hosted-field-expirationDate').then((iframedata2)=>{
             const idata2 =iframedata2.contents().find('body').find('form')
             cy.wrap(idata2).as('iframe2')
            })
            cy.get('@iframe2').find('input[id="expiration"]').type('08 / 2023')
         
          /* only in case when submission is done
            cy.get('#braintree-hosted-field-cvv').then((iframedata3)=>{
             const idata3 =iframedata3.contents().find('body').find('form')
             cy.wrap(idata3).as('iframe3')
            })
            cy.get('@iframe3').find('input[id="cvv"]').type('123')
            */
    }



  
  
  }
  export default ticketcatalog;