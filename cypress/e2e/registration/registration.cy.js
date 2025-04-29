import { faker } from '@faker-js/faker';
import registrationPage from '../../page_objects/registration.page';
import commonPage from '../../page_objects/common.page';

let email;
const password = faker.internet.password();
const firstName = faker.person.firstName();
const lastName = faker.person.lastName();
const dateOfBirth = faker.date.birthdate({ min: 18, max: 90, mode: 'age' }).toLocaleDateString('en-US');

describe('Registration', () => {

  beforeEach(() => {
    cy.visit(Cypress.env('loginUrl') + '/registration/personal_standard');
    email = faker.internet.email();
    commonPage.acceptCookiesAndSelectCountry('US');
  });

  it('Should Register new account', () => {
    registrationPage.firstName.type(firstName);
    registrationPage.lastName.type(lastName);
    registrationPage.countryList.click();
    registrationPage.countryUS.click();
    registrationPage.registrationStateDropdown.click();
    registrationPage.stateCA.click();
    registrationPage.dateOfBirth.type(dateOfBirth)
    registrationPage.accountEmail.should('be.visible').type(email);
    registrationPage.securityQuestionDropdown.click();
    registrationPage.questionPetName.click();
    registrationPage.securityAnswer.type("Rick");
    registrationPage.confirmButton.click();
    registrationPage.termsOfUseCheckbox.click();
    registrationPage.acknoledgementCheckbox.click();
    registrationPage.continueButton.click();
  });

  it.only('Should not register with empty last name field', () =>{
    registrationPage.firstName.type(firstName);
    registrationPage.countryList.click();
    registrationPage.countryUS.click();
    registrationPage.registrationStateDropdown.click();
    registrationPage.stateCA.click();
    registrationPage.dateOfBirth.type(dateOfBirth)
    registrationPage.accountEmail.type(email, { force: true });
    registrationPage.securityQuestionDropdown.click();
    registrationPage.questionPetName.click();
    registrationPage.securityAnswer.type("Rick");
    registrationPage.confirmButton.click();
    registrationPage.lastNameErrorMessage.should('be.visible');
  });

  after(() => {
    cy.clearCookies();
    cy.clearLocalStorage();
    cy.log('Cleaned up cookies and local storage after registration tests');
  });

});
