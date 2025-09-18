class CarWashPage {
  filterByRating() {
    cy.get('#all_filters_btn').click();
    cy.get('[aria-label="Rating"]').click();
    cy.get('[aria-label="4.0+"]').click();
    cy.get('.more_filter_btnbox').within(() => {
    cy.get('.bluefill_animate').click();
  });
    cy.wait(3000)
    cy.get('.resultbox').each(($el, index) => {
  if (index < 5) {
    const name = $el.find('h3.resultbox_title_anchor').text().trim()
    const phone = $el.find('span.callcontent.callNowAnchor').text().trim()
    cy.log(`Result ${index + 1}`)
    cy.log(`Name: ${name}`)
    cy.log(`Phone: ${phone}`)
  }
})
  }
}
export default CarWashPage;