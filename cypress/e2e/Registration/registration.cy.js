import { faker } from '@faker-js/faker';
import registrationPage from '../../page_objects/registration.page';
import commonPage from '../../page_objects/common.page';

let email;
const password = faker.internet.password();
const firstName = faker.person.firstName();
const lastName = faker.person.lastName();
const dateOfBirth = faker.date.birthdate({ min: 18, max: 90, mode: 'age' }).toLocaleDateString('en-US');

describe('Registration', () => {
  before(() => {
    cy.errorHandler();
});

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
    registrationPage.dateOfBirth.type(dateOfBirth);
    registrationPage.accountEmail.should('be.visible').type(email, { force: true });
    registrationPage.securityQuestionDropdown.should('be.visible').click({ force: true });
    registrationPage.questionPetName.should('be.visible').click({ force: true });
    registrationPage.securityAnswer.should('be.visible').type("Rick", { force: true });
    registrationPage.confirmButton.should('be.visible').click({ force: true }); 
    // registrationPage.termsOfUseCheckbox.should('be.visible').click();
    // registrationPage.acknoledgementCheckbox.should('be.visible').click();
    // registrationPage.continueButton.should('be.visible').click({ force: true });
  });

  it('Should not register with empty last name field', () => {
    registrationPage.firstName.type(firstName);
    registrationPage.countryList.click();
    registrationPage.countryUS.click();
    registrationPage.registrationStateDropdown.click();
    registrationPage.stateCA.click();
    registrationPage.dateOfBirth.type(dateOfBirth);
    registrationPage.accountEmail.should('be.visible').type(email, { force: true }); 
    registrationPage.securityQuestionDropdown.should('be.visible').click({ force: true });
    registrationPage.questionPetName.should('be.visible').click({ force: true });
    registrationPage.securityAnswer.should('be.visible').type("Rick", { force: true });
    registrationPage.confirmButton.click({ force: true });

    // Validation message check
    registrationPage.lastNameErrorMessage.should('be.visible');
  });

});


