class GymPage {
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
}
 
export default GymPage;
