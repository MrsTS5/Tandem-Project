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

  it('Should not login with invalid email', () => {
    login.loginEmail.type(userData.invalidEmail);
    login.loginPassword.type(userData.Password);
    login.loginIn.click();
    login.errorMessage.should('be.visible');
  });

  it('Should not Login with invalid password', () => {
    login.loginEmail.type(userData.Email);
    login.loginPassword.type(userData.numericOnlyPassword);
    login.loginIn.click();
    login.errorMessage.should('be.visible');
  });
  
  after(() => {
    cy.clearCookies();
    cy.clearLocalStorage();
    cy.log('Cleaned up cookies and local storage after login tests');
  });

});
