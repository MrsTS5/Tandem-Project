class OrderPage {
    get getStartedButton() { return cy.get('a.btn.btn-theme-secondary[href="/getstarted"]').first()}
    get firstName() { return cy.get('[id="fe709"]'); }
    get lastName() { return cy.get('[id="fe710"]'); }
    get emailInput() { return cy.get('[id="fe711"]'); }
    get countryList() { return cy.get('[id="fe714"]'); }
    get countryUS() { return cy.contains('option', 'United States'); }
    get checkBoxAuthorization() { return cy.get('[id="fe715"]'); }
    get postalCode() { return cy.get('[name="zipPostal"]'); }
    get phoneNumber() { return cy.get('[name="mobilePhone"]'); }
    get submitButton() { return cy.get('[id="fe720"]'); }
  }
  
  export default new OrderPage();
  