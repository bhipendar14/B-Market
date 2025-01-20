import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Home.css";
import logo from "../../assets/C.png";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="home-page">
      <div className="logo-container">
        <Link to="/signup">
          <img src={logo} alt="Logo" className="logo" />
        </Link>
        <p className="tagline">"Your one-stop destination for all your needs!"</p>
      </div>
      <div className="welcome-banner">
        <h1>Welcome to B-Market Store</h1>
        <p>
          B-Market has everything you need for a hassle-free shopping experience.
        </p>
        <div className="cta-buttons">
          <button className="cta-btn" onClick={() => navigate("/login")}>
            Login
          </button>
          <button className="cta-btn secondary" onClick={() => navigate("/signup")}>
            Signup
          </button>
        </div>
      </div>
      <footer className="footer1">
        <p>© {new Date().getFullYear()}, Bmarket.com, Inc. or its affiliates</p>
      </footer>
    </div>
  );
};

export default Home;
