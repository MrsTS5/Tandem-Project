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
      cy.get('body').then(($body) => {
        if ($body.find('.MuiDialog-container').length > 0) {
          cy.get('.MuiDialog-container button').click({ force: true });
        }
      });
  
      cy.get('[aria-label="Profile Avatar"]').should('be.visible').click({ force: true });
      
      cy.contains('Log Out').should('be.visible').click({ force: true });
    });
  
    cy.url({ timeout: 10000 }).should('include', 'sso.tandemdiabetes.com');
    cy.url().should('include', 'logoutId=');
  });
  

  // after(() => {
  //   cy.clearCookies();
  //   cy.clearLocalStorage();
  //   cy.log('Cleaned up cookies and local storage after login tests');
  // });

});






