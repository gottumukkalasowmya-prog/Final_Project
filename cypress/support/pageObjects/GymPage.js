class GymPage {
  navigateToGym() {
    cy.visit('https://www.justdial.com/Chennai/Gyms');
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
