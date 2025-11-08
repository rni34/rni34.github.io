#!/usr/bin/env python3
"""
Create a professional PDF resume using weasyprint
"""

import subprocess
import sys
import os

def check_and_install_weasyprint():
    """Check if weasyprint is installed, install if not"""
    try:
        import weasyprint
        return True
    except ImportError:
        print("📦 Installing weasyprint...")
        try:
            subprocess.check_call([sys.executable, "-m", "pip", "install", "weasyprint"])
            import weasyprint
            return True
        except Exception as e:
            print(f"❌ Failed to install weasyprint: {e}")
            return False

def create_pdf_from_html(html_file, output_file):
    """Convert HTML to PDF using weasyprint"""
    if not check_and_install_weasyprint():
        return False
    
    try:
        import weasyprint
        
        print(f"🚀 Converting {html_file} to PDF...")
        
        # Read HTML file
        with open(html_file, 'r', encoding='utf-8') as f:
            html_content = f.read()
        
        # Create PDF
        html_doc = weasyprint.HTML(string=html_content, base_url=os.path.dirname(os.path.abspath(html_file)))
        html_doc.write_pdf(output_file)
        
        # Get file size
        file_size = os.path.getsize(output_file) / 1024  # KB
        
        print(f"✅ PDF generated successfully!")
        print(f"   📁 File: {output_file}")
        print(f"   📊 Size: {file_size:.1f} KB")
        
        return True
        
    except Exception as e:
        print(f"❌ Error generating PDF: {e}")
        return False

def main():
    """Main function"""
    html_file = "professional_resume.html"
    pdf_file = "professional_resume.pdf"
    
    if not os.path.exists(html_file):
        print(f"❌ HTML file not found: {html_file}")
        sys.exit(1)
    
    success = create_pdf_from_html(html_file, pdf_file)
    
    if success:
        print(f"🎉 Professional resume PDF created: {pdf_file}")
    else:
        print("❌ Failed to create PDF")
        sys.exit(1)

if __name__ == "__main__":
    main()