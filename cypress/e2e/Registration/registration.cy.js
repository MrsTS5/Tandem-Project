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
    registrationPage.dateOfBirth.type(dateOfBirth);
    registrationPage.accountEmail.should('be.visible').type(email, { force: true });
    registrationPage.securityQuestionDropdown.should('be.visible').click({ force: true });
    registrationPage.questionPetName.should('be.visible').click({ force: true });
    registrationPage.securityAnswer.should('be.visible').type("Rick", { force: true });
    registrationPage.confirmButton.should('be.visible').click({ force: true }); 
    registrationPage.termsOfUseCheckbox.should('exist').should('be.visible').click({ force: true });
    registrationPage.acknoledgementCheckbox.should('exist').should('be.visible').click({ force: true });
    registrationPage.continueButton.should('be.visible').click({ force: true });

    cy.get('h2').contains('Consents').should('be.visible');

    cy.get('[name="consents.7c5b3d01-a0a7-43ce-abdc-92aebfd6b843"]', { timeout: 10000 }).should('exist').parent().click({ force: true });

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
    registrationPage.confirmButton.should('be.visible').click({ force: true });

    // Validation message check
    registrationPage.lastNameErrorMessage.should('be.visible');
  });

});


