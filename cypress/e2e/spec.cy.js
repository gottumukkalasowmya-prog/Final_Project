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
  cy.wait(2000);
})
})
describe('Car Wash Services Automation Suite', () => {
  it('finding nearby car wash services', () => {
    carWash.visit();
    carWash.filterByRating();
  });
 
  it('should submit Free Listing form with invalid phone', () => {
    freeListing.visit();
    freeListing.navigateToForm()
    freeListing.fillFormWithInvalidPhone(testdata.invalidPhone);
    freeListing.submitForm();
    freeListing.captureErrorMessage();
  });

  it('extract Gym sub-menu items', () => {
    gym.visit();
    gym.navigateToGym();
    gym.extractSubMenuItems();
    gym.filterRecords();
  });
 
  it('extract elements in popularcategory', () => {
    home.visit();
    home.verifyHomePageLoaded();
    home.popularCategory();
    home.navigateToPhotographer();
    home.goBackToHome();
  });
 
  Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
});
 
});
