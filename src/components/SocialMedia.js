import React from 'react';
import './module.css';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const SocialMedia = () => {
  return (
    <div className="social-media">
      <h2>Follow us on Social Media</h2>
      <div className="social-icons">
        <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
          <FaFacebook className="facebook-icon" />
        </a>
        <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
          <FaTwitter className="twitter-icon" />
        </a>
        <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
          <FaInstagram className="instagram-icon" />
        </a>
        <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="linkedin-icon" />
        </a>
      </div>
    </div>
  );
};

export default SocialMedia;
