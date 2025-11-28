import Link from 'next/link';

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: 'Construction Domain Project',
      duration: '7 Months',
      description: 'A project focusing on construction domain with a focus on frontend architecture',
      technologies: ['Micro Frontend', 'Angular', 'Duende BFF', 'Azure Cloud', 'CI/CD'],
      achievements: [
        'Designed and implemented Micro Frontend (MFE) architecture to integrate multiple customer-facing applications',
        'Developed a shell application to host MFEs built using diverse technology stacks for modular scalability',
        'Integrated Duende BFF for secure, cookie-based authentication across frontend modules',
        'Utilized Azure Cloud and CI/CD pipelines to automate deployment and ensure high availability and performance',
      ],
    },
    {
      id: 2,
      title: 'Retail Domain Project - Backend Architecture',
      duration: '26 Months',
      description: 'A project focusing on retail domain backend architecture',
      technologies: ['.NET', 'Microservices', 'Azure Service Bus', 'Angular', 'Kendo UI', 'JWT'],
      achievements: [
        'Designed and developed backend solution architecture with Microservices in .NET',
        'Used Service Bus for interacting with multiple app services for long-running API calls',
        'Designed and developed UI widgets using Angular and Kendo UI',
        'Worked on bug fixes and enhancement tasks',
        'Implemented JWT token authentication',
      ],
    },
    {
      id: 3,
      title: 'Retail Domain Project - Full Stack',
      duration: '5 Months',
      description: 'A project with mixed frontend and backend work',
      technologies: ['Azure App Services', 'Azure Function Apps', 'Microservices', '.NET'],
      achievements: [
        'Developed multiple modules and deployed them on Azure App Services & Azure Function Apps',
        'Followed microservices architecture',
        'Created query templates to execute multiple queries and return structured tree-format responses',
        'Managed multiple retailers using configurations',
      ],
    },
    {
      id: 4,
      title: 'Law Domain Project',
      duration: '25 Months',
      description: 'A project focusing on law domain website development',
      technologies: ['ASP.NET Core', 'Angular', 'NuGet Packages', 'Agile'],
      achievements: [
        'Developed various modules using ASP.NET Core and Angular',
        'Created and used custom NuGet packages for shared functionality',
        'Built UI dashboards and insights pods in Angular',
        'Applied Agile practices including sprint planning, daily stand-ups, and retrospectives',
      ],
    },
  ];

  return (
    <main className="min-h-screen pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-4">
            My <span className="text-green-600 dark:text-green-400">Projects</span>
          </h1>
          <div className="w-24 h-1 bg-green-600 mx-auto mb-4"></div>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            A collection of projects I've worked on across different domains, showcasing my expertise in 
            full-stack development, microservices, and cloud technologies
          </p>
        </div>

        {/* Projects Grid */}
        <div className="space-y-12">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-shadow duration-300"
            >
              <div className="p-8">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                      {project.title}
                    </h3>
                    <span className="inline-block px-3 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 text-sm rounded-full font-semibold">
                      {project.duration}
                    </span>
                  </div>
                </div>

                <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-400 mb-3 uppercase tracking-wide">
                    Technologies Used
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 text-sm rounded-full font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Key Achievements */}
                <div>
                  <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-400 mb-3 uppercase tracking-wide">
                    Key Achievements
                  </h4>
                  <ul className="space-y-2">
                    {project.achievements.map((achievement, index) => (
                      <li key={index} className="flex items-start text-gray-600 dark:text-gray-300">
                        <span className="text-green-600 dark:text-green-400 mr-3 mt-1">•</span>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}

