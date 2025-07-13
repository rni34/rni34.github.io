from selenium import webdriver
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from PIL import Image
import time
import os

def html_to_png(driver_path, html_path):
    # Chrome options for headless mode
    chrome_options = Options()
    chrome_options.add_argument("--headless")

    # Set service and driver
    service = Service(driver_path)
    driver = webdriver.Chrome(service=service, options=chrome_options)

    # Set window size
    driver.set_window_size(1920, 1600)  # Adjust as per your requirement

    # Convert file path to URL if necessary
    if not html_path.startswith("http"):
        html_path = os.path.abspath(html_path)
        html_path = f"file:///{html_path}"

    driver.get(html_path)

    # Wait for the page to load (adjust the time as needed)
    # time.sleep(5)  # Explicit wait

    # Example: Wait for a specific element to be present
    WebDriverWait(driver, 10).until(EC.presence_of_element_located((By.ID, 'profile-image')))

    # Locate the <article> element
    article_element = driver.find_element(By.TAG_NAME, 'article')

    # Take screenshot of the <article> element
    article_element.screenshot('resume.png')

    driver.quit()

def convert_png_to_pdf(png_file, pdf_file):
    # Open the PNG image
    image = Image.open(png_file)

    # Convert the image to RGB mode if it's not
    if image.mode != 'RGB':
        image = image.convert('RGB')

    # Save the image as PDF
    image.save(pdf_file, 'PDF', resolution=100.0)



# Example usage
html_to_png("/opt/homebrew/bin/chromedriver", "index.html")
# Example usage
convert_png_to_pdf('resume.png', 'resume.pdf')


