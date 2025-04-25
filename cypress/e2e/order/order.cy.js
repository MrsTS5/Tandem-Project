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
    orderPage.countryList.then($select => {
      cy.wrap($select).invoke('val', 'US').trigger('change')
    });
    orderPage.postalCode.should('not.be.disabled');
    orderPage.postalCode.type(postalCode);
    orderPage.phoneNumber.type(phoneNumber);
    orderPage.checkBoxAuthorization.click();
    orderPage.submitButton.click();
    orderPage.thankYouMessage.should('be.visible');
  });
});

