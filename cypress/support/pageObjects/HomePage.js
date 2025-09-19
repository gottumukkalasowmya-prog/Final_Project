class HomePage {
  visit(){
    cy.visit('https://www.justdial.com/')
  }
  verifyHomePageLoaded() {
    cy.url().should('include', '.justdial');
  }
  popularCategory(){
    cy.get('.home_hotkey_button').click()
    const list=[]
    cy.get('.sidemenu_catelist').each(($el)=>{
     list.push($el.text());
     }).then(() => {
      cy.log('Popular items:' + list);
    });
  }
  navigateToPhotographer(){
    cy.get('#searchmenu').type('Photographers').click()
    cy.contains('Photographers').click();
    cy.url().should('include','Photographers')
  }
  goBackToHome() {
    cy.go('back');
  }
}
export default HomePage;
