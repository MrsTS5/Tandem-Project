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

  it('Should not login with ', () => {
    login.loginEmail.type(userData.Email);  
    login.loginPassword.type(userData.Password);  
    login.loginIn.click();
    cy.url({ timeout: 10000 }).should('include', 'sso.tandemdiabetes.com');
  });

  it('Should log out', () => {
      login.loginEmail.type(userData.Email);  
      login.loginPassword.type(userData.Password);  
      login.loginIn.click();
    
      cy.url({ timeout: 15000 }).should('include', 'source.tandemdiabetes.com');
    
      cy.origin('https://source.tandemdiabetes.com', () => {
        cy.get('[aria-label="Profile Avatar"]', { timeout: 10000 }).should('be.visible').click();
        cy.contains('Logout', { timeout: 10000 }).should('be.visible').click();
      });
      cy.url({ timeout: 10000 }).should('include', 'sso.tandemdiabetes.com');
      cy.url().should('include', 'logoutId='); 
    });
  }); 