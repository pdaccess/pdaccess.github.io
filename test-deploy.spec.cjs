const { test, expect } = require('@playwright/test');

test('Landing page loads without crashing', async ({ page }) => {
  const consoleErrors = [];
  const pageErrors = [];
  
  page.on('console', msg => {
    if (msg.type() === 'error') {
      consoleErrors.push(msg.text());
    }
  });
  
  page.on('pageerror', err => {
    pageErrors.push(err.message);
  });
  
  const response = await page.goto('http://192.168.178.4:80', { 
    waitUntil: 'networkidle', 
    timeout: 30000 
  });
  
  expect(response.status()).toBe(200);
  expect(await page.title()).toContain('PDAccess');
  
  // Wait for any async errors
  await page.waitForTimeout(5000);
  
  if (consoleErrors.length > 0) {
    console.log('Console errors:', consoleErrors);
  }
  if (pageErrors.length > 0) {
    console.log('Page errors:', pageErrors);
  }
  
  // Take a screenshot to verify rendering
  await page.screenshot({ path: 'test-results/deploy-screenshot.png' });
  console.log('Screenshot saved');
});
