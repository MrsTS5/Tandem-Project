import { faker } from '@faker-js/faker';

describe('Login', () => {
  let randomEmail;
  let randomPassword;

  beforeEach(() => {
    cy.visit('/');
    randomEmail = faker.internet.email();
    randomPassword = faker.internet.password();
  });

  it('Should login with existing User account', () => {
    cy.get('.btn-theme-secondary').click();
    cy.get('#customerDrop').click();
    cy.get('[href="/products/overview"]').click();

    // Use the generated fake data
    cy.get('#email').type(randomEmail);
    cy.get('#password').type(randomPassword);

    cy.contains('button', 'Log In').click();

    // Optionally assert something like a URL or dashboard visibility
    cy.url().should('include', '/dashboard'); // update as needed
  });
  
  it('should log out', () => {

});
  

