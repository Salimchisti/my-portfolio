import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faInstagram, faGithub } from '@fortawesome/free-brands-svg-icons'; // Social media icons
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'; // Gmail (Envelope) icon

const SocialIcons = () => {
  return (
    <div className="fixed top-1/2 right-0 transform -translate-y-1/2 flex flex-col space-y-4 p-2">
      {/* Social Media and Email Icons */} 
      <a href="https://www.linkedin.com/in/muhammed-salim-209994192/" target="_blank" rel="noopener noreferrer" className="text-black hover:text-blue-400">
        <FontAwesomeIcon icon={faLinkedin} size="2x" />
      </a>
      
      <a href="https://www.instagram.com/salimchisti/" target="_blank" rel="noopener noreferrer" className="text-black hover:text-pink-400">
        <FontAwesomeIcon icon={faInstagram} size="2x" />
      </a>

      <a href="https://github.com/Salimchisti" target="_blank" rel="noopener noreferrer" className="text-black hover:text-gray-400">
        <FontAwesomeIcon icon={faGithub} size="2x" />
      </a>

      {/* Gmail (Envelope) Icon */}
      <a href="mailto:muhammedsalim26102018@gmail.com" target="_blank" rel="noopener noreferrer" className="text-black hover:text-red-400">
        <FontAwesomeIcon icon={faEnvelope} size="2x" />
      </a>
    </div>
  );
};

export default SocialIcons;
