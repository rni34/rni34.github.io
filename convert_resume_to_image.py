#!/usr/bin/env python3
"""
Convert Resume Page to Image (PNG or JPEG)
==========================================
This script converts the resume webpage to a high-quality image file.
It supports both local HTML files and live URLs.

Features:
- Converts to PNG (default) or JPEG format
- Captures full page or specific element
- Configurable resolution and quality
- Automatic dependency checking
- Works with both local files and URLs

Requirements:
- selenium
- Pillow (PIL)
- Chrome/Chromium browser

Usage:
    python convert_resume_to_image.py
    python convert_resume_to_image.py --format jpeg
    python convert_resume_to_image.py --url https://rni34.github.io/
    python convert_resume_to_image.py --output my_resume.png
"""

import argparse
import os
import sys
import time
from pathlib import Path

def check_dependencies():
    """Check if required dependencies are installed"""
    missing = []
    
    try:
        from selenium import webdriver
    except ImportError:
        missing.append("selenium")
    
    try:
        from PIL import Image
    except ImportError:
        missing.append("Pillow")
    
    if missing:
        print("❌ Missing required dependencies:")
        for dep in missing:
            print(f"   - {dep}")
        print("\n📦 Install with: pip install selenium Pillow")
        sys.exit(1)

def convert_resume_to_image(
    source="index.html",
    output_file=None,
    format="png",
    width=1920,
    height=None,
    quality=95,
    element_selector="main",
    headless=True
):
    """
    Convert resume webpage to image
    
    Args:
        source: Path to HTML file or URL
        output_file: Output filename (auto-generated if None)
        format: Image format ('png' or 'jpeg')
        width: Browser window width in pixels
        height: Browser window height in pixels (auto if None)
        quality: JPEG quality (1-100, only for JPEG)
        element_selector: CSS selector for element to capture (None for full page)
        headless: Run browser in headless mode
    
    Returns:
        Path to generated image file
    """
    from selenium import webdriver
    from selenium.webdriver.chrome.options import Options
    from selenium.webdriver.common.by import By
    from selenium.webdriver.support.ui import WebDriverWait
    from selenium.webdriver.support import expected_conditions as EC
    from PIL import Image
    
    # Validate format
    format = format.lower()
    if format not in ['png', 'jpeg', 'jpg']:
        raise ValueError("Format must be 'png' or 'jpeg'")
    
    # Normalize format
    if format == 'jpg':
        format = 'jpeg'
    
    # Generate output filename if not provided
    if output_file is None:
        output_file = f"resume.{format}"
    
    # Ensure output has correct extension
    output_path = Path(output_file)
    if output_path.suffix.lower() not in ['.png', '.jpg', '.jpeg']:
        output_file = f"{output_file}.{format}"
    
    print(f"🚀 Starting resume to image conversion...")
    print(f"   Source: {source}")
    print(f"   Output: {output_file}")
    print(f"   Format: {format.upper()}")
    
    # Configure Chrome options
    chrome_options = Options()
    if headless:
        chrome_options.add_argument("--headless")
    chrome_options.add_argument("--no-sandbox")
    chrome_options.add_argument("--disable-dev-shm-usage")
    chrome_options.add_argument("--disable-gpu")
    chrome_options.add_argument("--hide-scrollbars")
    
    # Initialize driver
    print("🌐 Launching browser...")
    try:
        driver = webdriver.Chrome(options=chrome_options)
    except Exception as e:
        print(f"❌ Failed to launch Chrome: {e}")
        print("💡 Make sure Chrome/Chromium is installed")
        sys.exit(1)
    
    try:
        # Set initial window size
        if height:
            driver.set_window_size(width, height)
        else:
            driver.set_window_size(width, 1080)  # Initial height
        
        # Convert file path to URL if necessary
        if not source.startswith("http"):
            source_path = os.path.abspath(source)
            if not os.path.exists(source_path):
                raise FileNotFoundError(f"HTML file not found: {source}")
            source_url = f"file:///{source_path.replace(os.sep, '/')}"
        else:
            source_url = source
        
        print(f"📄 Loading page: {source_url}")
        driver.get(source_url)
        
        # Wait for page to load
        print("⏳ Waiting for page to load...")
        time.sleep(2)  # Give time for fonts and images to load
        
        if element_selector:
            # Wait for specific element
            try:
                WebDriverWait(driver, 10).until(
                    EC.presence_of_element_located((By.CSS_SELECTOR, element_selector))
                )
                element = driver.find_element(By.CSS_SELECTOR, element_selector)
                
                # Adjust window height to fit element if not specified
                if not height:
                    element_height = element.size['height']
                    driver.set_window_size(width, element_height + 100)
                    time.sleep(1)  # Wait for resize
                
                print(f"📸 Capturing element: {element_selector}")
                screenshot_path = f"temp_screenshot.png"
                element.screenshot(screenshot_path)
                
            except Exception as e:
                print(f"⚠️  Could not find element '{element_selector}', capturing full page instead")
                screenshot_path = f"temp_screenshot.png"
                driver.save_screenshot(screenshot_path)
        else:
            # Capture full page
            print("📸 Capturing full page...")
            
            # Get full page height
            total_height = driver.execute_script("return document.body.scrollHeight")
            driver.set_window_size(width, total_height)
            time.sleep(1)  # Wait for resize
            
            screenshot_path = f"temp_screenshot.png"
            driver.save_screenshot(screenshot_path)
        
        print("✅ Screenshot captured")
        
        # Convert to desired format if needed
        if format == 'jpeg' or output_file.lower().endswith(('.jpg', '.jpeg')):
            print(f"🔄 Converting to JPEG (quality: {quality})...")
            img = Image.open(screenshot_path)
            
            # Convert RGBA to RGB for JPEG
            if img.mode in ('RGBA', 'LA', 'P'):
                # Create white background
                background = Image.new('RGB', img.size, (255, 255, 255))
                if img.mode == 'P':
                    img = img.convert('RGBA')
                background.paste(img, mask=img.split()[-1] if img.mode == 'RGBA' else None)
                img = background
            
            img.save(output_file, 'JPEG', quality=quality, optimize=True)
            os.remove(screenshot_path)
        else:
            # PNG - just rename
            os.rename(screenshot_path, output_file)
        
        # Get file size
        file_size = os.path.getsize(output_file) / 1024  # KB
        
        print(f"✅ Resume image generated successfully!")
        print(f"   📁 File: {output_file}")
        print(f"   📊 Size: {file_size:.1f} KB")
        
        return output_file
        
    finally:
        driver.quit()

def main():
    """Main entry point"""
    parser = argparse.ArgumentParser(
        description="Convert resume webpage to image (PNG or JPEG)",
        formatter_class=argparse.RawDescriptionHelpFormatter,
        epilog="""
Examples:
  # Convert local HTML to PNG (default)
  python convert_resume_to_image.py
  
  # Convert to JPEG
  python convert_resume_to_image.py --format jpeg
  
  # Convert live website
  python convert_resume_to_image.py --url https://rni34.github.io/
  
  # Custom output filename
  python convert_resume_to_image.py --output my_resume.png
  
  # High resolution JPEG
  python convert_resume_to_image.py --format jpeg --width 2560 --quality 100
  
  # Capture full page instead of main element
  python convert_resume_to_image.py --full-page
        """
    )
    
    parser.add_argument(
        '--source',
        default='index.html',
        help='Source HTML file or URL (default: index.html)'
    )
    
    parser.add_argument(
        '--url',
        help='URL to capture (shorthand for --source)'
    )
    
    parser.add_argument(
        '--output', '-o',
        help='Output filename (default: resume.png or resume.jpeg)'
    )
    
    parser.add_argument(
        '--format', '-f',
        choices=['png', 'jpeg', 'jpg'],
        default='png',
        help='Output format (default: png)'
    )
    
    parser.add_argument(
        '--width',
        type=int,
        default=1920,
        help='Browser window width in pixels (default: 1920)'
    )
    
    parser.add_argument(
        '--height',
        type=int,
        help='Browser window height in pixels (default: auto)'
    )
    
    parser.add_argument(
        '--quality',
        type=int,
        default=95,
        help='JPEG quality 1-100 (default: 95, only for JPEG)'
    )
    
    parser.add_argument(
        '--element',
        default='main',
        help='CSS selector for element to capture (default: main)'
    )
    
    parser.add_argument(
        '--full-page',
        action='store_true',
        help='Capture full page instead of specific element'
    )
    
    parser.add_argument(
        '--no-headless',
        action='store_true',
        help='Show browser window (useful for debugging)'
    )
    
    args = parser.parse_args()
    
    # Check dependencies
    check_dependencies()
    
    # Use URL if provided
    source = args.url if args.url else args.source
    
    # Determine element selector
    element_selector = None if args.full_page else args.element
    
    try:
        convert_resume_to_image(
            source=source,
            output_file=args.output,
            format=args.format,
            width=args.width,
            height=args.height,
            quality=args.quality,
            element_selector=element_selector,
            headless=not args.no_headless
        )
    except Exception as e:
        print(f"❌ Error: {e}")
        sys.exit(1)

if __name__ == "__main__":
    main()
