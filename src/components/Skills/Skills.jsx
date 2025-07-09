// src/components/Skills.jsx
import React from "react";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaGithub, FaBootstrap } from "react-icons/fa";
import { SiMysql } from "react-icons/si";
import { SiVite, SiVscodium } from "react-icons/si";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Skills = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section
      id="skills"
      className="px-6 md:px-12 py-16 bg-gray-100 dark:bg-gray-800 transition-colors duration-300"
    >
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-12">
          Skills
        </h2>

        <div className="mb-12">
          <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-6">Technologies</h3>
          <Slider {...settings}>
            <div className="flex flex-col items-center">
              <FaHtml5 className="text-5xl text-orange-600" />
              <p className="mt-2 text-gray-700 dark:text-gray-300">HTML</p>
            </div>
            <div className="flex flex-col items-center">
              <FaCss3Alt className="text-5xl text-blue-600" />
              <p className="mt-2 text-gray-700 dark:text-gray-300">CSS</p>
            </div>
            <div className="flex flex-col items-center">
              <FaJs className="text-5xl text-yellow-500" />
              <p className="mt-2 text-gray-700 dark:text-gray-300">JavaScript</p>
            </div>
            <div className="flex flex-col items-center">
              <FaBootstrap className="text-5xl text-yellow-500" />
              <p className="mt-2 text-gray-700 dark:text-gray-300">Bootstrap</p>
            </div>
            <div className="flex flex-col items-center">
              <FaReact className="text-5xl text-cyan-400" />
              <p className="mt-2 text-gray-700 dark:text-gray-300">React</p>
            </div>
            <div className="flex flex-col items-center">
              <SiMysql className="text-5xl text-cyan-400" />
              <p className="mt-2 text-gray-700 dark:text-gray-300">Mysql</p>
            </div>
          </Slider>
        </div>

        <div>
          <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-6">Tools</h3>
          <Slider {...settings}>
            <div className="flex flex-col items-center">
              <SiVscodium className="text-5xl text-blue-500" />
              <p className="mt-2 text-gray-700 dark:text-gray-300">VS Code</p>
            </div>
            <div className="flex flex-col items-center">
              <FaGithub className="text-5xl text-gray-900 dark:text-white" />
              <p className="mt-2 text-gray-700 dark:text-gray-300">GitHub</p>
            </div>
            <div className="flex flex-col items-center">
              <SiVite className="text-5xl text-purple-500" />
              <p className="mt-2 text-gray-700 dark:text-gray-300">Vite</p>
            </div>
          </Slider>
        </div>
      </div>
      
    </section>
  );
};

export default Skills;








