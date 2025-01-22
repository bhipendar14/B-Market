import React from 'react';
import { Link } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Navbar from '../Navbar/Navbar'; // Import the Navbar component
import './Contact.css';
import logo from '../../assets/C.png';

const ContactInfo = () => {
  return (
    <>
      {/* Navbar */}
      <Navbar />

      {/* Main Contact Section */}
      <div className="contact-info">
        {/* Back Arrow */}
        <div className="back-arrow">
          <Link to="/product">
            <ArrowBackIcon style={{ fontSize: '40px', color: '#000' }} />
          </Link>
        </div>

        {/* Header Section */}
        <div className="header-section">
          <Link to="/product">
            <img src={logo} alt="B-Market Logo" className="logo" />
          </Link>
          <h2>Welcome to B-Market</h2>
        </div>

        {/* Content Section */}
        <div className="content">
          <p className="about-info">
            Welcome to B-Market, your one-stop shopping destination for all your needs.
            Whether you're looking for furniture, clothes, shoes, electronics, groceries, or more,
            B-Market has everything you need for a hassle-free shopping experience.
          </p>
          <p className="service-info">
            We're proud to offer 7*24 service to our valued customers, ensuring that you can shop anytime, anywhere.
            Our team is dedicated to providing the best quality products and excellent customer service.
          </p>
          <p className="contact-info">
            Feel free to reach out to us at <strong>kumarbhipendar31@gmail.com</strong> for any inquiries or assistance.
            Thank you for visiting our website!
          </p>
        </div>

        {/* Footer */}
        <footer className="footer1">
          <p>© {new Date().getFullYear()}, Bmarket.com, Inc. or its affiliates</p>
        </footer>
      </div>
    </>
  );
};

export default ContactInfo;
