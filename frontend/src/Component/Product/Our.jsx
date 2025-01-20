import React from 'react';
import { Link } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import './OurBusiness.css';

const OurBusiness = () => {
  return (
    <div className="page-container">
      {/* Back Arrow */}
      <div className="back-arrow">
        <Link to="/product">
          <ArrowBackIcon style={{ fontSize: '40px', color: '#000' }} />
        </Link>
      </div>

      {/* Header */}
      <h2>Our Business</h2>

      {/* Content */}
      <div className="content">
        <p>
          <strong>B-Market</strong> is a leading e-commerce platform offering a wide range of products, including furniture, electronics, groceries, and more. We aim to connect customers with high-quality goods at affordable prices.
        </p>
        <p>
          Our mission is to simplify shopping for everyone by offering a seamless and secure online shopping experience. With cash-on-delivery options and 24/7 customer support, we are committed to making your life easier.
        </p>
      </div>

      {/* Footer */}
      <footer className="footer1">
        <p>© {new Date().getFullYear()}, Bmarket.com, Inc. or its affiliates</p>
      </footer>
    </div>
  );
};

export default OurBusiness;
