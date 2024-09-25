import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    baseUrl: 'https://cypress-playground.s3.eu-central-1.amazonaws.com',
    retries: 2,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});