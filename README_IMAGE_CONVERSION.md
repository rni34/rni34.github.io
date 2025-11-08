# Resume to Image Conversion Script

This document explains how to use the `convert_resume_to_image.py` script to convert your resume webpage into a high-quality image file (PNG or JPEG).

## Overview

The script provides a flexible way to capture your resume as an image, supporting:
- **Multiple formats**: PNG (lossless) or JPEG (compressed)
- **Local or remote**: Works with local HTML files or live URLs
- **Customizable**: Adjust resolution, quality, and capture area
- **Automatic**: Handles page loading, element detection, and format conversion

## Prerequisites

### 1. Install Python Dependencies

```bash
pip install selenium Pillow
```

### 2. Install Chrome/Chromium Browser

The script uses Chrome/Chromium for rendering. Make sure you have one installed:
- **macOS**: `brew install --cask google-chrome` or `brew install chromium`
- **Linux**: `sudo apt install chromium-browser` or `google-chrome-stable`
- **Windows**: Download from [google.com/chrome](https://www.google.com/chrome/)

## Basic Usage

### Convert Local HTML to PNG (Default)

```bash
python convert_resume_to_image.py
```

This will:
- Read `index.html` from the current directory
- Capture the `<main>` element
- Save as `resume.png`

### Convert to JPEG

```bash
python convert_resume_to_image.py --format jpeg
```

Output: `resume.jpeg` with 95% quality (default)

### Convert Live Website

```bash
python convert_resume_to_image.py --url https://rni34.github.io/
```

### Custom Output Filename

```bash
python convert_resume_to_image.py --output my_resume_2025.png
```

## Advanced Options

### High Resolution Image

```bash
python convert_resume_to_image.py --width 2560 --format png
```

### Maximum Quality JPEG

```bash
python convert_resume_to_image.py --format jpeg --quality 100
```

### Capture Full Page (Not Just Main Element)

```bash
python convert_resume_to_image.py --full-page
```

### Capture Specific Element

```bash
python convert_resume_to_image.py --element "div.resume-container"
```

### Show Browser Window (Debug Mode)

```bash
python convert_resume_to_image.py --no-headless
```

## Command-Line Options

| Option | Description | Default |
|--------|-------------|---------|
| `--source` | Path to HTML file | `index.html` |
| `--url` | URL to capture | - |
| `--output`, `-o` | Output filename | `resume.png` or `resume.jpeg` |
| `--format`, `-f` | Image format (png/jpeg/jpg) | `png` |
| `--width` | Browser width in pixels | `1920` |
| `--height` | Browser height in pixels | Auto |
| `--quality` | JPEG quality (1-100) | `95` |
| `--element` | CSS selector to capture | `main` |
| `--full-page` | Capture entire page | `false` |
| `--no-headless` | Show browser window | `false` |

## Examples

### 1. Standard Resume Image (PNG)

```bash
python convert_resume_to_image.py
```

**Output**: `resume.png` - High quality, lossless image of the resume

### 2. Compressed Resume (JPEG for Email)

```bash
python convert_resume_to_image.py --format jpeg --quality 85 --output resume_email.jpg
```

**Output**: `resume_email.jpg` - Smaller file size, good for email attachments

### 3. High-Resolution Print Version

```bash
python convert_resume_to_image.py --width 2560 --format png --output resume_print.png
```

**Output**: `resume_print.png` - High resolution for printing

### 4. Capture from Live Website

```bash
python convert_resume_to_image.py --url https://rni34.github.io/ --output live_resume.png
```

**Output**: `live_resume.png` - Captures the live deployed version

### 5. Full Page Screenshot

```bash
python convert_resume_to_image.py --full-page --output full_page_resume.png
```

**Output**: `full_page_resume.png` - Includes header, footer, and all page elements

## Troubleshooting

### "Missing required dependencies" Error

Install the required Python packages:
```bash
pip install selenium Pillow
```

### "Failed to launch Chrome" Error

Make sure Chrome or Chromium is installed:
```bash
# macOS
brew install --cask google-chrome

# Linux
sudo apt install chromium-browser
```

### "HTML file not found" Error

Check that the HTML file exists:
```bash
ls -la index.html
```

Or use the full path:
```bash
python convert_resume_to_image.py --source /full/path/to/index.html
```

### Image Quality Issues

For better quality:
- Use PNG format for lossless quality
- Increase width: `--width 2560`
- For JPEG, use maximum quality: `--quality 100`

### Element Not Found

If the script can't find the element:
- Use `--full-page` to capture everything
- Check the element selector with browser DevTools
- Use a different selector: `--element "body"`

## Format Comparison

### PNG (Recommended for Quality)
- **Pros**: Lossless, perfect quality, supports transparency
- **Cons**: Larger file size
- **Use for**: Printing, archiving, when quality is critical

### JPEG (Recommended for Sharing)
- **Pros**: Smaller file size, widely supported
- **Cons**: Lossy compression, no transparency
- **Use for**: Email, web sharing, when file size matters

## Integration with Resume Workflow

### Update Resume and Generate Image

```bash
# 1. Make changes to resume
cd react-resume
npm run dev  # Test locally

# 2. Build for production
npm run build

# 3. Generate image
cd ..
python convert_resume_to_image.py --format png
python convert_resume_to_image.py --format jpeg --quality 90 --output resume_web.jpg
```

### Automated Script

Create a `generate_resume_images.sh` script:

```bash
#!/bin/bash
echo "Generating resume images..."

# PNG for quality
python convert_resume_to_image.py --format png --output resume_hq.png

# JPEG for web/email
python convert_resume_to_image.py --format jpeg --quality 90 --output resume_web.jpg

# High-res for print
python convert_resume_to_image.py --width 2560 --format png --output resume_print.png

echo "✅ All resume images generated!"
```

Make it executable:
```bash
chmod +x generate_resume_images.sh
./generate_resume_images.sh
```

## Tips

1. **For LinkedIn/Social Media**: Use JPEG with quality 85-90
2. **For Printing**: Use PNG with width 2560+
3. **For Email**: Use JPEG with quality 80-85 to keep file size small
4. **For Portfolio**: Use PNG for best quality
5. **Test First**: Use `--no-headless` to see what's being captured

## Support

For issues or questions:
- Check the troubleshooting section above
- Review the script's help: `python convert_resume_to_image.py --help`
- Ensure all dependencies are installed correctly

## Related Files

- `convert_resume_to_image.py` - Main conversion script (this tool)
- `generate_resume_pdf.py` - PDF generation script
- `convert_html_to_png.py` - Legacy conversion script
- `index.html` - Built resume HTML file
- `react-resume/` - Source Next.js application
