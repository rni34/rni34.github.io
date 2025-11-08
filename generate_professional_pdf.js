#!/usr/bin/env node
/**
 * Generate PDF from HTML using Puppeteer
 */

const fs = require('fs');
const path = require('path');

async function generatePDF() {
    let puppeteer;
    
    try {
        // Try to import puppeteer
        puppeteer = require('puppeteer');
    } catch (error) {
        console.log('📦 Installing puppeteer...');
        const { execSync } = require('child_process');
        try {
            execSync('npm install puppeteer', { stdio: 'inherit' });
            puppeteer = require('puppeteer');
        } catch (installError) {
            console.error('❌ Failed to install puppeteer:', installError.message);
            process.exit(1);
        }
    }

    const htmlFile = 'professional_resume.html';
    const outputFile = 'professional_resume.pdf';

    if (!fs.existsSync(htmlFile)) {
        console.error(`❌ HTML file not found: ${htmlFile}`);
        process.exit(1);
    }

    console.log('🚀 Starting PDF generation...');
    console.log(`   Source: ${htmlFile}`);
    console.log(`   Output: ${outputFile}`);

    try {
        // Launch browser
        const browser = await puppeteer.launch({
            headless: true,
            args: ['--no-sandbox', '--disable-setuid-sandbox']
        });

        const page = await browser.newPage();

        // Read HTML content
        const htmlContent = fs.readFileSync(htmlFile, 'utf8');
        const htmlPath = path.resolve(htmlFile);
        
        // Navigate to the HTML file
        await page.goto(`file://${htmlPath}`, { 
            waitUntil: 'networkidle0',
            timeout: 30000 
        });

        // Wait a bit for fonts to load
        await new Promise(resolve => setTimeout(resolve, 2000));

        // Generate PDF
        await page.pdf({
            path: outputFile,
            format: 'A4',
            margin: {
                top: '0.75in',
                right: '0.75in',
                bottom: '0.75in',
                left: '0.75in'
            },
            printBackground: true,
            preferCSSPageSize: false
        });

        await browser.close();

        // Check file size
        const stats = fs.statSync(outputFile);
        const fileSizeKB = stats.size / 1024;

        console.log('✅ PDF generated successfully!');
        console.log(`   📁 File: ${outputFile}`);
        console.log(`   📊 Size: ${fileSizeKB.toFixed(1)} KB`);

    } catch (error) {
        console.error('❌ Error generating PDF:', error.message);
        process.exit(1);
    }
}

// Run the function
generatePDF().catch(console.error);