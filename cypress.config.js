const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://www.tandemdiabetes.com",
    setupNodeEvents(on, config) {  
    },
  },
});
