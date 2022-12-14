/// <reference types="cypress"/>
import 'cypress-iframe'
import QuickDeckformFunction from "../fixtures/PageObjectClasses/QuickDeckformFunction";
import quickTicket from "../fixtures/PageObjectClasses/quickTicket";

import register from "../fixtures/PageObjectClasses/register";
import SmartCard from "../fixtures/PageObjectClasses/SmartCard";
import Personal, { personal } from '../fixtures/PageObjectClasses/Personal';
import travel from '../fixtures/PageObjectClasses/TravelPreference';
import ticket from '../fixtures/PageObjectClasses/BookTicket';

//import testdata from "../fixtures/testdata.json";
const personaal = new Personal();
const smart = new SmartCard();
const Main = new register();
const QuickTicket = new quickTicket();
const quickDeckformFunction = new QuickDeckformFunction();
const preference = new travel();
const book = new ticket()


describe("Testing Registeration Page", () => {
  
  it('Registeration Page Negative Test Cases', () => { 
    /*
     // Negative test cases -- for empty text fields
     Main.navigate();
     Main.getSign().click();
     cy.url().should('be.equal','https://web.chiltern-uat.ormlondon.com/account/login')

   // Register Form
    Main.getRegister().click();
     cy.url().should('be.equal','https://web.chiltern-uat.ormlondon.com/account/register')
     Main.getButtonSubmit().click();

     // Validate FirstName
     
     Main.getValidateEmptyFirstName().should('have.text','First name is required')
     // Validate Sur Name
     Main.getValidateEmptySurName().should('have.text','Surname is required')
     //Validate Email
     Main.getEmailName().should('be.empty')
     Main.getValidateEmptyEmail().should('have.text','Email is required')
     // Validate email
     Main.getEmailName().type('@gmail.com')
     Main.getValidateEmptyEmail().should('have.text','Invalid email address')
     // Validate Confirm email
     Main.getConfirmEmailName().should('be.empty')
     Main.getValidateEmptyConfirmEmail().should('have.text','Confirm email is required')
     // Validate Confirm email
     Main.getConfirmEmailName().type('1@gmail.com')
     Main.getValidateEmptyConfirmEmail().should('have.text','Email addresses must match')
     //cy.log()

     // Password validations

     Main.getPasswordName().should('be.empty')
     Main.getPasswordName().clear()
     
     Main.getPasswordName().type('abc123@123')
     
     Main.getValidateEmptyPassword().should('have.text', 'Password must have at least one uppercase and one lowercase letter ')
     
     Main.getPasswordName().clear()
     
     Main.getPasswordName().type('Rbc123@')
     
     Main.getValidateEmptyPassword().should('have.text','Password must have at least eight characters')
     
     Main.getPasswordName().clear()
    
     Main.getPasswordName().type('Rbc12312')
     
     Main.getValidateEmptyPassword().should('have.text',"Password requires at least one special character e.g. ! @ # $ % ^ & * ( ) { } [ ] ")
     
     Main.getPasswordName().clear()
     Main.getPasswordName().type('Rbccccc@')
     
     Main.getValidateEmptyPassword().should('have.text','Password must have at least one number')
     */
  });
  
  it('QuickDeck Test Cases', () => { 
    /*
  // source and destination pick
    
    quickDeckformFunction.getVisitSite();
    cy.url().should('be.equal','https://web.chiltern-uat.ormlondon.com/')
    quickDeckformFunction.sourcefromtextboxClass();
    cy.wait(2000);
    quickDeckformFunction.destinationtotextboxtypeClass();
    cy.wait(2000);

   // open calander 

   //quickDeckformFunction.NavigateToNewMonth();
   //quickDeckformFunction.futureDates();
   //quickDeckformFunction.Restore();
   quickDeckformFunction.calanderOpen();

   // rail cards
   
   quickDeckformFunction.departureinClass();
   cy.wait(4000);
   quickDeckformFunction.railopenClass(); 

   // form submit
   quickDeckformFunction.SubmitButton();

    // quickdeck
   QuickTicket.departureFormElement();
    cy.wait(2000);
   QuickTicket.Delivery();
   QuickTicket.Checkout();
   QuickTicket.Payment(); 
   QuickTicket.getIframe2();
  
   
    
     */
 
  });

  it('Registeration Page Positive Test Cases', () => { 
    /*
    cy.fixture('testdata').then(testdata =>{
        
      this.testdata = testdata.firstname
    })
    */
   // visit webiste 
/*
   Main.navigate();
   Main.getSign().click();
   cy.url().should('be.equal','https://web.chiltern-uat.ormlondon.com/account/login')

   // Register Form
   Main.getRegister().click();
   cy.url().should('be.equal','https://web.chiltern-uat.ormlondon.com/account/register')

   //FirstName Field
   Main.getTextFirst().should('have.text','First name')
   //Main.getFirstName().should('not.be.empty','First name is required')
   Main.getFirstName().should('have.length.at.least',1)
   Main.getFirstName().should('have.length.at.most',64)
   Main.getFirstName().type('hamza')
   //Main.getFirstName().should('not.be.empty')

   //Surname Field

   Main.getTextSur().should('have.text','Surname')
   //Main.getFirstName().should('not.be.empty','First name is required')
   Main.getSurName().should('have.length.at.least',1)
   Main.getSurName().should('have.length.at.most',64)
   Main.getSurName().type('Ali')

   // Email Verification
   var c = Math.floor(Math.random() * 100) + 1;
   var  d=c;
   //Main.getEmail().should('have.text','Email address') --need to discuss
   Main.getEmailName().should('be.empty')
   //Main.getValidateEmptyEmail().should('have.text','Email is required')
   Main.getEmailName().should('have.length.at.least',1)
   Main.getEmailName().should('have.length.at.most',64)
   Main.getEmailName().type('hamzaali'+d+'@gmail.com')
   //Main.getEmailName().should('equal','Email is required')
   //var c = Math.floor(Math.random() * 100) + 1;
   var  d=c;
   // Confirm Email
   Main.getConfirmEmailName().should('be.empty')
   //Main.getValidateEmptyConfirmEmail().should('have.text','Confirm email is required')
   Main.getConfirmEmailName().should('have.length.at.least',1)
   Main.getConfirmEmailName().should('have.length.at.most',64)
   Main.getConfirmEmailName().type('hamzaali'+d+'@gmail.com')

   //Phone Number
   Main.getPhoneText().should('have.text','Phone number (Optional)')
   Main.getPhoneName().should('have.length.at.least',1)
   Main.getPhoneName().should('have.length.at.most',64)
   Main.getPhoneName().type('03238445151')

   // Password
  // Main.getPassword().should('have.text','Enter a password (Must be at least 8 characters long)')--need to discuss
   Main.getPasswordName().should('have.length.at.least',1)
   Main.getPasswordName().should('have.length.at.most',64)
   Main.getPasswordName().type('Ravians14@')

   // Confirm Password
  //  Main.getConfirmPassword().should('have.text','Confirm your password') --need to discuss
   Main.getConfirmPassword().should('have.length.at.least',1)
   Main.getConfirmPassword().should('have.length.at.most',64)
   Main.getConfirmPassword().type('Ravians14@')
   Main.getConfirmPassword().clear()
   Main.getConfirmPassword().type('Ravians14@')
   //Main.getValidateEmptyConfirmPassword().should('have.text','Passwords must match')
   Main.getCheckBox().check({force:true})
   Main.getButtonSubmit().click();
 */
  });
  it('SmartCard Automation',()=>{
  /*
    Main.navigate()

    Main.getSign().click()
    cy.url().should('be.equal','https://web.chiltern-uat.ormlondon.com/account/login')
    //login form 
    smart.getEmailLabel().should('have.text','Log in with your email address')
    smart.getEmailTextBox().click({force:true}).type('ayub.khan+15@ormdigital.com')

    smart.getPasswordLabel().should('have.text','Password')
    smart.getPasswordTextBox().click({force:true}).type('Pa55w0rd!')
    smart.clickButton().contains('Log in').click({force:true})
    //cy.url.should('be.equal','https://web.chiltern-uat.ormlondon.com/account/details/smartcards')
    //smart.getSuccessfulMessage().contains('have.text','Login successful')
    smart.clickSmartCard().click({force:true})
    //smart.getSmartcardMessage().contains('be.visible','My Smartcards')
    smart.getClickRegisterCard().eq(2).click({force:true})
    //cy.url.should('be.equal','https://web.chiltern-uat.ormlondon.com/account/details/smartcards/register')

    //smart.getSmartCardFormLabel().eq(0).should('have.text',' Chiltern Smartcard number ')
    // Smart Card Creation
    
    smart.getSmartcardNumber().type('026510104476')
    smart.getSmartCardPostCode().type('E62AW')
    smart.getSmartCardName().type('Ali')

    smart.getSmartCardCreatebutton().contains('Submit').click({force:true})
    smart.getSmartCardCreatebutton().contains('Submit').click({force:true})

    // screentext validations

    smart.getsmartname().should('have.text','Ali')
    smart.getsmartNumber().should('have.text','633597026510104476')
    smart.getsmartIndicator().should('have.text','Default Smartcard')
    smart.getcardholderName().contains('Mr Rehan Khan ')
    smart.getsmartcardissueDate().should('have.text','Issued on: 28/02/22')
    smart.getsmartStatus().should('have.text','Issued')
    smart.getDetails().contains('Details').click({force:true})
    smart.getEdit().contains('Edit').click({force:true})
    //smart.getRemove().contains('Remove card from my account').click({force:true})
    //smart.getconfirm().contains('Confirm').click({force:true})


    
    // Smart Card Authentication
    /*
    smart.getSmartCardCreatebutton().contains('Submit').click({force:true})
    smart.getSmartcardValidateNumber().should('be.visible','This field is required.')
    smart.getSmartcardValidatePostCode().should('be.visible','Postcode is a required field')
    smart.getSmartcardValidateName().should('be.visible','This field is required.')
    smart.getCancelCard().contains('Cancel').click({force:true})
   */

      



  });
  it('Personal Information',()=>{
    /*
    Main.navigate()

    Main.getSign().click()
    cy.url().should('be.equal','https://web.chiltern-uat.ormlondon.com/account/login')
    //login form 
    smart.getEmailLabel().should('have.text','Log in with your email address')
    smart.getEmailTextBox().click({force:true}).type('ayub.khan+15@ormdigital.com')

    smart.getPasswordLabel().should('have.text','Password')
    smart.getPasswordTextBox().click({force:true}).type('Pa55w0rd!')
    smart.clickButton().contains('Log in').click({force:true})
    
    personaal.getpersonallink().contains('Personal details').click({force:true})
    personaal.getAmountedit().contains('Edit').click({force:true})
    personaal.getEmail().clear()
    personaal.getEmail().type('ayub.khan+15@ormdigital.com')
    personaal.getConfirmemail().type('ayub.khan+15@ormdigital.com') 
    //personaal.getSavechangeaccount().contains('Save changes').click({force:true})
    personaal.getcancelaccount().contains('Cancel').click({force:true})

    //personaal.gecancelpassbutton().contains('Cancel').click({force:true})

    // profile update
    personaal.getprofileenale().contains('Edit').click({force:true})
    personaal.getFirstName().clear()
    personaal.getFirstName().type('Ayub')
    personaal.getSurName().clear()
    personaal.getSurName().type('Khan')
    personaal.getDay().type('21')
    personaal.getMonth().type('04')
    personaal.getYear().type('1996')
    personaal.getphonenumber().type('03238445151')
    //personaal.getsavechangesprofile()
    personaal.getcancelprofile().contains('Cancel').click({force:true})

    //Address
    personaal.getAddressButton().contains('Add address').click({force:true})
    personaal.getAddressName().clear()
    personaal.getAddressName().type('Ayub')
    personaal.getselectCountry().select("Afghanistan").should("have.value","0")
    personaal.getCounty().type('America')
    personaal.getCity().type('Lahore')
    personaal.getPostCode().type('123')
    personaal.getAddress().type('abcdefgh')
    //personaal.getSaveAddress()
    personaal.getCancelAddress().contains('Cancel').click({force:true})
    personaal. getpopupcancel().contains('Cancel').click({force:true})



    */

  });

  it('Travel Prefrence',()=>{

    /*

    Main.navigate()

    Main.getSign().click()
    cy.url().should('be.equal','https://web.chiltern-uat.ormlondon.com/account/login')
    //login form 
    smart.getEmailLabel().should('have.text','Log in with your email address')
    smart.getEmailTextBox().click({force:true}).type('ayub.khan+15@ormdigital.com')

    smart.getPasswordLabel().should('have.text','Password')
    smart.getPasswordTextBox().click({force:true}).type('Pa55w0rd!')
    smart.clickButton().contains('Log in').click({force:true})
    preference.getTravel().contains(' Travel preferences ').click({force:true})
    cy.url().should('be.equal','https://web.chiltern-uat.ormlondon.com/account/details/travel-preferences')
    //travel page verification
    preference.getVerifyText().contains('Travel preferences').should('be.visible')
    preference.getSeatText().eq(0).contains('Seat preferences').should('be.visible')
    preference.getSeatText().eq(1).contains('Delivery preferences').should('be.visible')
    preference.getSeatText().eq(2).contains('Travel assistance').should('be.visible')
    
    preference.getEditSeat().contains('Edit').click({force:true})
    // Seat form update
    preference.getSeatForm().select("Backward").should("have.value","1")
    preference.getPositionForm().select("Window").should("have.value","2")
    preference.getQuietForm().select("Quiet").should("have.value","1")
    preference.getSaveSeat().contains('Save changes').click({force:true})
    //preference.getCancelSeat().contains('Cancel').click({force:true})
   // Delievry Form update
    preference.getEditDelivery().contains('Edit').click({force:true})
    preference.getVending().click({force:true});
    
    preference.getSaveDelivery().contains('Save changes').click()
    
    //preference.getCancelSeat().contains('Cancel').click({force:true})
    
    
  // Travel Form update
    preference.getEditTravel().contains('Edit').click({force:true})
    preference.getEnable().click({force:true});
    
    preference.getPhone().type('03238445151')
    preference.getAssistance().type('Wish to have a good journey')
    
    //preference.getSaveTravel().contains('Save changes').click({force:true})
    preference.getCancelTravel().contains('Cancel').click({force:true}) 

    // Book Ticket page
    preference.getBokkTicket().contains('Book tickets').click({force:true})
     // source and destination pick
    cy.url().should('be.equal','https://web.chiltern-uat.ormlondon.com/')
    quickDeckformFunction.sourcefromtextboxClass();
    cy.wait(2000);
    quickDeckformFunction.destinationtotextboxtypeClass();
    cy.wait(2000);

   // open calander 

   //quickDeckformFunction.NavigateToNewMonth();
   //quickDeckformFunction.futureDates();
   //quickDeckformFunction.Restore();
   quickDeckformFunction.calanderOpen();
   // rail cards
   quickDeckformFunction.departureinClass();
   cy.wait(4000);
   quickDeckformFunction.railopenClass(); 
   // form submit
   quickDeckformFunction.SubmitButton();
    // quickdeck
   QuickTicket.departureFormElement();
    cy.wait(2000);

    
    cy.get('.header').then(($id) => {
      if ($id) {
         preference.getVendingverify()

         cy.should('exist') 
      }
    })
    
    preference.getseatpreference().then(($btn) => {
      if ($btn) {
          cy.log('id found')

          cy.get('.switch-indicator').click()
          cy.get('#seat-preferences-direction').should('exist');
          cy.get('#seat-preferences-position').should('exist');
          cy.get('#seat-preferences-quiet-coach').should('exist');
        
      }
  

   })
   */

   })

  it.only('Book Ticket',()=>{

    Main.navigate()

    Main.getSign().click()
    cy.url().should('be.equal','https://web.chiltern-uat.ormlondon.com/account/login')
    //login form 
    cy.wait(2000)
    smart.getEmailLabel().should('have.text','Log in with your email address')
    smart.getEmailTextBox().click({force:true}).type('ayub.khan+15@ormdigital.com')

    smart.getPasswordLabel().should('have.text','Password')
    smart.getPasswordTextBox().click({force:true}).type('Pa55w0rd!')
    smart.clickButton().contains('Log in').click({force:true})
    book.getLinkTicket().contains('Book tickets').click({force:true})
    cy.url().should('be.equal','https://web.chiltern-uat.ormlondon.com/')
    
    book.getselectFlex().contains('Flexi/Season tickets').click({force:true})

     // source 
    book.getSourceStation().click({force:true})
    book.getSourceType().type('ban')
    book.getSourceSelect().contains('Banbury').type('{enter}')

     // destination
    book.getDestinationStation().click({force:true})
    book.getDestinationType().type('bit')
    book.getDestinationSelect().contains('Bicester Village').type('{enter}')
    book.getCalanderClick().click({force:true})
    book.getSelectDate().click()
    book.getRail().click()
    book.getDone().click({force:true});
    book.getSubmit().contains('Buy Season Tickets').click({force:true}) 
    book.getverifysource().should('have.text','Bicester Village')
    book.getverifydestination().should('have.text','Banbury')
    book.getStandard().should('have.text','Standard')
    book.getContinue().contains('Continue').click({force:true})
    book.getTitle().select("Mr").should("have.value","4")
    book.getFirstName().type('Hamza')
    book.getSurName().type('Ali')
    book.geVerifySelected().should('exist')
    book.getSmartcard().select("Select Smartcard from your account").should("have.value","0")
    book.getSubmit1().contains('Continue').click({force:true})
    book.getReview().should("have.text","Review and pay")
    //book.getVerifyLocation().should("have.text","Bicester Village (BIT) to Banbury (BAN)'")
    //book.getEdit().contains('Edit').click({force:true})
    //book.getEdit().contains('Cancel').click({force:true})
    book.gettravel().click({force:true})
    book.getPhone().type('03238445151')
    book.getTextArea().type('Nice to travel with you')
    book.gettravel().click({force:true})

    cy.wait(3000)
    book.getContainer()

   })

})


