// src/components/Education.jsx
import React from "react";

const Education = () => {
  const educationList = [
    {
      degree: "Bachelor of Technology in Computer Science",
      institution: "Quantum University, Roorkee",
      year: "2020 - 2024",
      details: "Completed core subjects like Data Structures, Algorithms, Web Development, and DBMS."
    },
    {
      degree: "Senior Secondary (12th)",
      institution: "Kisan Agri Inter College, Gopali (Saharanpur)",
      year: "2018 - 2020",
      details: "Focused on PCM with Computer Science."
    },
    {
      degree: "High School (10th)",
      institution: "Kisan Agri Inter College, Gopali (Saharanpur)",
      year: "2016 - 2018",
      details: "Completed general education with distinction."
    }
  ];

  return (
    <section
      id="education"
      className="px-6 md:px-12 py-16 bg-white dark:bg-gray-900 transition-colors duration-300"
    >
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 dark:text-white mb-12">
          Education
        </h2>

        <div className="space-y-8">
          {educationList.map((edu, index) => (
            <div
              key={index}
              className="border-l-4 border-blue-600 pl-4 md:pl-6 py-4 bg-gray-50 dark:bg-gray-800 rounded-md shadow-md"
            >
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
                {edu.degree}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">{edu.institution}</p>
              <p className="text-gray-500 dark:text-gray-400 italic">{edu.year}</p>
              <p className="text-gray-700 dark:text-gray-200 mt-2">{edu.details}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;

