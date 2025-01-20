import React from 'react';
import { FaLinkedin, FaInstagram, FaGithub, FaTwitter } from 'react-icons/fa'; // Import Twitter icon
import './Footer.css';

const Footer = () => {
  return (
    <div className="footer">
      {/* Links Section */}
      <div className="footer-links">
        <ul>
          <li><a href="/shoes">Shoes</a></li>
          <li><a href="/about">About Us</a></li>
          <li><a href="/contact">Contact & Info</a></li>
          <li><a href="/term">Terms and Conditions</a></li>
          <li><a href="/return">Return Policy</a></li>
          <li><a href="/our">Our Business</a></li>
          <li><a href="/help">Help</a></li>
        </ul>
      </div>

      {/* Social Media Section */}
      <div className="footer-social">
        <a href="https://www.linkedin.com/in/bhipendar-kumar-b5068626a/" target="_blank" rel="noopener noreferrer" className="social-link">
          <FaLinkedin size={24} />
        </a>
        <a href="https://www.instagram.com/_bhipendar?utm_source=qr&igsh=MTAyYmx1a2VtYThtaQ==" target="_blank" rel="noopener noreferrer" className="social-link">
          <FaInstagram size={24} />
        </a>
        <a href="https://github.com/bhipendar14" target="_blank" rel="noopener noreferrer" className="social-link">
          <FaGithub size={24} />
        </a>
        <a href="https://x.com/Bhipendar?t=qteP4M5BvI-NEvRyd6pVyQ&s=09" target="_blank" rel="noopener noreferrer" className="social-link">
          <FaTwitter size={24} />
        </a>
      </div>

      {/* Footer Copy Section */}
      <div className="footer-copy">
        <p>© 2022-2025, Bmarket.com, Inc. or its affiliates</p>
      </div>
    </div>
  );
};

export default Footer;
