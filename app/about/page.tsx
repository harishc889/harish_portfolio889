'use client';

import Image from 'next/image';
import { useState } from 'react';

export default function About() {
  const [imageError, setImageError] = useState(false);

  return (
    <main className="min-h-screen pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-4">
            About <span className="text-green-600 dark:text-green-400">Me</span>
          </h1>
          <div className="w-24 h-1 bg-green-600 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          {/* Profile Image Section */}
          <div className="flex justify-center">
            <div className="relative w-64 h-64 rounded-full overflow-hidden border-4 border-green-600 shadow-xl">
              {!imageError ? (
                <Image
                  src="/images/profile.jpg"
                  alt="Harish Singh Chauhan"
                  width={256}
                  height={256}
                  className="w-full h-full object-cover"
                  onError={() => setImageError(true)}
                />
              ) : (
                <div className="w-full h-full bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center text-white text-6xl font-bold">
                  HSC
                </div>
              )}
            </div>
          </div>

          {/* Bio Section */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
              Harish Singh Chauhan
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
              Experienced software engineer with over 5 years of hands-on experience in software development. 
              My expertise lies in front-end technologies, particularly Angular, coupled with a strong background 
              in backend development using .NET.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              I specialize in scalable application development, with proven expertise in microservices and micro 
              frontend architecture. Well-versed in Agile methodologies, I&apos;m dedicated to delivering high-quality 
              solutions in retail and law domains.
            </p>
            <div className="mt-6 flex items-center space-x-4">
              <span className="px-4 py-2 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-full text-sm font-semibold">
                5+ Years Experience
              </span>
              <span className="px-4 py-2 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-full text-sm font-semibold">
                Dehradun, India
              </span>
            </div>
          </div>
        </div>

        {/* Education Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
            Education
          </h2>
          <div className="space-y-6">
            <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg border-l-4 border-green-600">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Bachelor of Technology (B.Tech), Computer Science
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-1">
                Graphic Era University, Dehradun
              </p>
              <p className="text-gray-500 dark:text-gray-400">
                2016 - 2020
              </p>
            </div>
            <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg border-l-4 border-green-600">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                12th Standard
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-1">
                CBSE, English
              </p>
              <p className="text-gray-500 dark:text-gray-400">
                2016
              </p>
            </div>
            <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg border-l-4 border-green-600">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                10th Standard
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-1">
                CBSE, English
              </p>
              <p className="text-gray-500 dark:text-gray-400">
                2014
              </p>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
            Key Skills
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                Backend Technologies
              </h3>
              <div className="space-y-3">
                {['.NET', 'C#', 'ASP.NET MVC', 'Web API', 'RESTful API Development', 'Entity Framework'].map((skill) => (
                  <div key={skill} className="flex items-center">
                    <div className="w-2 h-2 bg-green-600 rounded-full mr-3"></div>
                    <span className="text-gray-600 dark:text-gray-300">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                Frontend & Cloud Technologies
              </h3>
              <div className="space-y-3">
                {['Angular', 'Azure Cloud Services', 'Azure Service Bus', 'Azure Functions', 'Azure App Service', 'Azure Blob Storage'].map((skill) => (
                  <div key={skill} className="flex items-center">
                    <div className="w-2 h-2 bg-green-600 rounded-full mr-3"></div>
                    <span className="text-gray-600 dark:text-gray-300">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                Database & DevOps
              </h3>
              <div className="space-y-3">
                {['SQL Server', 'SQL Azure', 'CI/CD', 'Azure DevOps'].map((skill) => (
                  <div key={skill} className="flex items-center">
                    <div className="w-2 h-2 bg-green-600 rounded-full mr-3"></div>
                    <span className="text-gray-600 dark:text-gray-300">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                Architecture & Methodologies
              </h3>
              <div className="space-y-3">
                {['Microservices', 'Micro Frontend Architecture', 'Agile Methodologies', 'Cloud-Native Applications'].map((skill) => (
                  <div key={skill} className="flex items-center">
                    <div className="w-2 h-2 bg-green-600 rounded-full mr-3"></div>
                    <span className="text-gray-600 dark:text-gray-300">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section>
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
            Work Experience
          </h2>
          <div className="space-y-8">
            <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg">
              <div className="flex justify-between items-start mb-3">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    Senior Software Engineer
                  </h3>
                  <p className="text-green-600 dark:text-green-400 font-medium">
                    Nitor Infotech, An Ascendion Company
                  </p>
                </div>
                <span className="text-gray-500 dark:text-gray-400 text-sm">
                  Aug 2022 – Present
                </span>
              </div>
              <p className="text-gray-600 dark:text-gray-300 mb-3">
                Full Stack Developer | .NET | Angular | Azure DevOps | SQL Server
              </p>
              <p className="text-gray-600 dark:text-gray-300">
                Leading projects utilizing microservices and micro frontend architecture. 
                Specializing in scalable application development with cloud-native deployment and management.
              </p>
            </div>

            <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg">
              <div className="flex justify-between items-start mb-3">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    Programmer Analyst
                  </h3>
                  <p className="text-green-600 dark:text-green-400 font-medium">
                    Cognizant
                  </p>
                </div>
                <span className="text-gray-500 dark:text-gray-400 text-sm">
                  Jul 2020 – Aug 2022
                </span>
              </div>
              <p className="text-gray-600 dark:text-gray-300 mb-3">
                Full Stack Developer | .NET | Angular | SQL | ASP.NET MVC | Entity Framework
              </p>
              <p className="text-gray-600 dark:text-gray-300">
                Developed various modules and worked on bug fixes and enhancement tasks. 
                Applied Agile practices including sprint planning, daily stand-ups, and retrospectives.
              </p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

