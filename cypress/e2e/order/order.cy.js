import { faker } from '@faker-js/faker';
import orderPage from '../../fixtures/page_objects/order.page';

describe('Placing Order', () => {
  const firstName = faker.person.firstName();
  const lastName = faker.person.lastName();
  const email = faker.internet.email();
  const postalCode = faker.location.zipCode();
  const phoneNumber = faker.phone.number('###-###-####');

  before(() => {
    cy.errorHandler();
  });

  beforeEach(() => {
    cy.visit('/');
  });

  it('Should Place Order', () => {
    orderPage.getStartedButton.click();
    orderPage.firstName.type(firstName);
    orderPage.lastName.type(lastName);
    orderPage.emailInput.type(email);
    orderPage.countryList.select(country).should('have.value', 'United States');
    //orderPage.countryUS.select(countryText).should('have.value', 'US');

    orderPage.postalCode.should('not.be.disabled');
    orderPage.postalCode.type(postalCode);
    orderPage.phoneNumber.type(phoneNumber);
    orderPage.checkBoxAuthorization.click();
    orderPage.submitButton.click();

    // Optional: Verify success message or redirection
    // cy.contains('Thank you').should('be.visible');
  });
});

        