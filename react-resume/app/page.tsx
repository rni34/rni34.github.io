export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-5xl mx-auto bg-white shadow-lg rounded-lg p-8">
        {/* Header */}
        <header className="mb-8 border-b pb-6">
          <div className="flex items-start gap-6 mb-6">
            <img 
              src="/passport_photo.jpeg" 
              alt="Ryo Nishikawa" 
              className="w-32 h-32 rounded-full object-cover border-4 border-blue-600 shadow-lg flex-shrink-0"
            />
            <div className="flex-1">
              <h1 className="text-5xl font-bold text-gray-900 mb-2">Ryo Nishikawa</h1>
              <p className="text-xl text-gray-600 mb-4">Cloud Support Engineer (DevOps) at AWS</p>
              <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                <a href="tel:0274365897" className="hover:text-blue-600">0274365897</a>
                <span>•</span>
                <a href="mailto:hakunishikawa@gmail.com" className="hover:text-blue-600">hakunishikawa@gmail.com</a>
                <span>•</span>
                <span>Auckland</span>
                <span>•</span>
                <a href="https://www.linkedin.com/in/ryo-nishikawa-99b985188/" className="hover:text-blue-600">LinkedIn</a>
              </div>
            </div>
          </div>
        </header>

        {/* About */}
        <section className="mb-8">
          <p className="text-gray-700 leading-relaxed">
            <strong>DevOps Engineer | Cloud Infrastructure Specialist</strong> with 4+ years of experience in cloud automation, Infrastructure as Code (IaC), and continuous integration/continuous deployment (CI/CD). AWS Subject Matter Expert (SME) in AWS CloudFormation. Proven track record optimizing deployment pipelines, implementing zero-downtime deployments. Expert in Python, Terraform, Docker with strong focus on security, reliability, and operational excellence.
          </p>
        </section>

        {/* Experience */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 border-l-4 border-blue-600 pl-3">Work Experience</h2>
          <div className="space-y-6">
            <div>
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">Cloud Support Engineer (DevOps)</h3>
                  <p className="text-gray-600">Amazon Web Services (AWS)</p>
                </div>
                <span className="text-gray-500 text-sm">2024 - Present</span>
              </div>
              <p className="text-gray-700 mb-2">Provide expert technical support for AWS DevOps services, specializing in Infrastructure as Code (IaC) and continuous deployment solutions for Fortune 500 enterprises.</p>
              <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                <li>Resolve 20+ technical support cases monthly across all severity levels, with 80% specialization in AWS CloudFormation, AWS CDK, Elastic Beanstalk, Control Tower, CodeSeries, and Amazon Q Developer</li>
                <li>Guide AWS best practices for enterprise customers, improving security posture, fault tolerance, system performance, and reducing operational costs</li>
                <li>Develop Model Context Protocol (MCP) Servers using Python to automate our internal tools to work on cases. CloudFormation and CodePipeline troubleshooting, reducing 45mins of the engineer time globally</li>
                <li>Collaborate with Technical Account Managers (TAMs), Professional Services, and Solution Architects on high-priority escalations; participate in on-call rotation for P1 P0 incidents</li>
                <li>Mentor Cloud Support Engineers on AWS DevOps services; author internal knowledge base articles and technical documentation</li>
              </ul>
            </div>

            <div>
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">DevOps Engineer</h3>
                  <p className="text-gray-600">Onside</p>
                </div>
                <span className="text-gray-500 text-sm">2023 - 2024</span>
              </div>
              <p className="text-gray-700 mb-2">Engineered and maintained CI/CD infrastructure for biosecurity web portal and mobile applications, ensuring regulatory compliance and high availability.</p>
              <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                <li>Orchestrated complete CI/CD migration from TeamCity and Octopus Deploy to Azure Pipelines, consolidating build and deployment processes</li>
                <li>Architected zero-downtime deployment strategy using Azure App Service with high availability configuration, ensuring 99.9% uptime</li>
              </ul>
            </div>

            <div>
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">Software Engineer</h3>
                  <p className="text-gray-600">HealthStream</p>
                </div>
                <span className="text-gray-500 text-sm">2022 - 2023</span>
              </div>
              <p className="text-gray-700 mb-2">Built and maintained cloud-native data platform for healthcare capacity management, ensuring HIPAA compliance.</p>
              <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                <li>Engineered automated CI/CD pipelines using IaC with Pulumi and Terraform on Azure DevOps, implementing comprehensive automated testing for HIPAA compliance</li>
                <li>Architected cloud-based event-driven streaming pipeline processing real-time data into AWS S3, MongoDB, and Lambda, integrating with Amazon MSK and SageMaker</li>
              </ul>
            </div>

            <div>
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">Junior Software Engineer</h3>
                  <p className="text-gray-600">Wyma Solutions</p>
                </div>
                <span className="text-gray-500 text-sm">2021 - 2022</span>
              </div>
              <p className="text-gray-700 mb-2">Developed IoT monitoring solutions and computer vision applications for industrial automation in agricultural technology sector.</p>
              <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                <li>Developed Python-based IoT data collection system to stream PLC data to Oracle Cloud InfluxDB via Telegraf for real-time industrial monitoring</li>
                <li>Deployed Grafana dashboards on Oracle Cloud using Docker for real-time data visualization</li>
                <li>Built computer vision application using OpenCV2 and Python to automate quality control processes</li>
                <li>Automated environment provisioning using Ansible playbooks across multiple production nodes</li>
              </ul>
            </div>
          </div>
        </section>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Skills */}
          <section className="md:col-span-2">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 border-l-4 border-blue-600 pl-3">Technical Skills</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Cloud Platforms & Services</h3>
                <p className="text-gray-700 text-sm">AWS (CloudFormation, CDK, CodePipeline, Lambda, S3, EC2, Control Tower), Azure (DevOps, Pipelines, App Service)</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">DevOps & IaC</h3>
                <p className="text-gray-700 text-sm">Terraform, Pulumi, AWS CloudFormation, AWS CDK, Azure and gitlab CI/CD pipelines, Docker, Ansible</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Programming</h3>
                <p className="text-gray-700 text-sm">Python, JavaScript, Java, Node.js, C, Vue.js, Flask</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Databases & Streaming</h3>
                <p className="text-gray-700 text-sm">PostgreSQL, MySQL, MongoDB, InfluxDB, DuckDB, Amazon MSK (Kafka)</p>
              </div>
            </div>
          </section>

          {/* Sidebar */}
          <aside className="space-y-6">
            {/* Education */}
            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-3 border-l-4 border-blue-600 pl-3">Education</h2>
              <div>
                <h3 className="font-semibold text-gray-900">BSc in Computer Science</h3>
                <p className="text-gray-600 text-sm">University of Canterbury</p>
                <p className="text-gray-500 text-sm">2018 - 2020</p>
              </div>
            </section>

            {/* Awards */}
            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-3 border-l-4 border-blue-600 pl-3">Awards</h2>
              <ul className="space-y-3 text-sm">
                <li>
                  <p className="font-semibold text-gray-900">Most Valuable Player Award</p>
                  <p className="text-gray-600">AWS Support Engineering</p>
                </li>
                <li>
                  <p className="font-semibold text-gray-900">Rising Star Award</p>
                  <p className="text-gray-600">AWS Support Engineering</p>
                </li>
                <li>
                  <p className="font-semibold text-gray-900">CloudFormation SME</p>
                  <p className="text-gray-600">AWS Support Engineering</p>
                </li>
                <li>
                  <p className="font-semibold text-gray-900">2nd Place - HackChch</p>
                  <p className="text-gray-600">48 Hour Smart City Hackathon</p>
                </li>
              </ul>
            </section>

            {/* Content & Contributions */}
            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-3 border-l-4 border-blue-600 pl-3">Content</h2>
              <ul className="space-y-3 text-sm">
                <li>
                  <a 
                    href="https://www.youtube.com/watch?v=B2XfSe7mQKY" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="font-semibold text-blue-600 hover:text-blue-800 hover:underline"
                  >
                    AWS Knowledge Center Video
                  </a>
                  <p className="text-gray-600">Resolving "Already Exists" Error in AWS CDK</p>
                </li>
              </ul>
            </section>

            {/* Languages */}
            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-3 border-l-4 border-blue-600 pl-3">Languages</h2>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>English (Fluent)</li>
                <li>Japanese (Native)</li>
              </ul>
            </section>

            {/* Interests */}
            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-3 border-l-4 border-blue-600 pl-3">Interests</h2>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>Rugby & Sports</li>
                <li>Powerlifting/Crossfit</li>
                <li>Neovim</li>
              </ul>
            </section>
          </aside>
        </div>
      </div>
    </main>
  );
}
