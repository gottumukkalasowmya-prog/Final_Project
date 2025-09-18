class HomePage {
  navigateViaMenu(menuItem) {
    cy.contains(menuItem).click();
  }
 
  verifyHomePageLoaded() {
    cy.url().should('include', 'home');
  }
goBackToHome() {
    cy.go('back');
  }
}
export default HomePage;