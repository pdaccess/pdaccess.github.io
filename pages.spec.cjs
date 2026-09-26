const { test, expect } = require('@playwright/test');

// List of all pages to test
const pages = [
  '/',
  '/products/',
  '/solutions/',
  '/blogs',
  '/docs',
  '/sales/',
  '/about',
  '/contacts',
  '/hr',
  '/changelogs',
  '/getstarted',
  '/thanks',
  '/legal/privacy',
  '/legal/terms_and_conditions',
  '/product/pdaccess_linux_host_security',
  '/product/pdaccess_cloud_security',
  '/product/pdaccess_sso',
  '/product/pdaccess_pdvault',
  '/solution/industrial-control-systems',
  '/solution/remote-work-facilities',
  '/blog/hello-pdaccess',
  '/changelog/v004',
];

let errorsFound = [];
let warningsFound = [];

for (const page of pages) {
  test(`Page: ${page}`, async ({ page: browserPage }) => {
    const consoleMessages = [];
    const pageErrors = [];
    
    browserPage.on('console', msg => {
      const text = msg.text();
      if (msg.type() === 'error') {
        consoleMessages.push(`ERROR: ${text}`);
        pageErrors.push(text);
      }
      if (msg.type() === 'warning' && !text.includes('tailwind') && !text.includes('DevalueError') && !text.includes('Failed to stringify')) {
        consoleMessages.push(`WARNING: ${text}`);
      }
    });

    const response = await browserPage.goto(page, { waitUntil: 'domcontentloaded', timeout: 15000 });
    
    // Wait briefly for any async JS errors
    await browserPage.waitForTimeout(2000);
    
    // Check for HTTP errors
    if (response && response.status() >= 400) {
      errorsFound.push(`${page} returned HTTP ${response.status()}`);
    }
    
    // Report errors
    if (pageErrors.length > 0) {
      console.log(`\n  ERRORS on ${page}:`);
      pageErrors.forEach(err => console.log(`    - ${err}`));
      errorsFound.push(`${page} had ${pageErrors.length} console errors`);
    }
    
    // Report warnings
    if (warningsFound.length > 0) {
      console.log(`\n  WARNINGS on ${page}:`);
      warningsFound.forEach(warn => console.log(`    - ${warn}`));
      warningsFound = [];
    }
    
    // Check that page has content
    const content = await browserPage.content();
    if (content && content.length > 100) {
      console.log(`  ✓ ${page} (${content.length} bytes)`);
    } else {
      errorsFound.push(`${page} returned empty or very short content`);
    }
    
    // Check for hydration mismatch warnings (these are less critical but still worth noting)
    const hasHydrationWarning = pageErrors.some(err => err.includes('Hydration') || err.includes('mismatch'));
    if (hasHydrationWarning) {
      errorsFound.push(`${page} has hydration mismatch`);
    }
  });
}

// Summary after all tests
test.afterAll(() => {
  console.log('\n========== SUMMARY ==========');
  console.log(`Pages tested: ${pages.length}`);
  console.log(`Errors found: ${errorsFound.length}`);
  errorsFound.forEach(err => console.log(`  ERROR: ${err}`));
  
  if (errorsFound.length === 0) {
    console.log('\n✓ All pages passed!');
  } else {
    console.log('\n✗ Some pages have errors');
  }
});
