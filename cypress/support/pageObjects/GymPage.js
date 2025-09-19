class GymPage {
  visit(){
    cy.visit('https://www.justdial.com/')
  }
  navigateToGym() {
    cy.get('[title="Gym in Mumbai"]').eq(0).click();
  }
  extractSubMenuItems() {
    const items = [];
    cy.get('#filter_ul').each(($el) => {
      items.push($el.text());
    }).then(() => {
      cy.log('Gym Sub-menu Items:', items);
    });
  }
  filterRecords(){
    cy.get('#all_filters_btn').click();
    cy.get('[aria-label="Distance"]').click();
    cy.get('[aria-label="24 Hours Open"]').click();
    cy.get('.more_filter_btnbox').within(() => {
    cy.get('.bluefill_animate').click();
    });
    cy.get('.resultbox').should('have.length',10);
  }
}
 
export default GymPage;
