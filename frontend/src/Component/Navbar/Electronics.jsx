import React, { useState } from "react";
import { useCart } from "../CartContext";
import "./Electronics.css";
import Footer from "../Footer/Footer";

const Electronics = () => {
  const { addToCart } = useCart();

  const electronicsProducts = [
    {
        id: 1,
        title: "Apple iPhone 14",
        description: "128GB, Midnight - 5G smartphone.",
        price: 79999,
        discount: 10,
        rating: 4.8,
        thumbnail: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVRZPh1_spmFWCrUzs58SqLNpLNtLcz0UnBw&s",
      },
      {
        id: 2,
        title: "Dell Inspiron 15 Laptop",
        description: "11th Gen Intel Core i5, 16GB RAM, 512GB SSD.",
        price: 58999,
        discount: 15,
        rating: 4.5,
        thumbnail: "https://m.media-amazon.com/images/I/91XDOjF1TzL._AC_UF894,1000_QL80_.jpg",
      },
      {
        id: 3,
        title: "Sony Bravia 43-inch TV",
        description: "4K Ultra HD Smart LED TV.",
        price: 45999,
        discount: 12,
        rating: 4.7,
        thumbnail: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPCiy6mLQYIFXH5xxJ8_msS9nqtWfYAE2ILw&s",
      },
      {
        id: 4,
        title: "Bose QuietComfort Earbuds",
        description: "Noise-canceling true wireless earbuds.",
        price: 22999,
        discount: 8,
        rating: 4.6,
        thumbnail: "https://m.media-amazon.com/images/I/61CGHv6kmWL._SL1500_.jpg",
      },
      {
        id: 5,
        title: "Logitech MX Master 3 Mouse",
        description: "Advanced wireless mouse with ergonomic design.",
        price: 7499,
        discount: 10,
        rating: 4.8,
        thumbnail: "https://m.media-amazon.com/images/I/61ni3t1ryQL._AC_UF1000,1000_QL80_.jpg",
      },
      {
        id: 6,
        title: "Sony WH-1000XM5 Headphones",
        description: "Wireless noise-canceling headphones.",
        price: 29999,
        discount: 12,
        rating: 4.9,
        thumbnail: "https://buy.budli.in/cdn/shop/files/Untitleddesign-2024-12-07T121227.322.jpg?v=1733553813&width=1946",
      },
      {
        id: 7,
        title: "JBL Flip 6 Bluetooth Speaker",
        description: "Portable waterproof speaker with deep bass.",
        price: 9999,
        discount: 20,
        rating: 4.5,
        thumbnail: "https://in.jbl.com/dw/image/v2/BFND_PRD/on/demandware.static/-/Sites-masterCatalog_Harman/default/dw4c84a098/2_JBL_FLIP6_3_4_RIGHT_BLACK_30195_x1.png?sw=535&sh=535",
      },
      {
        id: 8,
        title: "Samsung Split AC 1.5 Ton",
        description: "5-star inverter air conditioner with Wi-Fi.",
        price: 40999,
        discount: 18,
        rating: 4.4,
        thumbnail: "https://m.media-amazon.com/images/I/61xQNSWHzqL.jpg",
      },
      {
          id: 9,
          title: "Asus ROG Strix Gaming Laptop",
          description: "AMD Ryzen 7, 16GB RAM, 1TB SSD, RTX 3060.",
          price: 124999,
          discount: 10,
          rating: 4.7,
          thumbnail: "https://www.excaliberpc.com/images/798022_4/original.jpg",
        },
        {
          id: 10,
          title: "Amazon Echo Dot (5th Gen)",
          description: "Smart speaker with Alexa - Charcoal.",
          price: 4499,
          discount: 15,
          rating: 4.6,
          thumbnail: "https://www.jiomart.com/images/product/original/493711732/amazon-echo-dot-5th-gen-smart-speaker-2023-blue-digital-o493711732-p598989290-0-202312042006.jpeg?im=Resize=(1000,1000)",
        },
        {
          id: 11,
          title: "GoPro HERO11 Black",
          description: "Waterproof action camera with 5.3K video.",
          price: 44999,
          discount: 12,
          rating: 4.8,
          thumbnail: "https://retinapix.com/cdn/shop/files/GoProHero11BlackActionCamera_2_1200x1200.jpg?v=1723308292",
        },
        {
          id: 12,
          title: "Apple Watch Series 9",
          description: "45mm GPS smartwatch with Always-On display.",
          price: 41999,
          discount: 10,
          rating: 4.9,
          thumbnail: "https://www.maplestore.in/cdn/shop/files/Apple_Watch_Series_9_GPS_45mm_Pink_Aluminium_Light_Pink_Sport_Band_PDP_Image_Position-1__en-IN_743f7781-987b-4248-9f3a-f1ad9f832388.jpg?v=1701896659&width=1445",
        },
        {
          id: 13,
          title: "Samsung Galaxy Tab S9",
          description: "12.4-inch AMOLED tablet with S Pen.",
          price: 79999,
          discount: 15,
          rating: 4.7,
          thumbnail: "https://images.samsung.com/is/image/samsung/p6pim/in/sm-x710nzaainu/gallery/in-galaxy-tab-s9-wifi-x710-sm-x710nzaainu-thumb-537885436",
        },
        {
          id: 14,
          title: "Anker PowerCore 20,000mAh",
          description: "Portable power bank with fast charging.",
          price: 2499,
          discount: 20,
          rating: 4.6,
          thumbnail: "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6405/6405177_sd.jpg",
        },
        {
          id: 15,
          title: "Canon EOS R10 Camera",
          description: "24.2MP mirrorless camera with 18-150mm lens.",
          price: 114999,
          discount: 8,
          rating: 4.8,
          thumbnail: "https://rukminim2.flixcart.com/image/850/1000/l5fnhjk0/dslr-camera/f/t/m/eos-r10-24-2-r10-canon-original-imagg42fsbgv79da.jpeg?q=90&crop=false",
        },
        {
          id: 16,
          title: "LG 27-inch 4K Monitor",
          description: "UHD IPS display with HDR10 and USB-C.",
          price: 37999,
          discount: 10,
          rating: 4.7,
          thumbnail: "https://dnacomputers.in/wp-content/uploads/2022/12/LG-27-inch-4K-UHD-HDR-10-Monitor-removebg-preview.png.webp",
        },
        {
          id: 17,
          title: "HyperX Alloy FPS Keyboard",
          description: "Mechanical gaming keyboard with RGB lighting.",
          price: 8999,
          discount: 15,
          rating: 4.5,
          thumbnail: "https://images-cdn.ubuy.co.in/66392ce393fd6355963b34f5-hyperx-alloy-fps-rgb-mechanical-gaming.jpg",
        },
        {
          id: 18,
          title: "Dyson V15 Detect Vacuum Cleaner",
          description: "Cordless vacuum with laser dirt detection.",
          price: 67999,
          discount: 8,
          rating: 4.9,
          thumbnail: "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1658738205/Croma%20Assets/Small%20Appliances/Vacuum%20Cleaners/Images/257377_elpr55.png   ",
        },
        {
          id: 19,
          title: "Microsoft Surface Laptop 5",
          description: "13.5-inch touchscreen, Intel i7, 16GB RAM.",
          price: 124999,
          discount: 10,
          rating: 4.7,
          thumbnail: "https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/MSFT-Up-level-the-way-you-work-RE50wv8?fmt=png-alpha&scl=1",
        },
        {
          id: 20,
          title: "Beats Studio Buds",
          description: "True wireless earbuds with active noise canceling.",
          price: 12999,
          discount: 12,
          rating: 4.6,
          thumbnail: "https://www.aptronixindia.com/media/catalog/product/cache/31f0162e6f7d821d2237f39577122a8a/s/t/studiobudsplus-ivory-01.png",
        },
        {
          id: 21,
          title: "Fitbit Charge 5",
          description: "Advanced fitness tracker with built-in GPS.",
          price: 12999,
          discount: 15,
          rating: 4.5,
          thumbnail: "https://m.media-amazon.com/images/I/61PmMzYM4qL.jpg",
        },
        {
          id: 22,
          title: "NVIDIA Shield TV Pro",
          description: "4K HDR streaming media player with GeForce NOW.",
          price: 16999,
          discount: 10,
          rating: 4.7,
          thumbnail: "https://m.media-amazon.com/images/I/51ZGCIbrgFL._AC_UF1000,1000_QL80_.jpg",
        }
  ];

  const [allElectronicsProducts, setAllElectronicsProducts] = useState(
    electronicsProducts
  );

  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const addNewProduct = (newProduct) => {
    setAllElectronicsProducts((prevProducts) => [...prevProducts, newProduct]);
  };

  const handleAddToCart = (product) => {
    addToCart(product);
    setShowSuccessMessage(true);
    setTimeout(() => setShowSuccessMessage(false), 2000); // Clear message after 2 seconds
  };

  return (
    <div>
      <div className="electronics-container">
        {allElectronicsProducts.map((product) => {
          const discountedPrice =
            product.price - (product.price * product.discount) / 100;

          return (
            <div key={product.id} className="electronics-card">
              <img
                src={product.thumbnail}
                alt={product.title}
                className="electronics-image"
                onError={(e) => {
                  e.target.src =
                    "https://via.placeholder.com/150?text=Image+Not+Available"; // Fallback image
                }}
              />
              <h3 className="electronics-title">{product.title}</h3>
              <p className="electronics-description">{product.description}</p>
              <p className="electronics-price">
                <span className="original-price">₹{product.price}</span> &nbsp;
                <span className="discounted-price">
                  ₹{discountedPrice.toFixed(2)}
                </span>
              </p>
              <p className="electronics-rating">Rating: ⭐ {product.rating}</p>
              <div className="button-container">
                <button
                  className="add-to-cart-btn"
                  onClick={() => handleAddToCart(product)}
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
          Item is added successfully!
        </div>
      )}
      <Footer />
    </div>
  );
};

export default Electronics;
