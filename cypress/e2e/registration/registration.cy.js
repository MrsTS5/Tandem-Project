import { faker } from '@faker-js/faker';
import registrationPage from '../../fixtures/page_objects/registration.page';

let email;
const password = faker.internet.password();
const firstName = faker.person.firstName();
const lastName = faker.person.lastName();

describe('Registration', () => {
  before(() => {
    cy.errorHandler(); 
  });

  beforeEach(() => {
    cy.visit('https://source.tandemdiabetes.com/'); // ✅ go straight to the source page
    email = faker.internet.email();
  });

  it('Should Register new account', () => {
    // registrationPage.mobileNavToggle.then(($btn) => {
    //   if ($btn.is(':visible')) {
    //     cy.wrap($btn).click();
    //   }
    // });

    // // Click on "Tandem Source"
    // registrationPage.tandemSourceLink.click();

    // // Wait for redirect (optional)
    // cy.url().should('include', '/tandem-source');

    // // Now we expect to be on the Tandem Source landing page
    // // You might need to explicitly visit the source page to continue:
    // cy.visit('https://source.tandemdiabetes.com/');

    // // Click "Create Account"
    registrationPage.createAccountButton
      .scrollIntoView()
      .should('exist')
      .click({ force: true });
    // registrationPage.signInDropdown.click({force: true});
    // registrationPage.sourceButton.scrollIntoView().should('be.visible').click();
    // registrationPage.createAccountButton.scrollIntoView()
    // .should('exist')
    // .click({ force: true });

    cy.origin('https://sso.tandemdiabetes.com', () => {
    registrationPage.firstName.type(firstName);
    registrationPage.lastName.type(lastName);
    registrationPage.accountEmail.type(email);
    cy.contains('button', 'Accept Cookies').click({ force: true });


    registrationPage.countryList.click();
    registrationPage.countryUS.click();

    registrationPage.stateDropdown.click();
    registrationPage.stateCA.click();

    registrationPage.securityQuestionDropdown.click();
    registrationPage.questionPetName.click();
    registrationPage.securityAnswer.type("Rick");

    registrationPage.confirmButton.click();

   // cy.url().should('include', '/dashboard/user/profile');
  });
});
});


