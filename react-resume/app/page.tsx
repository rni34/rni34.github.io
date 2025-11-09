'use client';

import React from 'react';
import Container from '../components/layout/Container';
import Header from '../components/resume/Header';
import ProfessionalSummary from '../components/resume/ProfessionalSummary';
import ExperienceEntry from '../components/resume/ExperienceEntry';
import SkillsSection from '../components/resume/SkillsSection';
import SidebarCard, { 
  EducationItem, 
  AwardItem, 
  ContentItem, 
  ListItem 
} from '../components/resume/SidebarCard';

export default function Home() {
  const handleDownloadResume = () => {
    const link = document.createElement('a');
    link.href = '/resume.pdf';
    link.download = 'RyoNishikawa_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Contact Information
  const contactInfo = {
    phone: '0274365897',
    email: 'hakunishikawa@gmail.com',
    location: 'Auckland, New Zealand',
    linkedin: 'https://www.linkedin.com/in/ryo-nishikawa-99b985188/',
    github: 'https://github.com/rni34'
  };

  // Optimized Professional Summary
  const professionalSummary = "Software Engineer with 5+ years building distributed systems and automation platforms using Python (5+ years), SQL, and OOP languages. Expert in API development, microservices architecture, Docker/Kubernetes, and CI/CD pipelines. Proven track record optimizing concurrent systems and infrastructure automation.";

  // Work Experience with Optimized Bullet Points (15-25 words each)
  const workExperience = [
    {
      title: "Cloud Support Engineer (DevOps)",
      company: "Amazon Web Services (AWS)",
      duration: "2024 - Present",
      description: "Build Python automation tools and provide technical support for AWS distributed systems, specializing in Infrastructure as Code and event-driven architectures.",
      achievements: [
        "Built Kintsugi MCP server using Python OOP (FastAPI/asyncio), integrating with TypeScript/Java systems, reducing troubleshooting time by 45 minutes per case", // 21 words
        "Engineered distributed CloudTrail analysis with Python asyncio/multiprocessing and DuckDB SQL queries, processing API failures across multi-region AWS deployments concurrently", // 20 words
        "Resolve 20+ monthly technical cases for distributed systems (Lambda, API Gateway), guiding security and performance best practices", // 18 words
        "Collaborate on P0/P1 incidents with service teams; author technical documentation and mentor engineers on automation troubleshooting" // 17 words
      ],
      technologies: ["Python", "FastAPI", "asyncio", "multiprocessing", "DuckDB", "SQL", "TypeScript", "Java", "AWS Lambda", "API Gateway", "CloudTrail"]
    },
    {
      title: "DevOps Engineer",
      company: "Onside",
      duration: "2023 - 2024",
      description: "Engineered and maintained CI/CD infrastructure for biosecurity web portal and mobile applications, ensuring regulatory compliance and high availability.",
      achievements: [
        "Optimized TeamCity pipelines from sequential to parallel execution with resource allocation, reducing deployment time by 40% maintaining 99.9% uptime", // 19 words
        "Configured TeamCity agents for multiple concurrent jobs, maximizing infrastructure utilization and improving build throughput for development teams", // 17 words
        "Led complete CI/CD migration from TeamCity/Octopus Deploy to GitHub Actions, consolidating processes with zero-downtime deployment strategy" // 16 words
      ],
      technologies: ["TeamCity", "GitHub Actions", "Octopus Deploy", "CI/CD", "Infrastructure Management"]
    },
    {
      title: "Software Engineer",
      company: "HealthStream",
      duration: "2022 - 2023",
      description: "Built cloud-native data platform with event-driven microservices for healthcare capacity management, processing real-time data streams and feeding SageMaker models for patient forecasting in HIPAA-compliant environment.",
      achievements: [
        "Architected event-driven data pipeline using Python/Amazon MSK (Kafka), integrating Lambda microservices with SQS for reliable message delivery", // 18 words
        "Built distributed data processing system storing events in S3/MongoDB, triggering Lambda functions for real-time analytics handling 100K+ daily events", // 19 words
        "Developed Python APIs with authentication, rate limiting, and error handling for data ingestion/retrieval, ensuring HIPAA compliance", // 16 words
        "Engineered automated CI/CD pipelines using Infrastructure as Code (Pulumi, Terraform), implementing comprehensive testing and deployment automation" // 17 words
      ],
      technologies: ["Python", "Amazon MSK", "Kafka", "Lambda", "SQS", "S3", "MongoDB", "Pulumi", "Terraform", "HIPAA"]
    },
    {
      title: "Junior Software Engineer",
      company: "Wyma Solutions",
      duration: "2021 - 2022",
      description: "Developed IoT monitoring platform and computer vision applications for industrial automation, building backend APIs and real-time data pipelines for agricultural machinery.",
      achievements: [
        "Built RESTful APIs using Flask/Django/FastAPI connecting carrot cutter GUI to industrial machinery, implementing authentication, rate limiting, and error handling", // 19 words
        "Engineered real-time data pipeline collecting PLC metrics from industrial machinery, streaming to TimescaleDB/InfluxDB via Telegraf for SQL-based time-series analysis", // 20 words
        "Implemented computer vision quality control system using OpenCV, with concurrent Python code (asyncio for IO, multiprocessing for CPU-intensive analysis)", // 18 words
        "Deployed microservices using Docker on Oracle Cloud, integrating Grafana dashboards with SQL queries for real-time monitoring of 50+ machines", // 19 words
        "Automated on-site infrastructure provisioning using Ansible playbooks, configuring microcontrollers and edge devices across production facilities" // 15 words
      ],
      technologies: ["Python", "Flask", "Django", "FastAPI", "SQL", "OpenCV", "asyncio", "multiprocessing", "Docker", "TimescaleDB", "InfluxDB", "Grafana", "Ansible"]
    }
  ];

  // Technical Skills with Proficiency Levels
  const technicalSkills = [
    {
      name: "Cloud & Infrastructure",
      icon: "cloud",
      skills: [
        { name: "AWS (Lambda, S3, EC2, MSK, SQS)", proficiency: "Expert" as const, years: 5 },
        { name: "CloudFormation", proficiency: "Expert" as const, years: 4 },
        { name: "AWS CDK", proficiency: "Advanced" as const, years: 3 },
        { name: "Azure (DevOps, App Service)", proficiency: "Advanced" as const, years: 2 },
        { name: "Oracle Cloud", proficiency: "Intermediate" as const, years: 1 }
      ]
    },
    {
      name: "Programming & Frameworks",
      icon: "code",
      skills: [
        { name: "Python", proficiency: "Expert" as const, years: 5 },
        { name: "SQL (PostgreSQL, DuckDB)", proficiency: "Expert" as const, years: 5 },
        { name: "FastAPI", proficiency: "Expert" as const, years: 3 },
        { name: "Flask", proficiency: "Advanced" as const, years: 4 },
        { name: "Django", proficiency: "Advanced" as const, years: 3 },
        { name: "TypeScript/JavaScript", proficiency: "Intermediate" as const, years: 2 },
        { name: "Java", proficiency: "Intermediate" as const, years: 2 }
      ]
    },
    {
      name: "DevOps & Automation",
      icon: "automation",
      skills: [
        { name: "Docker", proficiency: "Advanced" as const, years: 4 },
        { name: "CI/CD (TeamCity, GitLab, Azure)", proficiency: "Advanced" as const, years: 3 },
        { name: "Ansible", proficiency: "Advanced" as const, years: 2 },
        { name: "Kubernetes", proficiency: "Intermediate" as const, years: 2 },
        { name: "Infrastructure as Code", proficiency: "Expert" as const, years: 4 }
      ]
    },
    {
      name: "Databases & Analytics",
      icon: "database",
      skills: [
        { name: "PostgreSQL", proficiency: "Advanced" as const, years: 4 },
        { name: "DuckDB", proficiency: "Advanced" as const, years: 2 },
        { name: "TimescaleDB", proficiency: "Advanced" as const, years: 2 },
        { name: "MongoDB", proficiency: "Intermediate" as const, years: 3 },
        { name: "InfluxDB", proficiency: "Intermediate" as const, years: 2 }
      ]
    },
    {
      name: "Distributed Systems",
      icon: "network",
      skills: [
        { name: "Event-driven Architecture", proficiency: "Expert" as const, years: 4 },
        { name: "Microservices", proficiency: "Expert" as const, years: 4 },
        { name: "API Design & Development", proficiency: "Expert" as const, years: 5 },
        { name: "Message Queues (SQS, Kafka)", proficiency: "Advanced" as const, years: 3 },
        { name: "Concurrent Programming (asyncio)", proficiency: "Advanced" as const, years: 3 }
      ]
    }
  ];

  return (
    <main className="min-h-screen bg-white py-4">
      <Container maxWidth="5xl">
        {/* Download Button - Hidden in Print */}
        <div className="no-print mb-6 text-center">
          <button
            onClick={handleDownloadResume}
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 transition-colors shadow-sm"
            aria-label="Download resume as PDF"
          >
            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
              <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
            Download Resume
          </button>
        </div>

        {/* Main Resume Content */}
        <div className="bg-white">
          <div className="p-8">
            {/* Header */}
            <Header
              name="Ryo Nishikawa"
              title="Cloud Support Engineer (DevOps) at AWS"
              contact={contactInfo}
            />

            {/* Professional Summary */}
            <ProfessionalSummary summary={professionalSummary} />

            {/* Main Content Grid */}
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Main Content - Work Experience & Skills */}
              <div className="lg:col-span-2 space-y-8">
                {/* Work Experience */}
                <section>
                  <h2 className="text-lg font-bold text-gray-900 mb-3 uppercase border-b-2 border-gray-900 pb-1">
                    Professional Experience
                  </h2>
                  <div className="space-y-6">
                    {workExperience.map((job, index) => (
                      <ExperienceEntry
                        key={index}
                        title={job.title}
                        company={job.company}
                        duration={job.duration}
                        description={job.description}
                        achievements={job.achievements}
                        technologies={job.technologies}
                      />
                    ))}
                  </div>
                </section>

                {/* Technical Skills */}
                <SkillsSection categories={technicalSkills} />
              </div>

              {/* Sidebar */}
              <aside className="space-y-6">
                {/* Education */}
                <SidebarCard 
                  title="Education"
                  icon={
                    <svg fill="currentColor" viewBox="0 0 20 20">
                      <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
                    </svg>
                  }
                >
                  <EducationItem
                    degree="BSc in Computer Science"
                    institution="University of Canterbury"
                    year="2018 - 2020"
                  />
                </SidebarCard>

                {/* Awards & Certifications */}
                <SidebarCard 
                  title="Awards & Recognition"
                  icon={
                    <svg fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5 2a1 1 0 011 1v1h1a1 1 0 010 2H6v1a1 1 0 01-2 0V6H3a1 1 0 010-2h1V3a1 1 0 011-1zm0 10a1 1 0 011 1v1h1a1 1 0 110 2H6v1a1 1 0 11-2 0v-1H3a1 1 0 110-2h1v-1a1 1 0 011-1zM12 2a1 1 0 01.967.744L14.146 7.2 17.5 9.134a1 1 0 010 1.732L14.146 12.8l-1.179 4.456a1 1 0 01-1.934 0L9.854 12.8 6.5 10.866a1 1 0 010-1.732L9.854 7.2l1.179-4.456A1 1 0 0112 2z" clipRule="evenodd" />
                    </svg>
                  }
                >
                  <AwardItem
                    title="Most Valuable Player Award"
                    organization="AWS Support Engineering"
                    description="Recognized for exceptional productivity and quality, raising the bar for team performance"
                  />
                  <AwardItem
                    title="Rising Star Award"
                    organization="AWS Support Engineering"
                    description="Awarded for rapid ramp-up and quick adaptation to AWS culture as a new hire"
                  />
                  <AwardItem
                    title="CloudFormation SME Badge"
                    organization="AWS Support Engineering"
                    description="Deep technical expertise in CloudFormation service architecture, known issues, and complex case resolution"
                  />
                  <AwardItem
                    title="2nd Place - HackChch"
                    organization="48 Hour Smart City Hackathon"
                    year="2020"
                  />
                </SidebarCard>

                {/* Content & Contributions */}
                <SidebarCard 
                  title="Content & Contributions"
                  icon={
                    <svg fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
                    </svg>
                  }
                >
                  <ContentItem
                    title="AWS Knowledge Center Video"
                    description="Resolving 'Already Exists' Error in AWS CDK"
                    url="https://www.youtube.com/watch?v=B2XfSe7mQKY"
                    type="video"
                  />
                </SidebarCard>

                {/* Languages */}
                <SidebarCard 
                  title="Languages"
                  icon={
                    <svg fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M7 2a1 1 0 011 1v1h3a1 1 0 110 2H9.578a18.87 18.87 0 01-1.724 4.78c.29.354.596.696.914 1.026a1 1 0 11-1.44 1.389c-.188-.196-.373-.396-.554-.6a19.098 19.098 0 01-3.107 3.567 1 1 0 01-1.334-1.49 17.087 17.087 0 003.13-3.733 18.992 18.992 0 01-1.487-2.494 1 1 0 111.79-.89c.234.47.489.928.764 1.372.417-.934.752-1.913.997-2.927H3a1 1 0 110-2h3V3a1 1 0 011-1zm6 6a1 1 0 01.894.553l2.991 5.982a.869.869 0 01.02.037l.99 1.98a1 1 0 11-1.79.895L15.383 16h-4.764l-.724 1.447a1 1 0 11-1.788-.894l.99-1.98.019-.038 2.99-5.982A1 1 0 0113 8zm-1.382 6h2.764L13 11.236 11.618 14z" clipRule="evenodd" />
                    </svg>
                  }
                >
                  <ListItem>English (Fluent)</ListItem>
                  <ListItem>Japanese (Native)</ListItem>
                </SidebarCard>

                {/* Interests */}
                <SidebarCard 
                  title="Interests"
                  icon={
                    <svg fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                    </svg>
                  }
                >
                  <ListItem>Rugby & Sports</ListItem>
                  <ListItem>Powerlifting/Crossfit</ListItem>
                  <ListItem>Neovim & Developer Tools</ListItem>
                </SidebarCard>
              </aside>
            </div>
          </div>
        </div>
      </Container>
    </main>
  );
}
