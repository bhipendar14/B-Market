import React from 'react';
import { Link } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Navbar from '../Navbar/Navbar'; // Assuming you have a Navbar component
import logo from '../../assets/C.png'; // Assuming you have a logo asset
import './ReturnPolicy.css';

const ReturnPolicy = () => {
  return (
    <>
      {/* Navbar */}
      <Navbar />

      {/* Return Policy Page */}
      <div className="page-container">
        {/* Logo and Back Arrow */}
        <div className="header-section">
         
          <img src={logo} alt="B-Market Logo" className="policy-logo" />
        </div>

        {/* Header */}
        <h2>Return Policy</h2>

        {/* Content */}
        <div className="content">
          <p>
            At <strong>B-Market</strong>, we prioritize customer satisfaction. Our return policy allows you to return most items within 30 days of receipt for a full refund or exchange.
          </p>
          <p>
            Please ensure that the products are unused and in their original packaging. Certain items, such as perishables and personal care products, may not be eligible for return.
          </p>
          <p>
            For more details or assistance, feel free to contact us at <strong>kumarbhipendar31@gmail.com</strong>.
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

export default ReturnPolicy;
