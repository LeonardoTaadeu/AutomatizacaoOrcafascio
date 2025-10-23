const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
    },
    baseUrl: 'https://teste.orcafascio.com',
    testIsolation: false,
    redirectionLimit: 200,
    experimentalMemoryManagement: true,
    numTestsKeptInMemory: 0,
    defaultCommandTimeout: 10000,
    video: false,
  },
});
