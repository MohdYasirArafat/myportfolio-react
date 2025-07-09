// src/components/About.jsx
import React from "react";

const About = () => {
  return (
    <section
      id="about"
      className="px-6 md:px-12 py-16 bg-white dark:bg-gray-900 transition-colors duration-300"
    >
      <div className="max-w-5xl mx-auto text-center md:text-left">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-6">
          About Me
        </h2>
        <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
          I'm Mohd Yasir, a dedicated and creative Full Stack Developer with a
          passion for building modern, responsive, and user-friendly web
          applications. With a solid foundation in both front-end and back-end
          technologies, I strive to create efficient and scalable solutions.
        </p>
        <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed mt-4">
          I enjoy turning complex problems into simple, beautiful, and intuitive
          designs. When I'm not coding, you’ll find me exploring new tech trends
          or contributing to open-source projects.
        </p>
        <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed mt-4">
          I enjoy cooking, reading books, and practicing calligraphy. Cooking is
          a form of self-care—focusing my mind, reducing stress, and boosting
          creativity  . Reading keeps me curious and fuels continuous learning.
          And calligraphy enhances my fine motor skills, patience, and mindful
          focus through its deliberate, therapeutic strokes 
        </p>
      </div>
    </section>
  );
};

export default About;
