import { faker } from '@faker-js/faker';
import registrationPage from '../../fixtures/page_objects/registration.page';

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
    cy.visit('https://sso.tandemdiabetes.com/registration/personal_standard')
    email = faker.internet.email();
    cy.contains('button', 'Accept Performance Cookies', { timeout: 10000 }).click();
    cy.get('[id="country"]').click();
    cy.get('[data-value="US"]').click();
    cy.get('button[type="button"]').contains('Continue').click();
  });

  it('Should Register new account', () => {
    registrationPage.firstName.type(firstName);
    registrationPage.lastName.type(lastName);
    registrationPage.countryList.click();
    registrationPage.countryUS.click();
    registrationPage.registrationStateDropdown.click();
    registrationPage.stateCA.click();
    registrationPage.dateOfBirth.type(dateOfBirth)
    registrationPage.accountEmail.type(email);
    registrationPage.securityQuestionDropdown.click();
    registrationPage.questionPetName.click();
    registrationPage.securityAnswer.type("Rick");
    registrationPage.confirmButton.click();
    registrationPage.termsOfUseCheckbox.click();
    registrationPage.acknoledgementCheckbox.click();
    registrationPage.continueButton.click();
  });

});
