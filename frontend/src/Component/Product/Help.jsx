import React from 'react';
import { Link } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Navbar from '../Navbar/Navbar'; // Import the Navbar component
import logo from '../../assets/C.png'; // Import the logo image
import './Help.css';

const Help = () => {
  return (
    <>
      {/* Navbar */}
      <Navbar />

      <div className="page-container">
        {/* Logo and Back Arrow Section */}
        <div className="header-section" style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
          <Link to="/product" style={{ marginRight: '20px' }}>
            <ArrowBackIcon style={{ fontSize: '40px', color: '#000' }} />
          </Link>
          <Link to="/product">
            <img src={logo} alt="B-Market Logo" style={{ height: '50px', cursor: 'pointer' }} />
          </Link>
        </div>

        {/* Header */}
        <h2>Help</h2>

        {/* Content */}
        <div className="content">
          <p>
            Need assistance? At <strong>B-Market</strong>, we're here to help. Whether you have questions about orders, returns, or anything else, we've got you covered.
          </p>
          <p>
            Visit our <Link to="/faq">FAQ</Link> section for quick answers to common questions. For personalized support, feel free to contact us at <strong>kumarbhipendar31@gmail.com</strong>.
          </p>
          <p>
            Our customer service team is available 24/7 to ensure your shopping experience is smooth and enjoyable.
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

export default Help;
