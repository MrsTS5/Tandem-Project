class LoginPage{
    get loginEmail() {return cy.get('[id="email"]')};
    get loginPassword() {return cy.get('[id="password"]')};
    get loginIn() {return cy.contains('button','Log In')};
    get welcomeMessage() {return cy.contains('Welcome, John!')};
    get profileIcon() {return cy.get('[aria-label="Profile Avatar"]')};
    get logoutButton() {return cy.contains('Logout')};
    get errorMessage() {return cy.get('[role="alert"]')};
    visitLoginPage() {
        cy.visit('https://sso.tandemdiabetes.com');
        cy.errorHandler();
        this.acceptCookiesButton.click();
        this.countryDropdown.click();
        this.usCountryOption.click();
        this.continueButton.click();
      }
}
export default new LoginPage();

  