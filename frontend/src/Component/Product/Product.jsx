import React, { useEffect, useState } from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import { useCart } from "../CartContext"; // Import the Cart Context
import "./Product.css";

const Product = () => {
  const { addToCart } = useCart(); // Access addToCart from context
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false); // State to show success message

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("http://localhost:5000/products");
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const handleAddToCart = (product) => {
    addToCart(product); // Add product to cart
    setShowSuccessMessage(true); // Show success message
    setTimeout(() => {
      setShowSuccessMessage(false); // Hide message after 3 seconds
    }, 3000);
  };

  const handleImageError = (e) => {
    e.target.src = "/fallback-image.png"; // Fallback image for broken image links
  };

  return (
    <div>
      <Header />
      <div className="product-container">
        {isLoading ? (
          <div className="loading-indicator">Loading...</div>
        ) : error ? (
          <p className="error-message">Error fetching products: {error}</p>
        ) : products.length > 0 ? (
          products.map((product) => (
            <div className="product-card" key={product.id}>
              <img
                src={product.thumbnail}
                alt={product.title}
                className="product-image"
                onError={handleImageError} // Fallback on image error
              />
              <h2 className="product-title">{product.title}</h2>
              <p className="product-description">{product.description}</p>
              <p className="product-price">
                ₹{product.price}{" "}
                <span className="product-discount">({product.discount}% off)</span>
              </p>
              <p className="product-rating">Rating: ⭐{product.rating}</p>
              <button
                className="add-to-cart-btn"
                onClick={() => handleAddToCart(product)} // Handle add to cart
                disabled={isLoading}
              >
                Add to Cart
              </button>
            </div>
          ))
        ) : (
          <p>No products available.</p>
        )}
      </div>

      {/* Success Message Box */}
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
          Item added to your cart!
        </div>
      )}

      <Footer />
    </div>
  );
};

export default Product;
