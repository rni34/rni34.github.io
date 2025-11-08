const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.goto('file:///Users/nishikkr/rni34.github.io/index.html');
  await page.waitForLoadState('networkidle');
  await page.pdf({
    path: '/Users/nishikkr/rni34.github.io/resume.pdf',
    format: 'A4',
    margin: { top: '0.5in', right: '0.5in', bottom: '0.5in', left: '0.5in' },
    printBackground: true
  });
  await browser.close();
  console.log('PDF generated with Playwright: /Users/nishikkr/rni34.github.io/resume.pdf');
})();
