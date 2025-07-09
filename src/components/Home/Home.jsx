import React from "react";

import heroImage from "../../assets/hero4.jpg";
import { MdOutlineFileDownload } from "react-icons/md";

const Home = () => {
  return (
    <section
      id="home"
      className="flex flex-col-reverse md:flex-row items-center justify-center px-6 md:px-12 py-10 bg-gray-100 dark:bg-gray-800 transition-colors duration-300"
    >
      {/* Left Section */}
      <div className="w-full md:w-1/2 text-center md:text-left space-y-6">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
          Hi, I'm Yasir
        </h1>
        <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300">
          I'm a passionate Full Stack Developer building beautiful web
          experiences.
        </p>
       <div className="flex flex-col gap-2 md:flex-row font-bold">
         <div className="flex justify-center md:justify-start gap-4 flex-wrap">
        <a
          href="#contact"
          className="inline-block bg-blue-600 text-white px-6 py-2 rounded-lg shadow hover:bg-blue-700 transition"
        >
          Contact Me
        </a>
        </div>
        <div className="flex justify-center md:justify-start gap-4 flex-wrap">
          <a
            href="/resume.pdf"
            download
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg transition duration-300"
          >
            <MdOutlineFileDownload className="inline-block mr-2" />
            Resume
          </a>
        </div>
       </div>
      </div>

      {/* Right Section */}
      <div className="w-full md:w-1/2 flex justify-center mb-6 md:mb-0">
        <img
          src={heroImage}
          alt="Yasir Hero"
          className="w-60 h-60 md:w-80 md:h-80 rounded-full object-cover shadow-lg"
        />
      </div>
      {/* <div className="flex justify-center items-center w-full md:w-1/2">
        <img
          src={heroImage}
          alt="Hero"
          className="w-64 h-64 object-cover rounded-full shadow-lg"
        />
      </div> */}
    </section>
  );
};

export default Home;
