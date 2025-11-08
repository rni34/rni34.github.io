#!/usr/bin/env python3
"""Convert resume to PNG without download button"""

import time
from selenium import webdriver
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC

chrome_options = Options()
chrome_options.add_argument("--headless")
chrome_options.add_argument("--no-sandbox")
chrome_options.add_argument("--disable-dev-shm-usage")
chrome_options.add_argument("--hide-scrollbars")

driver = webdriver.Chrome(options=chrome_options)
driver.set_window_size(1920, 1080)

# Load page from live site instead of local file
driver.get("https://rni34.github.io/")

# Wait for main content to load
WebDriverWait(driver, 10).until(
    EC.presence_of_element_located((By.TAG_NAME, "main"))
)

# Wait for fonts and styles to load
time.sleep(3)

# Wait for button to appear and hide it, also hide Interests section
driver.execute_script("""
    const hideElements = () => {
        const buttons = document.querySelectorAll('a, button');
        buttons.forEach(btn => {
            const text = btn.textContent.toLowerCase();
            if (text.includes('download') || text.includes('resume')) {
                btn.style.display = 'none';
            }
        });
        
        const sections = document.querySelectorAll('section');
        sections.forEach(section => {
            const heading = section.querySelector('h2');
            if (heading && heading.textContent.toLowerCase().includes('interests')) {
                section.style.display = 'none';
            }
        });
    };
    hideElements();
    setTimeout(hideElements, 500);
""")
time.sleep(2)

# Get full page height and resize
total_height = driver.execute_script("return document.body.scrollHeight")
driver.set_window_size(1920, total_height)
time.sleep(1)

# Take screenshot
driver.save_screenshot("resume_final.png")
driver.quit()

print("✅ Generated resume_final.png without download button")
