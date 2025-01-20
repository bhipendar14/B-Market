import React, { useState, useEffect } from "react";
import { useCart } from "../CartContext"; // Import CartContext
import "./Header.css";

const Header = () => {
  const { addToCart } = useCart(); // Access addToCart from CartContext

  const products = [
    {
      id: 1,
      title: "Apple iPhone 14",
      description: "The latest iPhone with advanced features and stunning design.",
      price: 79999,
      discount: 10,
      rating: 4.8,
      thumbnail:
        "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1729693541/Croma%20Assets/Communication/Mobiles/Images/310714_0_qbmfuq.png?tr=w-600",
    },
    {
      id: 2,
      title: "Samsung Galaxy S23",
      description: "Experience cutting-edge technology with the Galaxy S23.",
      price: 74999,
      discount: 15,
      rating: 4.6,
      thumbnail:
        "https://media.croma.com/image/upload/v1675347470/Croma%20Assets/Communication/Mobiles/Images/268868_u7nsk3.png",
    },
    {
      id: 3,
      title: "Sony WH-1000XM5",
      description:
        "Premium noise-cancelling headphones for an immersive sound experience.",
      price: 29999,
      discount: 20,
      rating: 4.7,
      thumbnail:
        "https://www.sony.co.in/image/f4b4580f439b31bd31ad70c393983cd1?fmt=png-alpha&wid=1014&hei=396",
    },
    {
      id: 4,
      title: "Sony TV",
      description: "Sony 139 cm (55 inches) BRAVIA 4K Ultra HD Smart LED Google TV.",
      price: 57999,
      discount: 20,
      rating: 4.0,
      thumbnail: "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1730270681/Croma%20Assets/Entertainment/Television/Images/308065_0_svxuyu.png?tr=w-600",
    },
    {
      id: 5,
      title: "Adidas Shoes",
      description: "Adidas Mens Glowrun Reflective M Running Shoe.",
      price: 1800,
      discount: 20,
      rating: 3.9,
      thumbnail: "https://cdn.shopify.com/s/files/1/2358/2817/files/adidas-superstar-cloud-white-core-black1-copie.png?v=1715870126",
    },

    {
        id: 6 ,
        title: "PIXI ",
        description: "PIXI Glow Tonic Exfoliating Toner With Glycolic Acid(100ml)",
        price:1555,
        discount: 27,
        rating: 3,
        thumbnail: "https://in.pixibeauty.com/cdn/shop/files/PIXI_Skintreats_GlowTonic1_Nov_2023_grande.jpg?v=1704389030",
      },

      {
        id: 7 ,
        title: "Lakmē ",
        description: "Lakmē 9 to 5 CC Cream ",
        price:300,
        discount: 5,
        rating: 3.4,
        thumbnail: "https://www.lakmeindia.com/cdn/shop/products/Lakme9to5CCComplexionCareCream_30gmHoney_1000x.jpg?v=1598102848",
      },
      {
        id: 8 ,
        title: "Lakmē ",
        description: "Lakmē Facelift MultiSlayer Blush Stick  ",
        price:900,
        discount: 15,
        rating: 3.2,
        thumbnail: "https://www.lakmeindia.com/cdn/shop/files/1000x1000facestickSupplementryNEW_FOP-coralqueen_1000x.jpg?v=1735018916",
      },

      {
        id: 9 ,
        title: "Lakmē ",
        description: "Lakmē 9to5 Powerplay Priming Foundation  ",
        price:650,
        discount: 14,
        rating: 3.6,
        thumbnail: "https://www.lakmeindia.com/cdn/shop/files/24451_H-8901030742436_1000x.jpg?v=1712053120",
      },
      {
        id: 10 ,
        title: "Fastrack ",
        description: "White Quilted Tote Bag  ",
        price:2959,
        discount: 10,
        rating: 3,
        thumbnail: "https://www.fastrack.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Sites-titan-master-catalog/default/dw272270fc/images/Fastrack/Catalog/F241TOMEN03WH1_1.jpg?sw=600&sh=600",
      },

  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false); // State for success message

  // Automatic carousel rotation logic
  useEffect(() => {
    if (!isHovered) {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % products.length);
      }, 3000);

      return () => clearInterval(interval);
    }
  }, [isHovered, products.length]);

  const nextProduct = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % products.length);
  };

  const prevProduct = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? products.length - 1 : prevIndex - 1
    );
  };

  const handleAddToCart = (product) => {
    addToCart(product); // Add product to cart
    setShowSuccessMessage(true); // Show success message
    setTimeout(() => {
      setShowSuccessMessage(false); // Hide message after 3 seconds
    }, 3000);
  };

  return (
    <div className="header-container">
      <div
        className="carousel"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {isHovered && (
          <button className="carousel-btn left" onClick={prevProduct}>
            {"<"}
          </button>
        )}
        <div
          className="carousel-item"
          onClick={() => handleAddToCart(products[currentIndex])} // Add product to cart on click
        >
          <img
            src={products[currentIndex].thumbnail}
            alt={products[currentIndex].title}
            className="carousel-image"
          />
          <div className="carousel-details">
            <h3>{products[currentIndex].title}</h3>
            <p>{products[currentIndex].description}</p>
          </div>
        </div>
        {isHovered && (
          <button className="carousel-btn right" onClick={nextProduct}>
            {">"}
          </button>
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
    </div>
  );
};

export default Header;
