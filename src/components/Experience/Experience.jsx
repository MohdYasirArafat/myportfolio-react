// src/components/Experience.jsx
import React from "react";

const experiences = [
  {
    role: "Frontend Developer Intern",
    company: "Ducat Noida",
    duration: "Feb 2025 - Jun 2025",
    description:
      "Developed responsive UI components using React and Tailwind CSS. Collaborated with the design team and backend developers to integrate APIs and ensure seamless user experience.",
      tech: ["Html", "Css","Java Script","Bootstrap", "React", "Node.js", "My Sql", "Git & Github"]
  },
  {
    role: "Web Development Intern",
    company: "Intern DEV",
    duration: "Jul 2023 - Sep 2023",
    description:
      "Worked on creating and maintaining three projects like Persolnal Portfolio, Calculator and To-Do-List App .",
      tech: ["Html", "Css", "Java Script", "Bootstrap"]
  }
];

const Experience = () => {
  return (
    <section
      id="experience"
      className="px-6 md:px-12 py-16 bg-white dark:bg-gray-900 transition-colors duration-300"
    >
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 dark:text-white mb-12">
          Experience
        </h2>
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                {exp.role} - <span className="text-blue-600">{exp.company}</span>
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">{exp.duration}</p>
              <p className="text-gray-700 dark:text-gray-300">{exp.description}</p>

            {/* Technologies Used */}
                <div className="mb-4">
                <h4 className="font-medium text-gray-700 dark:text-gray-300 mb-1">Technologies Used:</h4>
                <ul className="flex flex-wrap gap-2 text-sm">
                  {exp.tech.map((tech, i) => (
                    <li
                      key={i}
                      className="bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-100 px-2 py-1 rounded"
                    >
                      {tech}
                    </li>
                  ))}
                </ul>
              </div>

            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
};

export default Experience;
