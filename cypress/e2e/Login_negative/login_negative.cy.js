describe('Login Page', () => {
    it('loads the homepage', () => {
      cy.visit('/');
      cy.contains('Login'); // or whatever element is visible
    });
  });