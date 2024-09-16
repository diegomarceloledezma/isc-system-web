import { defineConfig } from "cypress";

export default defineConfig({
  env: {
    USERNAME:"68779",
    PASSWORD:"Diego0803",
  },
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
