#!/usr/bin/env python3
"""
Generate a professional PDF resume for Ryo Nishikawa
Uses reportlab for precise control over layout and formatting
"""

from reportlab.lib.pagesizes import letter, A4
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.lib.units import inch
from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer, Table, TableStyle, PageBreak
from reportlab.lib.enums import TA_LEFT, TA_RIGHT, TA_CENTER
from reportlab.lib import colors
from reportlab.pdfgen import canvas

def create_resume():
    """Generate the resume PDF"""
    
    # Create PDF
    filename = "react-resume/public/resume.pdf"
    doc = SimpleDocTemplate(
        filename,
        pagesize=letter,
        rightMargin=0.5*inch,
        leftMargin=0.5*inch,
        topMargin=0.5*inch,
        bottomMargin=0.5*inch
    )
    
    # Container for the 'Flowable' objects
    elements = []
    
    # Define styles
    styles = getSampleStyleSheet()
    
    # Custom styles
    title_style = ParagraphStyle(
        'CustomTitle',
        parent=styles['Heading1'],
        fontSize=24,
        textColor=colors.HexColor('#1f2937'),
        spaceAfter=6,
        fontName='Helvetica-Bold'
    )
    
    subtitle_style = ParagraphStyle(
        'CustomSubtitle',
        parent=styles['Normal'],
        fontSize=12,
        textColor=colors.HexColor('#4b5563'),
        spaceAfter=12
    )
    
    section_header_style = ParagraphStyle(
        'SectionHeader',
        parent=styles['Heading2'],
        fontSize=14,
        textColor=colors.HexColor('#1f2937'),
        spaceAfter=8,
        spaceBefore=12,
        fontName='Helvetica-Bold',
        borderWidth=0,
        borderColor=colors.HexColor('#2563eb'),
        borderPadding=4,
        leftIndent=8
    )
    
    job_title_style = ParagraphStyle(
        'JobTitle',
        parent=styles['Heading3'],
        fontSize=11,
        textColor=colors.HexColor('#1f2937'),
        spaceAfter=2,
        fontName='Helvetica-Bold'
    )
    
    company_style = ParagraphStyle(
        'Company',
        parent=styles['Normal'],
        fontSize=10,
        textColor=colors.HexColor('#4b5563'),
        spaceAfter=4
    )
    
    body_style = ParagraphStyle(
        'CustomBody',
        parent=styles['Normal'],
        fontSize=9,
        textColor=colors.HexColor('#374151'),
        spaceAfter=4,
        leading=11
    )
    
    bullet_style = ParagraphStyle(
        'Bullet',
        parent=styles['Normal'],
        fontSize=8.5,
        textColor=colors.HexColor('#374151'),
        leftIndent=20,
        spaceAfter=2,
        leading=10,
        bulletIndent=10
    )
    
    # Header
    elements.append(Paragraph("Ryo Nishikawa", title_style))
    elements.append(Paragraph("Cloud Support Engineer (DevOps) at AWS", subtitle_style))
    
    # Contact info
    contact_info = "0274365897 • hakunishikawa@gmail.com • Auckland • <link href='https://www.linkedin.com/in/ryo-nishikawa-99b985188/'>LinkedIn</link>"
    elements.append(Paragraph(contact_info, body_style))
    elements.append(Spacer(1, 0.15*inch))
    
    # About
    about_text = "<b>DevOps Engineer | Cloud Infrastructure Specialist</b> with 4+ years of experience in cloud automation, Infrastructure as Code (IaC), and continuous integration/continuous deployment (CI/CD). AWS Subject Matter Expert (SME) in AWS CloudFormation. Proven track record optimizing deployment pipelines, implementing zero-downtime deployments. Expert in Python, Terraform, Docker with strong focus on security, reliability, and operational excellence."
    elements.append(Paragraph(about_text, body_style))
    elements.append(Spacer(1, 0.1*inch))
    
    # Work Experience
    elements.append(Paragraph("Work Experience", section_header_style))
    
    # Job 1
    elements.append(Paragraph("Cloud Support Engineer (DevOps)", job_title_style))
    elements.append(Paragraph("Amazon Web Services (AWS) | 2024 - Present", company_style))
    elements.append(Paragraph("Provide expert technical support for AWS DevOps services, specializing in Infrastructure as Code (IaC) and continuous deployment solutions for Fortune 500 enterprises.", body_style))
    
    bullets_1 = [
        "Resolve 20+ technical support cases monthly across all severity levels, with 80% specialization in AWS CloudFormation, AWS CDK, Elastic Beanstalk, Control Tower, CodeSeries, and Amazon Q Developer",
        "Guide AWS best practices for enterprise customers, improving security posture, fault tolerance, system performance, and reducing operational costs",
        "Develop Model Context Protocol (MCP) Servers using Python to automate our internal tools to work on cases. CloudFormation and CodePipeline troubleshooting, reducing 45mins of the engineer time globally",
        "Collaborate with Technical Account Managers (TAMs), Professional Services, and Solution Architects on high-priority escalations; participate in on-call rotation for P1 P0 incidents",
        "Mentor Cloud Support Engineers on AWS DevOps services; author internal knowledge base articles and technical documentation"
    ]
    for bullet in bullets_1:
        elements.append(Paragraph(f"• {bullet}", bullet_style))
    elements.append(Spacer(1, 0.08*inch))
    
    # Job 2
    elements.append(Paragraph("DevOps Engineer", job_title_style))
    elements.append(Paragraph("Onside | 2023 - 2024", company_style))
    elements.append(Paragraph("Engineered and maintained CI/CD infrastructure for biosecurity web portal and mobile applications, ensuring regulatory compliance and high availability.", body_style))
    
    bullets_2 = [
        "Orchestrated complete CI/CD migration from TeamCity and Octopus Deploy to Azure Pipelines, consolidating build and deployment processes",
        "Architected zero-downtime deployment strategy using Azure App Service with high availability configuration, ensuring 99.9% uptime"
    ]
    for bullet in bullets_2:
        elements.append(Paragraph(f"• {bullet}", bullet_style))
    elements.append(Spacer(1, 0.08*inch))
    
    # Job 3
    elements.append(Paragraph("Software Engineer", job_title_style))
    elements.append(Paragraph("HealthStream | 2022 - 2023", company_style))
    elements.append(Paragraph("Built and maintained cloud-native data platform for healthcare capacity management, ensuring HIPAA compliance.", body_style))
    
    bullets_3 = [
        "Engineered automated CI/CD pipelines using IaC with Pulumi and Terraform on Azure DevOps, implementing comprehensive automated testing for HIPAA compliance",
        "Architected cloud-based event-driven streaming pipeline processing real-time data into AWS S3, MongoDB, and Lambda, integrating with Amazon MSK and SageMaker"
    ]
    for bullet in bullets_3:
        elements.append(Paragraph(f"• {bullet}", bullet_style))
    elements.append(Spacer(1, 0.08*inch))
    
    # Job 4
    elements.append(Paragraph("Junior Software Engineer", job_title_style))
    elements.append(Paragraph("Wyma Solutions | 2021 - 2022", company_style))
    elements.append(Paragraph("Developed IoT monitoring solutions and computer vision applications for industrial automation in agricultural technology sector.", body_style))
    
    bullets_4 = [
        "Developed Python-based IoT data collection system to stream PLC data to Oracle Cloud InfluxDB via Telegraf for real-time industrial monitoring",
        "Deployed Grafana dashboards on Oracle Cloud using Docker for real-time data visualization",
        "Built computer vision application using OpenCV2 and Python to automate quality control processes",
        "Automated environment provisioning using Ansible playbooks across multiple production nodes"
    ]
    for bullet in bullets_4:
        elements.append(Paragraph(f"• {bullet}", bullet_style))
    elements.append(Spacer(1, 0.1*inch))
    
    # Technical Skills
    elements.append(Paragraph("Technical Skills", section_header_style))
    
    skills_data = [
        ["Cloud Platforms & Services", "AWS (CloudFormation, CDK, CodePipeline, Lambda, S3, EC2, Control Tower), Azure (DevOps, Pipelines, App Service)"],
        ["DevOps & IaC", "Terraform, Pulumi, AWS CloudFormation, AWS CDK, Azure and gitlab CI/CD pipelines, Docker, Ansible"],
        ["Programming", "Python, JavaScript, Java, Node.js, C, Vue.js, Flask"],
        ["Databases & Streaming", "PostgreSQL, MySQL, MongoDB, InfluxDB, DuckDB, Amazon MSK (Kafka)"]
    ]
    
    for skill_cat, skill_list in skills_data:
        elements.append(Paragraph(f"<b>{skill_cat}:</b> {skill_list}", body_style))
    
    elements.append(Spacer(1, 0.1*inch))
    
    # Education
    elements.append(Paragraph("Education", section_header_style))
    elements.append(Paragraph("<b>BSc in Computer Science</b>", body_style))
    elements.append(Paragraph("University of Canterbury | 2018 - 2020", company_style))
    elements.append(Spacer(1, 0.1*inch))
    
    # Awards
    elements.append(Paragraph("Awards", section_header_style))
    awards = [
        "Most Valuable Player Award - AWS Support Engineering",
        "Rising Star Award - AWS Support Engineering",
        "CloudFormation SME - AWS Support Engineering",
        "2nd Place - HackChch 48 Hour Smart City Hackathon"
    ]
    for award in awards:
        elements.append(Paragraph(f"• {award}", bullet_style))
    elements.append(Spacer(1, 0.1*inch))
    
    # Content
    elements.append(Paragraph("Content", section_header_style))
    elements.append(Paragraph("• <link href='https://www.youtube.com/watch?v=B2XfSe7mQKY'>AWS Knowledge Center Video</link> - Resolving \"Already Exists\" Error in AWS CDK", bullet_style))
    elements.append(Spacer(1, 0.1*inch))
    
    # Languages
    elements.append(Paragraph("Languages", section_header_style))
    elements.append(Paragraph("• English (Fluent)", bullet_style))
    elements.append(Paragraph("• Japanese (Native)", bullet_style))
    elements.append(Spacer(1, 0.1*inch))
    
    # Interests
    elements.append(Paragraph("Interests", section_header_style))
    interests = ["Rugby & Sports", "Powerlifting/Crossfit", "Neovim"]
    for interest in interests:
        elements.append(Paragraph(f"• {interest}", bullet_style))
    
    # Build PDF
    doc.build(elements)
    print(f"✅ Resume PDF generated successfully: {filename}")
    print(f"📄 File size: {os.path.getsize(filename) / 1024:.1f} KB")

if __name__ == "__main__":
    import os
    create_resume()
