class CommonPage {
    get acceptCookiesButton() { return cy.contains('button', 'Accept Performance Cookies', { timeout: 10000 }); }
    get countryDropdown() { return cy.get('#country'); }
    get countryOptionUS() { return cy.get('[data-value="US"]'); }
    get continueButton() { return cy.contains('button', 'Continue'); }
  
    acceptCookiesAndSelectCountry(country = 'US') {
      this.acceptCookiesButton.click();
      this.countryDropdown.click();
      cy.get(`[data-value="${country}"]`).click();
      this.continueButton.click();
    }
  } 
  export default new CommonPage();
  