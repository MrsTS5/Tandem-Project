const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://www.tandemdiabetes.com",
    env:{
      loginUrl:"https://sso.tandemdiabetes.com",

    experimentalSessionAndOrigin: true,
    viewportWidth: 1280, 
    viewportHeight: 720, 
    setupNodeEvents(on, config) {  
    }
    },
  },
});

