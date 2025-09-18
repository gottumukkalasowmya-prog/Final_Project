class FreeListingPage {
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
 
  triggerAlert() {
    cy.window().then((win) => {
      win.alert('Invalid input!');
    });
  }
 
  captureAlertMessage() {
    cy.on('window:alert', (str) => {
      expect(str).to.equal('Invalid input!');
    });
  }
}
 
export default FreeListingPage;