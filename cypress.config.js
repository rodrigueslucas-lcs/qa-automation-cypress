const { defineConfig } = require("cypress");

module.exports = defineConfig({

  env: {
    username: "standard_user",
    password: "secret_sauce"
  },

  reporter: 'mochawesome',

  reporterOptions: {
    reportDir: 'cypress/reports',
    overwrite: false,
    html: false,
    json: true
  },

  e2e: {
    setupNodeEvents(on, config) {},
  },

});