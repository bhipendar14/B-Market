import React from 'react';
import Navbar from '../Navbar/Navbar'; // Assuming a Navbar component exists
import logo from '../../assets/C.png'; // Assuming you have a logo asset
import './Terms.css';

const TermsAndConditions = () => {
  return (
    <>
      {/* Navbar */}
      <Navbar />

      {/* Terms and Conditions Page */}
      <div className="page-container">
        {/* Logo */}
        <div className="header-section">
          <img src={logo} alt="B-Market Logo" className="terms-logo" />
        </div>

        {/* Header */}
        <h2>Terms and Conditions</h2>

        {/* Content */}
        <div className="content">
          <p>
            Welcome to B-Market. By accessing or using our website, you agree to comply with and be bound by the following terms and conditions:
          </p>
          <ul>
            <li>You must be at least 18 years old to use our services.</li>
            <li>All products are subject to availability.</li>
            <li>Prices are subject to change without notice.</li>
            <li>All purchases are subject to our return policy.</li>
          </ul>
          <p>
            Please review our terms carefully. If you do not agree, please refrain from using our services.
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

export default TermsAndConditions;
