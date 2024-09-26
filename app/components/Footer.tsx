import React from 'react'
import { Map, Mail, Phone, Github, Linkedin } from "lucide-react";

interface FooterProps {
    isDarkMode: boolean; // Accept isDarkMode as a prop
}

const Footer: React.FC<FooterProps> = ({ isDarkMode }) => (
    <footer className={`py-8 ${isDarkMode ? 'bg-gray-900' : 'bg-white'} text-${isDarkMode ? 'white' : 'black'}`}> {/* Updated background and text color */}
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <p>&copy; 2024 Babou. All rights reserved.</p>
        <div className="flex space-x-4 mt-4 md:mt-0">
          <a
            href="https://github.com/princebabou"
            className="hover:text-blue-400 transition-colors duration-300"
          >
            <Github size={24} />
          </a>
          <a
            href="https://www.linkedin.com/in/manzi-babou-1b661b294/"
            className="hover:text-blue-400 transition-colors duration-300"
          >
            <Linkedin size={24} />
          </a>
          <a
            href="mailto:baboumanzi69@gmail.com"
            className="hover:text-blue-400 transition-colors duration-300"
          >
            <Mail size={24} />
          </a>
          <a
            href="tel:+250796103589"
            className="hover:text-blue-400 transition-colors duration-300"
          >
            <Phone size={24} />
          </a>
        </div>
      </div>
    </footer>
);

export default Footer