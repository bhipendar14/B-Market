import React from 'react';
import { Link } from 'react-router-dom'; // Import Link
import ArrowBackIcon from '@mui/icons-material/ArrowBack'; // Import ArrowBackIcon
import Navbar from '../Navbar/Navbar'; // Import the Navbar component
import './About.css';
import logo from '../../assets/C.png';

const About = () => {
  return (
    <>
      {/* Navbar */}
      <Navbar />

      {/* Main About Section */}
      <div className="about-container">
        {/* Back Arrow */}
        <div className="back-arrow">
          <Link to="/product">
            <ArrowBackIcon style={{ fontSize: '40px', color: '#000' }} />
          </Link>
        </div>

        {/* Header Section */}
        <div className="about-header">
          <img src={logo} alt="B-Market Logo" className="about-logo" />
          <h2>About B-Market</h2>
        </div>

        {/* Content Section */}
        <div className="about-content">
          <p>
            Welcome to <strong>B-Market</strong>, your trusted e-commerce platform designed to simplify your shopping experience. We provide an extensive range of products, including <strong>Furniture</strong>, <strong>Beauty</strong> products, <strong>Shoes</strong>, <strong>Grocery</strong> items, <strong>Electronics</strong>, and the latest in <strong>Fashion</strong>.
          </p>
          <p>
            At B-Market, we pride ourselves on delivering the best quality products at competitive prices. We offer convenient payment options, including <strong>Cash on Delivery</strong>, to make your shopping hassle-free. Whether you’re upgrading your home, restocking your pantry, or refreshing your wardrobe, B-Market is here to serve you 24/7.
          </p>
          <p>
            For inquiries or assistance, feel free to contact us at: <strong>kumarbhipendar31@gmail.com</strong>.
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

export default About;
