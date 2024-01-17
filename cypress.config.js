const { defineConfig } = require("cypress");
const preprocessor = require("@badeball/cypress-cucumber-preprocessor");
const browserify = require("@badeball/cypress-cucumber-preprocessor/browserify");

async function setupNodeEvents(on, config) {
  // this is required for the preprocessor to be able to generate json reports after ach run, and more ...
  await preprocessor.addCucumberPreprocessorPlugin(on, config);
  on("file:preprocessor", browserify.default(config));
  // make sure to return the config object as it might have been modified by the plugin:
  return config;
}

module.exports = defineConfig({
  defaultCommandTimeout: 6000,
  chromeWebSecurity: false,

  env: {
    url: "https://demoblaze.com",
    username: "hfboy",
    password: "admin",
  },
  retries: {
    runMode: 1,
  },
  e2e: {
    setupNodeEvents,
    specPattern: "cypress/e2e/**/**/*.feature",
    baseUrl: "https://demoblaze.com",
  },
});
// messages -> json file -> html
