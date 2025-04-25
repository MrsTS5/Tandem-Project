class RegistrationPage {
    // get signInDropdown() {return cy.get('a.nav-link[href="/products/software-apps/tandem-source"]')};

    // get sourceButton() {return cy.get('.navbar-toggler')};
    
    // get createAccountButton() {return cy.contains('button', 'Create Account', { timeout: 10000 })};
    get mobileNavToggle() {
      return cy.get('.navbar-toggler'); // hamburger menu for mobile view
    }
  
    get tandemSourceLink() {
      return cy.contains('a', 'Tandem Source'); // visible nav link
    }
  
    get createAccountButton() {
      return cy.contains('button', 'Create Account', { timeout: 10000 });
    }
  
    get personalUseButton() {return cy.get('[value="personal_standard"]')};
  
    get nextButton() {return cy.contains('a', 'Next')};
  
    get firstName() {return cy.get('[name="firstName"]')};
  
    get lastName() {return cy.get('[name="lastName"]')};
  
    get countryList() {return cy.get('#country')};
  
    get countryUS() {return cy.get('[data-value="US"]')};
  
    get stateDropdown() {return cy.get('[aria-controls=":ro:"]')};
  
    get stateCA() {return cy.get('[data-value="US-CA"]')};
    get accountEmail() {return cy.get('[name="account.email"]')};
  
    get securityQuestionDropdown() {return cy.get('#securityQuestion')};
  
    get questionPetName() {return cy.get('[data-value="What is your pet\\\'s name?"]')}
  
    get securityAnswer() {return cy.get('[name="account.securityAnswer"]')};
  
    get confirmButton() {return cy.contains('button', 'Confirm')};
}
  export default new RegistrationPage();
  