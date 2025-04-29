# Tandem-Project

![Cypress Tests](https://github.com/MrsTS5/Tandem-Project/actions/workflows/cypress-tests.yml/badge.svg)

Tandem login automation project using Cypress.

This project covers automated end-to-end (E2E) tests for user registration, login (positive and negative scenarios), and placing an order on the Tandem Diabetes platform.

Tests are integrated into a CI/CD pipeline using GitHub Actions to ensure reliable and consistent automation runs.

---

## ✨ Project Structure

- `.github/workflows/` - GitHub Actions workflow files (CI/CD setup)
- `cypress/e2e/`
  - `Login_positive/` - Tests for valid user login
  - `Login_negative/` - Tests for invalid login attempts
  - `registration/` - User registration flow tests
  - `order/` - Ordering functionality tests
- `cypress/fixtures/` - Test data and page object models
- `cypress/support/` - Custom Cypress commands
- `cypress.config.js` - Cypress configuration file
- `package.json` - Project dependencies

---

## 🚀 How to Run Tests Locally

1. Install dependencies:

```bash
npm install
npx cypress open
npx cypress run (headless mode)


