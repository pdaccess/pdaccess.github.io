const { defineConfig } = require('@playwright/test');

module.exports = defineConfig({
  testDir: '.',
  use: {
    baseURL: 'http://localhost:3000',
    headless: true,
    screenshot: 'only-on-failure',
  },
  reporter: 'list',
});
