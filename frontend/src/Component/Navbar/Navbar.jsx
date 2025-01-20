import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AppBar, Toolbar, IconButton, Box } from "@mui/material";
import { useCart } from "../CartContext";
import logo from "../../assets/C.png";
import products from "../ProductDetails/productsData";
import CartImage from "../../assets/Cart.png";
import ProfileImage from "../../assets/Profile.png";

const Navbar = () => {
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const [query, setQuery] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0); // For carousel
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const handleSearchChange = (e) => {
    const value = e.target.value.toLowerCase();
    setQuery(value);

    if (value.trim() !== "") {
      const filtered = products.filter((product) =>
        product.title.toLowerCase().includes(value)
      );
      setFilteredProducts(filtered);
    } else {
      setFilteredProducts([]);
    }
  };

  const handleAddToCart = (product) => {
    addToCart(product);
    setShowSuccessMessage(true);
    setTimeout(() => setShowSuccessMessage(false), 2000);
  };

  const nextSlide = () => {
    if (currentIndex < filteredProducts.length - 4) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const handleMouseLeaveResults = () => {
    setFilteredProducts([]);
  };

  return (
    <>
      <AppBar
        position="static"
        style={{
          backgroundColor: "#fff2fe",
          borderBottom: "1px solid #e0e0e0",
          boxShadow: "none",
        }}
      >
        <Toolbar style={{ display: "flex", justifyContent: "space-between" }}>
          {/* Logo */}
          <Box>
            <Link to="/product">
              <img
                src={logo}
                alt="Logo"
                style={{ height: "50px", cursor: "pointer" }}
              />
            </Link>
          </Box>

          {/* Search Bar */}
          <div style={{ flex: 1, marginLeft: "100px", marginRight: "300px" }}>
            <div style={{ display: "flex", alignItems: "center" }}>
              <input
                type="text"
                placeholder="Search for a product..."
                value={query}
                onChange={handleSearchChange}
                style={{
                  flex: 1,
                  padding: "12px",
                  borderRadius: "20px",
                  border: "1px solid #ccc",
                  outline: "none",
                  fontSize: "17px",
                }}
              />
            </div>
          </div>

          {/* Navigation Links */}
          <Box style={{ display: "flex", gap: "15px", alignItems: "center" ,fontSize:"17px"}}>
            {["furniture", "beauty", "shoes", "grocery", "electronics", "fashion"].map(
              (link) => (
                <Link
                  key={link}
                  to={`/${link}`}
                  style={{ textDecoration: "none", color: "gray" }}
                >
                  {link.charAt(0).toUpperCase() + link.slice(1)}
                </Link>
              )
            )}
          </Box>

          {/* Cart & Profile Icons */}
          <Box
            style={{
              display: "flex",
              marginLeft: "60px",
              marginRight: "auto",
              gap: "40px",
            }}
          >
            <IconButton onClick={() => navigate("/cart")}>
              <img
                src={CartImage}
                alt="Cart"
                style={{ height: "30px", width: "auto", cursor: "pointer" }}
              />
            </IconButton>
            <IconButton onClick={() => navigate("/profile")}>
              <img
                src={ProfileImage}
                alt="Profile"
                style={{ height: "30px", width: "auto", cursor: "pointer" }}
              />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>

      {/* Display Search Results */}
      {filteredProducts.length > 0 && (
        <div
          style={{
            position: "absolute",
            top: "70px",
            left: "50%",
            transform: "translateX(-50%)",
            backgroundColor: "rgba(255, 255, 255, 0.7)",
            padding: "10px",
            boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
            width: "80%",
            borderRadius: "8px",
            zIndex: 1000,
          }}
          onMouseLeave={handleMouseLeaveResults}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <button onClick={prevSlide} disabled={currentIndex === 0}>
              {"<"}
            </button>
            <div
              style={{
                display: "flex",
                gap: "40px",
                overflow: "hidden",
                flex: 1,
                justifyContent: "center",
              }}
            >
              {filteredProducts.slice(currentIndex, currentIndex + 4).map((product) => (
                <div
                  key={product.id}
                  style={{
                    border: "1px solid #ddd",
                    borderRadius: "4px",
                    overflow: "hidden",
                    backgroundColor: "#fff",
                    textAlign: "center",
                    cursor: "pointer",

                    transition: "transform 0.3s",
                    zIndex: 1001,
                  }}
                  onMouseOver={(e) => (e.target.style.transform = "scale(1.05)")}
                  onMouseOut={(e) => (e.target.style.transform = "scale(1)")}
                >
                  <img
                    src={product.thumbnail}
                    alt={product.title}
                    style={{
                      width: "auto",
                      height: "200px",
                      objectFit: "cover",
                    }}
                  />
                  <div style={{ padding: "10px" }}>
                    <h3 style={{ fontSize: "16px", margin: "10px 0" }}>
                      {product.title}
                    </h3>
                    <p
                      style={{
                        margin: "5px 0",
                        fontWeight: "bold",
                        color: "green",
                      }}
                    >
                      ₹{product.price}
                    </p>
                    <button
                      style={{
                        padding: "5px",
                        backgroundColor: "#000",
                        color: "#fff",
                        border: "none",
                        borderRadius: "4px",
                        cursor: "pointer",
                        width: "100%",
                      }}
                      onClick={() => handleAddToCart(product)}
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              ))}
            </div>
            <button
              onClick={nextSlide}
              disabled={currentIndex >= filteredProducts.length - 4}
            >
              {">"}
            </button>
          </div>
        </div>
      )}

      {/* Success Message */}
      {showSuccessMessage && (
        <div
          style={{
            position: "fixed",
            top: "80px",
            right: "20px",
            backgroundColor: "#4caf50",
            color: "#fff",
            padding: "10px 20px",
            borderRadius: "5px",
            boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
          }}
        >
          Item is added successfully!
        </div>
      )}
    </>
  );
};

export default Navbar;
