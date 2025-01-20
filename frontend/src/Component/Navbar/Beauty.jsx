import React, { useState } from "react";
import { CartProvider, useCart } from "../CartContext"; // Import useCart
import "./Beauty.css";
import Footer from "../Footer/Footer";

const Beauty = () => {
  const { addToCart } = useCart(); // Access addToCart from CartContext

  const beautyProducts = [
    {
        id: 1,
        title: "Maybelline Fit Me Foundation",
        description: "Liquid foundation for a natural matte finish.",
        price: 549,
        discount: 20,
        rating: 4.5,
        thumbnail: "https://m.media-amazon.com/images/I/71hZifnguxL.jpg",
        },
        {
        id: 2,
        title: "Lakmé Absolute Lipstick",
        description: "Rich color, long-lasting lipstick for every occasion.",
        price: 800,
        discount: 15,
        rating: 4.3,
        thumbnail: "https://m.media-amazon.com/images/I/41FBoQstt8L._SX300_SY300_QL70_FMwebp_.jpg",
        },
        {
        id: 3,
        title: "L'Oréal Paris Kajal",
        description: "Waterproof, smudge-proof kajal for bold eyes.",
        price: 299,
        discount: 10,
        rating: 4.6,
        thumbnail: "https://m.media-amazon.com/images/I/41v9meBW1xL._SX300_SY300_QL70_FMwebp_.jpg",
        },
        {
        id: 4,
        title: "MAC Studio Fix Powder",
        description: "2-in-1 foundation and powder for a flawless finish.",
        price: 2900,
        discount: 25,
        rating: 4.8,
        thumbnail: "https://m.media-amazon.com/images/I/410xc0bn4UL.jpg",
        },
        {
        id: 5,
        title: "Neutrogena Hydro Boost Gel",
        description: "Hydrating gel for soft, supple skin.",
        price: 950,
        discount: 10,
        rating: 4.4,
        thumbnail: "https://m.media-amazon.com/images/I/31wlq1RSIRL._SX300_SY300_QL70_FMwebp_.jpg",
        },
        {
        id: 6,
        title: "The Body Shop Tea Tree Oil",
        description: "Targeted solution for blemished skin.",
        price: 695,
        discount: 5,
        rating: 4.2,
        thumbnail: "https://m.media-amazon.com/images/I/31LLePfgxhL._SX300_SY300_QL70_FMwebp_.jpg",
        },
        {
        id: 7,
        title: "Nivea Soft Cream",
        description: "Light moisturizing cream for daily use.",
        price: 299,
        discount: 10,
        rating: 4.1,
        thumbnail: "https://m.media-amazon.com/images/I/313JkNmP1-L._SX300_SY300_QL70_FMwebp_.jpg",
        },
        {
        id: 8,
        title: "Himalaya Purifying Neem Face Wash",
        description: "Cleansing face wash with neem and turmeric.",
        price: 165,
        discount: 20,
        rating: 4.7,
        thumbnail: "https://m.media-amazon.com/images/I/41oFB2tM5BL._SX300_SY300_QL70_FMwebp_.jpg",
        },
        {
        id: 9,
        title: "Plum Green Tea Toner",
        description: "Alcohol-free toner for oily skin.",
        price: 390,
        discount: 15,
        rating: 4.3,
        thumbnail: "https://m.media-amazon.com/images/I/41e5GXEhpeL._SX522_.jpg",
        },
        {
        id: 10,
        title: "Biotique Bio Dandelion Serum",
        description: "Brightening serum for all skin types.",
        price: 230,
        discount: 18,
        rating: 4.2,
        thumbnail: "https://m.media-amazon.com/images/I/51BPHahtYxL.jpg ",
        },

        {
            id: 11,
            title: "Maybelline SuperStay Matte Ink",
            description: "Long-lasting liquid lipstick with intense color.",
            price: 650,
            discount: 15,
            rating: 4.6,
            thumbnail: "https://m.media-amazon.com/images/I/315NWHtfujL._SX300_SY300_QL70_FMwebp_.jpg",
        },
        {
            id: 12,
            title: "Lakmé Sun Expert Sunscreen",
            description: "SPF 50 PA+++ sunscreen for sun protection.",
            price: 499,
            discount: 10,
            rating: 4.3,
            thumbnail: "https://m.media-amazon.com/images/I/313AkV5je6L._SX300_SY300_QL70_FMwebp_.jpg",
        },
        {
            id: 13,
            title: "L'Oréal Paris Hair Serum",
            description: "Smoothing serum for frizz-free, shiny hair.",
            price: 550,
            discount: 12,
            rating: 4.5,
            thumbnail: "https://m.media-amazon.com/images/I/61GGg1vs3DL._SX679_.jpg",
        },
        {
            id: 14,
            title: "MAC Retro Matte Lipstick",
            description: "High pigment matte lipstick for bold lips.",
            price: 1700,
            discount: 20,
            rating: 4.8,
            thumbnail: "https://beautifulstore.in/wp-content/uploads/2024/04/41HuFvu4QL._SX679_.jpg",
        },
        {
            id: 15,
            title: "Neutrogena Ultra Sheer Dry-Touch Sunscreen",
            description: "Lightweight SPF 50+ sunscreen for broad-spectrum protection.",
            price: 650,
            discount: 15,
            rating: 4.4,
            thumbnail: "https://images-cdn.ubuy.co.id/661bfb4b339fb87b5724cd53-neutrogena-ultra-sheer-dry-touch-spf-100.jpg",
        },
        {
            id: 16,
            title: "The Body Shop Vitamin E Cream",
            description: "Moisturizing cream with Vitamin E for all-day hydration.",
            price: 995,
            discount: 10,
            rating: 4.6,
            thumbnail: "https://www.bigbasket.com/media/uploads/p/xl/40112730_3-the-body-shop-moisture-cream-vitamin-e.jpg",
        },
        {
            id: 17,
            title: "Nivea Men Dark Spot Reduction Cream",
            description: "Face cream for men with UV protection.",
            price: 280,
            discount: 8,
            rating: 4.1,
            thumbnail: "https://m.media-amazon.com/images/I/51NYSJRXJ6L._AC_UL320_.jpg",
        },
        {
            id: 18,
            title: "Himalaya Herbals Nourishing Skin Cream",
            description: "Daily moisturizing cream with herbal extracts.",
            price: 140,
            discount: 15,
            rating: 4.2,
            thumbnail: "https://m.media-amazon.com/images/I/61N2NtfMc9L._AC_UL320_.jpg",
        },
        {
            id: 19,
            title: "Plum Grape Seed & Sea Buckthorn Oil",
            description: "Natural facial oil for glowing skin.",
            price: 550,
            discount: 18,
            rating: 4.3,
            thumbnail: "https://m.media-amazon.com/images/I/31MwIWcVwOL._SX300_SY300_QL70_FMwebp_.jpg",
        },
        {
            id: 20,
            title: "Biotique Morning Nectar Lotion",
            description: "Hydrating lotion for a glowing complexion.",
            price: 180,
            discount: 12,
            rating: 4.0,
            thumbnail: "https://m.media-amazon.com/images/I/71wUhQVqYmL._AC_UL320_.jpg",
        },
        {
            id: 21,
            title: "Maybelline Colossal Mascara",
            description: "Volumizing waterproof mascara for dramatic lashes.",
            price: 399,
            discount: 10,
            rating: 4.4,
            thumbnail: "https://m.media-amazon.com/images/I/51PQhsaEcLL._AC_UL320_.jpg",
        },
        {
            id: 22,
            title: "Lakmé Rose Face Powder",
            description: "Loose face powder with sunscreen for matte finish.",
            price: 170,
            discount: 20,
            rating: 4.2,
            thumbnail: "https://m.media-amazon.com/images/I/412TSWSvo6L.jpg",
        },
        {
            id: 23,
            title: "L'Oréal Paris Revitalift Night Cream",
            description: "Anti-aging night cream for youthful skin.",
            price: 999,
            discount: 15,
            rating: 4.5,
            thumbnail: "https://m.media-amazon.com/images/I/31m-4+Bv8CL._SY300_SX300_DpWeblab_.jpg",
        },
        {
            id: 24,
            title: "MAC Pro Longwear Concealer",
            description: "Lightweight concealer for full coverage.",
            price: 2200,
            discount: 25,
            rating: 4.7,
            thumbnail: "https://m.media-amazon.com/images/I/61OxOxR9aoL._AC_UL320_.jpg",
        },
        {
            id: 25,
            title: "Neutrogena Deep Clean Facial Cleanser",
            description: "Gentle cleanser for removing dirt and oil.",
            price: 425,
            discount: 10,
            rating: 4.3,
            thumbnail: "https://m.media-amazon.com/images/I/31qUekdzfyL._SX300_SY300_QL70_FMwebp_.jpg",
        }
  ];

  const [allBeautyProducts] = useState(beautyProducts);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false); // Add state for success message

  const handleAddToCart = (product) => {
    addToCart(product); // Add the product to the cart
    setShowSuccessMessage(true); // Show the success message
    setTimeout(() => setShowSuccessMessage(false), 2000); // Hide the success message after 2 seconds
  };

  return (
    <div>
      <div className="beauty-container">
        {allBeautyProducts.map((product) => {
          const discountedPrice = product.price - (product.price * product.discount) / 100;

          return (
            <div key={product.id} className="beauty-card">
              <img src={product.thumbnail} alt={product.title} className="beauty-image" />
              <h3 className="beauty-title">{product.title}</h3>
              <p className="beauty-description">{product.description}</p>
              <p className="beauty-price">
                <span className="original-price">₹{product.price}</span> &nbsp;
                <span className="discounted-price">₹{discountedPrice.toFixed(2)}</span>
              </p>
              <p className="beauty-rating">Rating: ⭐ {product.rating}</p>
              <div className="button-container">
                <button
                  className="add-to-cart-btn"
                  onClick={() => handleAddToCart(product)} // Use the handleAddToCart function
                >
                  Add to Cart
                </button>
              </div>
            </div>
          );
        })}
      </div>

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
          Item has been added to your cart!
        </div>
      )}

      <Footer />
    </div>
  );
};

export default Beauty;
