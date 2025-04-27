import login from "../../fixtures/page_objects/login";

describe('Login', () => {
  let userData;

  before(() => {
    cy.fixture('data').then((data) => {
      userData = data.user;
    });
  });
  beforeEach(() => {
    cy.visit('https://sso.tandemdiabetes.com');
    cy.errorHandler();
    cy.contains('button', 'Accept Performance Cookies', { timeout: 10000 }).click();
    cy.get('[id="country"]').click();
    cy.get('[data-value="US"]').click();
    cy.get('button[type="button"]').contains('Continue').click();
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
      cy.get('[aria-label="Profile Avatar"]').should('be.visible').click();
      cy.contains('Log Out').should('be.visible').click();
    });
    cy.url({ timeout: 10000 }).should('include', 'sso.tandemdiabetes.com');
    cy.url().should('include', 'logoutId=');
  });
});






