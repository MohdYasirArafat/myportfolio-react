// src/components/Footer.jsx
import React from "react";
import {
  FaInstagram,
  FaLinkedin,
  FaFacebook,
  FaDiscord,
  FaGithub,
  FaPhoneAlt
} from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { IoLocation } from "react-icons/io5";


const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between">

        <p className="text-center md:text-left mb-4 md:mb-0">
          &copy; {new Date().getFullYear()} Mohd Yasir. All rights reserved.
        </p>
        <div className="text-center ">
          <h2 className="md:text-left mb-4  md:mb-0">Contact</h2>
          <p className="text-center md:text-left mb-4 mt-2 md:mb-0">
          <FaPhoneAlt className="inline-block " />(+91) 9389753565
        </p>
        
        <p className="text-center md:text-left mb-4 md:mb-0">
          <HiOutlineMail className="inline-block mr-1" />my3904902@gmail.com
        </p>
        <p className="text-center md:text-left mb-4 md:mb-0">
          <IoLocation className="inline-block mr-1" />New Delhi, Iindia
        </p>
        </div>
          <div className="text-center">
            <h2 className="md:text-left mb-4 md:mb-0">Links</h2>
            <div className="flex space-x-6 text-xl mt-4">
          <a
            href="https://instagram.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pink-400"
          >
            <FaInstagram />
          </a>
          <a
            href="https://www.linkedin.com/in/mohd-yasir-027614217/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://facebook.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-600"
          >
            <FaFacebook />
          </a>
          <a
            href="https://discord.com/users/yourdiscordid"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-indigo-400"
          >
            <FaDiscord />
          </a>
          <a
            href="https://github.com/MohdYasirArafat"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-400"
          >
            <FaGithub />
          </a>
        </div>
          </div>
        
      </div>
    </footer>
  );
};

export default Footer;
