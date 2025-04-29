class RegistrationPage {
  get mobileNavToggle() { return cy.get('.navbar-toggler') };
  get tandemSourceLink() { return cy.contains('a', 'Tandem Source') };
  get createAccountButton() { return cy.contains('button', 'Create Account', { timeout: 10000 }) };
  get personalUseButton() { return cy.get('[value="personal_standard"]') };
  get nextButton() { return cy.contains('a', 'Next') };
  get firstName() { return cy.get('[name="firstName"]') };
  get lastName() { return cy.get('[name="lastName"]') };
  get countryList() { return cy.get('#country') };
  get acceptCookies() { return cy.contains('button', 'Accept Performance Cookies').click() };
  get countryUS() { return cy.get('[data-value="US"]') };
  get registrationStateDropdown() { return cy.get('[aria-labelledby="create-account-countrySubdivision-select subdivision"]') };
  get stateDropdown() { return cy.get('[aria-controls=":ro:"]').first() };
  get stateCA() { return cy.get('[data-value="US-CA"]') };
  get accountEmail() { return cy.get('[name="account.email"]') };
  get securityQuestionDropdown() { return cy.get('#securityQuestion') };
  get questionPetName() { return cy.get('[data-value="What is your pet\\\'s name?"]') }
  get securityAnswer() { return cy.get('[name="account.securityAnswer"]') };
  get confirmButton() { return cy.contains('button', 'Confirm') };
  get dateOfBirth() { return cy.get('[class="MuiBox-root css-0"]') };
  get termsOfUseCheckbox() { return cy.contains("I agree to Tandem's Terms of Use")}
  get acknoledgementCheckbox() { return cy.get('[name="consents.062533aa-6614-46fc-921e-254d5481c602"]') };
  get continueButton() { return cy.contains('button', 'Continue') };
  get lastNameErrorMessage() {return cy.get('[id="lastName-helper-text"]')};

  visitRegistrationPage() {
    cy.visit('https://sso.tandemdiabetes.com');
    cy.contains('button', 'Accept Performance Cookies', { timeout: 10000 }).click();
    cy.get('[id="country"]').click();
    cy.get('[data-value="US"]').click();
    cy.get('button[type="button"]').contains('Continue').click();
  }
}
export default new RegistrationPage();
