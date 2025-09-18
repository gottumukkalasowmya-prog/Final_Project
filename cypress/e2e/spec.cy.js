import HomePage from '../support/pageObjects/HomePage';
import CarWashPage from '../support/pageObjects/CarWashPage';
import FreeListingPage from '../support/pageObjects/FreeListingPage';
import GymPage from '../support/pageObjects/GymPage';
const home = new HomePage();
const carWash = new CarWashPage();
const freeListing = new FreeListingPage();
const gym = new GymPage();
let testdata;
beforeEach(()=>{
cy.fixture('data').then(function(data){
  testdata=data;
})
})
beforeEach(() => {
  cy.visit('https://www.justdial.com/');
});
describe('Car Wash Services Automation Suite', () => {
  it('Should test search bar functionality!!', () => {
    cy.get('#main-auto').type("car wash near me{enter}");
    cy.url().should('include','Car-Wash');
    carWash.filterByRating();
  });
 
  it('should submit Free Listing form with invalid phone', () => {
    freeListing.navigateToForm()
    freeListing.fillFormWithInvalidPhone(testdata.invalidPhone);
    freeListing.submitForm();
    freeListing.captureErrorMessage();
  });
 
  it('should handle and capture alert during form submission', () => {
    freeListing.triggerAlert();
    freeListing.captureAlertMessage();
  });
 
  it('should extract Gym sub-menu items', () => {
    gym.navigateToGym();
    gym.extractSubMenuItems();
  });
 
  it('should validate back navigation to homepage', () => {
    home.goBackToHome();
  });
 
  Cypress.on('uncaught:exception', (err, runnable) => {
  return false;
});
 
});
