import HomePage from '../support/pageObjects/HomePage';
import CarWashPage from '../support/pageObjects/CarWashPage';
import FreeListingPage from '../support/pageObjects/FreeListingPage';
import GymPage from '../support/pageObjects/GymPage';
import testData from '../fixtures/data.json';

const home = new HomePage();
const carWash = new CarWashPage();
const freeListing = new FreeListingPage();
const gym = new GymPage();

describe('Car Wash Services Automation Suite', () => {
  it('Deepika - should test search bar functionality', () => {
    cy.visit('https://www.justdial.com/');
    cy.get('#main-auto').type("car wash near me{enter}");
    cy.url().should('include','Car-Wash');
    carWash.filterByRating();
  });
  
 
  
  it('Deepika - should submit Free Listing form with invalid phone', () => {
    cy.visit('https://www.justdial.com/Free-Listing');
    freeListing.fillFormWithInvalidPhone(testData.invalidPhone);
    freeListing.submitForm();
    freeListing.captureErrorMessage();
  });

  it('Bindu - should handle and capture alert during form submission', () => {
    freeListing.triggerAlert();
    freeListing.captureAlertMessage();
  });

  it('Bindu - should extract Gym sub-menu items', () => {
    gym.navigateToGym();
    gym.extractSubMenuItems();
  });

  
  it('Renuka - should validate back navigation to homepage', () => {
    home.goBackToHome();
    
  });
  Cypress.on('uncaught:exception', (err, runnable) => {
  // Prevent Cypress from failing the test
  return false;
});

});
