const { chromium } = require('playwright');
const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {
  const filePath = path.join('/Users/nishikkr/rni34.github.io', req.url === '/' ? 'index.html' : req.url);
  const ext = path.extname(filePath);
  const contentType = {
    '.html': 'text/html',
    '.css': 'text/css',
    '.js': 'application/javascript',
    '.woff2': 'font/woff2',
    '.jpeg': 'image/jpeg',
    '.jpg': 'image/jpeg',
    '.png': 'image/png',
    '.ico': 'image/x-icon'
  }[ext] || 'text/plain';
  
  fs.readFile(filePath, (err, data) => {
    if (err) {
      res.writeHead(404);
      res.end('Not found');
    } else {
      res.writeHead(200, { 'Content-Type': contentType });
      res.end(data);
    }
  });
});

server.listen(8080, async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.goto('http://localhost:8080');
  await page.waitForLoadState('networkidle');
  await page.waitForTimeout(2000);
  
  await page.pdf({
    path: '/Users/nishikkr/rni34.github.io/resume.pdf',
    format: 'A4',
    margin: { top: '0.3in', right: '0.3in', bottom: '0.3in', left: '0.3in' },
    printBackground: true
  });
  
  await browser.close();
  server.close();
  console.log('PDF generated with smaller margins');
  process.exit(0);
});
