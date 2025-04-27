class LoginPage{
    get loginEmail() {return cy.get('[id="email"]')};
    get loginPassword() {return cy.get('[id="password"]')};
    get loginIn() {return cy.contains('button','Log In')};
    get welcomeMessage() {return cy.contains('Welcome, John!')};
    get profileIcon() {return cy.get('[aria-label="Profile Avatar"]')};
    get logoutButton() {return cy.contains('Logout')}
}
export default new LoginPage();

  