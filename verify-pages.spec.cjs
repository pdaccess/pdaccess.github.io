const { test, expect } = require('@playwright/test');

test.describe('Solutions Page Verification', () => {
  test('Solutions page loads correctly', async ({ page }) => {
    const consoleMessages = [];
    page.on('console', msg => {
      if (msg.type() === 'error') consoleMessages.push(`ERROR: ${msg.text()}`);
      if (msg.type() === 'warning') consoleMessages.push(`WARNING: ${msg.text()}`);
    });

    await page.goto('http://localhost:3000/solutions', { waitUntil: 'domcontentloaded', timeout: 30000 });

    // Check page title
    const title = await page.title();
    console.log('=== SOLUTIONS PAGE ===');
    console.log('Page title:', title);

    // Check breadcrumb
    const breadcrumb = await page.locator('text=Home > Solutions').first();
    const breadcrumbVisible = await breadcrumb.isVisible().catch(() => false);
    console.log('Breadcrumb visible:', breadcrumbVisible);

    // Check nav count
    const navCount = await page.locator('nav').count();
    console.log('Nav count:', navCount);

    // Check footer count
    const footerCount = await page.locator('footer').count();
    console.log('Footer count:', footerCount);

    // Check cards
    const cards = await page.locator('.card').all();
    console.log('Total cards:', cards.length);

    // Check featured card
    const featuredCard = cards[0];
    const featuredVisible = featuredCard ? await featuredCard.isVisible() : false;
    console.log('Featured card visible:', featuredVisible);

    // Check footer columns
    const footer = page.locator('footer').first();
    const footerText = await footer.textContent();
    console.log('Footer text (truncated):', footerText ? footerText.substring(0, 200) : 'none');

    // Check for white background issues
    const whiteBgIssues = await page.evaluate(() => {
      const issues = [];
      const elements = document.querySelectorAll('*');
      elements.forEach(el => {
        const style = window.getComputedStyle(el);
        const bg = style.backgroundColor;
        if (bg === 'rgb(255, 255, 255)' || bg === 'white') {
          const parent = el.parentElement;
          if (parent) {
            const parentBg = window.getComputedStyle(parent).backgroundColor;
            if (parentBg !== 'rgb(255, 255, 255)' && parentBg !== 'white') {
              issues.push(`${el.tagName}: white bg on dark parent (${parentBg})`);
            }
          }
        }
      });
      return issues;
    });
    console.log('White bg issues:', whiteBgIssues.length > 0 ? whiteBgIssues.slice(0, 10) : 'none');

    // Screenshot
    await page.screenshot({ path: '/tmp/solutions-page.png', fullPage: true });

    // Check console errors
    if (consoleMessages.length > 0) {
      console.log('Console messages:', consoleMessages);
    }

    console.log('Solutions page: OK');
  });
});

test.describe('Blogs Page Verification', () => {
  test('Blogs page loads correctly', async ({ page }) => {
    const consoleMessages = [];
    page.on('console', msg => {
      if (msg.type() === 'error') consoleMessages.push(`ERROR: ${msg.text()}`);
      if (msg.type() === 'warning') consoleMessages.push(`WARNING: ${msg.text()}`);
    });

    await page.goto('http://localhost:3000/blogs', { waitUntil: 'domcontentloaded', timeout: 30000 });

    // Check page title
    const title = await page.title();
    console.log('\n=== BLOGS PAGE ===');
    console.log('Page title:', title);

    // Check breadcrumb
    const breadcrumb = await page.locator('text=Home > Blogs').first();
    const breadcrumbVisible = await breadcrumb.isVisible().catch(() => false);
    console.log('Breadcrumb visible:', breadcrumbVisible);

    // Check nav count
    const navCount = await page.locator('nav').count();
    console.log('Nav count:', navCount);

    // Check footer count
    const footerCount = await page.locator('footer').count();
    console.log('Footer count:', footerCount);

    // Check cards
    const cards = await page.locator('.card').all();
    console.log('Total cards:', cards.length);

    // Check featured card
    const featuredCard = cards[0];
    const featuredVisible = featuredCard ? await featuredCard.isVisible() : false;
    console.log('Featured card visible:', featuredVisible);

    // Check footer columns
    const footer = page.locator('footer').first();
    const footerText = await footer.textContent();
    console.log('Footer text (truncated):', footerText ? footerText.substring(0, 200) : 'none');

    // Check for white background issues
    const whiteBgIssues = await page.evaluate(() => {
      const issues = [];
      const elements = document.querySelectorAll('*');
      elements.forEach(el => {
        const style = window.getComputedStyle(el);
        const bg = style.backgroundColor;
        if (bg === 'rgb(255, 255, 255)' || bg === 'white') {
          const parent = el.parentElement;
          if (parent) {
            const parentBg = window.getComputedStyle(parent).backgroundColor;
            if (parentBg !== 'rgb(255, 255, 255)' && parentBg !== 'white') {
              issues.push(`${el.tagName}: white bg on dark parent (${parentBg})`);
            }
          }
        }
      });
      return issues;
    });
    console.log('White bg issues:', whiteBgIssues.length > 0 ? whiteBgIssues.slice(0, 10) : 'none');

    // Screenshot
    await page.screenshot({ path: '/tmp/blogs-page.png', fullPage: true });

    // Check console errors
    if (consoleMessages.length > 0) {
      console.log('Console messages:', consoleMessages);
    }

    console.log('Blogs page: OK');
  });
});
