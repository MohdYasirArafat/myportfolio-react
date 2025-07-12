import React from "react";
import portfolioImg from "../../assets/portfolioImg.png";
import foodAppImg from  "../../assets/foodFlavoro.png";
import weatherImg from  "../../assets/weatherImg.png";
import amazonImg from  "../../assets/amazonImg.png";
import aiChatImg from  "../../assets/ai-chat-img.png";

const projects = [
  {
    title: "Portfolio Website",
    description: "A personal portfolio built using React and Tailwind CSS to showcase my skills, projects, and experience.",
    image: portfolioImg,
    tech: ["Html","React", "Tailwind CSS"],
    link: "https://yourportfolio.com",
    github: "https://github.com/yourusername/portfolio"
  },
  {
    title: "Food Ordering App",
    description: "A MERN stack application for ordering food with user authentication and real-time updates.",
    image: foodAppImg,
    tech: ["Html", "Tailwind Css","Javascript", "React"],
    link: "https://food-react-app-beta.vercel.app/",
    github: "https://github.com/MohdYasirArafat/food-react-app"
  },
  {
    title: "Ai-Chat-App",
    description: "A ai-chat-app built using React  with dark mode and responsive layout.",
    image: aiChatImg,
    tech: ["Html","React", "Tailwind CSS"],
    link: "https://ai-chat-app-ivory.vercel.app/",
    github: "https://github.com/MohdYasirArafat/react-ai-app"
  },
  {
    title: "weather-app",
    description: "A weather-app built using React  with  responsive layout.",
    image: weatherImg,
    tech: ["Html","React","javascript", "Tailwind CSS"],
    link: "https://weather-app-jade-one-31.vercel.app/",
    github: "https://github.com/MohdYasirArafat/weather-app"
  },
  {
    title: "Amazon Clone",
    description: "Amaxon clone built using Html, css and javascript with  responsive layout.",
    image: amazonImg,
    tech: ["JavaScript", "Html", " CSS"],
    link: "https://amazon-clone-ten-taupe-97.vercel.app/",
    github: "https://github.com/MohdYasirArafat/amazon-clone"
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="px-6 md:px-12 py-16 bg-gray-100 dark:bg-gray-800 transition-colors duration-300"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 dark:text-white mb-12">
          Projects
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-900 rounded-lg shadow-md p-4 hover:shadow-xl transition-shadow duration-300"
            >
              <img
                src={project.image}
                alt={project.title}
                className="rounded-md mb-4 w-full h-48 object-cover"
              />
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
                {project.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                {project.description}
              </p>
              <div className="mb-4">
                <h4 className="font-medium text-gray-700 dark:text-gray-300 mb-1">Technologies Used:</h4>
                <ul className="flex flex-wrap gap-2 text-sm">
                  {project.tech.map((tech, i) => (
                    <li
                      key={i}
                      className="bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-100 px-2 py-1 rounded"
                    >
                      {tech}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex flex-wrap gap-4">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-gray-800 text-white px-4 py-1.5 rounded hover:bg-gray-700 dark:bg-white dark:text-gray-900 dark:hover:bg-gray-200"
                >
                  Live Project
                </a>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-gray-800 text-white px-4 py-1.5 rounded hover:bg-gray-700 dark:bg-white dark:text-gray-900 dark:hover:bg-gray-200"
                >
                  GitHub Source
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

