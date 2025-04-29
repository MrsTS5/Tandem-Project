import login from "../../page_objects/login";
import registrationPage from "../../page_objects/registration.page";

describe('Login', () => {
  let userData;

  before(() => {
    cy.fixture('data').then((data) => {
      userData = data.user;
    });
  });

  beforeEach(() => {
    registrationPage.visitRegistrationPage();
  });

  it('Should login with existing User account', () => {
    login.loginEmail.type(userData.Email);
    login.loginPassword.type(userData.Password);
    login.loginIn.click();
  });

  it('Should log out', () => {
    login.loginEmail.type(userData.Email);
    login.loginPassword.type(userData.Password);
    login.loginIn.click();
 
    cy.origin('https://source.tandemdiabetes.com', () => {
      cy.get('h1, h2, h3, [aria-label="Profile Avatar"]', { timeout: 10000 }).should('be.visible');
      cy.get('[aria-label="Profile Avatar"]').click({ force: true });
      cy.contains('Log Out').should('be.visible').click();
    });
    
  });

});






