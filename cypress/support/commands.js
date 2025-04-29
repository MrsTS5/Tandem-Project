Cypress.Commands.add('errorHandler', () => {
    Cypress.on('uncaught:exception', (err, runnable) => {
        console.error('Uncaught exception detected:', err.message);
        return false;
    });
});

// Cypress.Commands.add('loginViaUI', (email, password) => {
//     cy.visit('https://sso.tandemdiabetes.com');
//     cy.errorHandler();
//     cy.contains('button', 'Accept Performance Cookies', { timeout: 10000 }).click();
//     cy.get('[id="country"]').click();
//     cy.get('[data-value="US"]').click();
//     cy.get('button[type="button"]').contains('Continue').click();
//     cy.get('[id="email"]').type(email);
//     cy.get('[id="password"]').type(password);
//     cy.contains('button', 'Log In').click();
//   });
  
  
