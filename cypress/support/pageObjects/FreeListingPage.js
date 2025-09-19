class FreeListingPage {
  visit(){
    cy.visit('https://www.justdial.com/')
  }
  navigateToForm() {
    cy.get('#header_freelisting').click()
  }
  fillFormWithInvalidPhone(phone) {
    cy.get('input[name="pincode"]').eq(0).type(phone);
   
  }
  submitForm() {
    cy.contains("Start Now").click();
  }
  captureErrorMessage() {
    cy.get('.entermobilenumber_error__text__uPM09').should('be.visible').then($text=>{
      cy.log($text.text());
    })
  }
}
 
export default FreeListingPage;
