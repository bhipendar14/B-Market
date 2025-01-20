import React, { useState } from "react";
import { useCart } from "../CartContext";
import "./Shoes.css";
import Footer from "../Footer/Footer";

const Shoes = () => {
  const { addToCart } = useCart(); // Use the addToCart function from CartContext
  const [showSuccessMessage, setShowSuccessMessage] = useState(false); // State for success message

  const shoesData = [
    {
        id: 1,
        title: "Nike Air Max",
        description: "Stylish and comfortable running shoes.",
        price: 7999,
        discount: 10,
        rating: 4.5,
        thumbnail: "https://static.nike.com/a/images/t_PDP_936_v1/f_auto,q_auto:eco/0ca73e26-13fb-4cf6-854d-aea2287675d3/AIR+MAX+90.png",
      },
      {
        id: 2,
        title: "Adidas Ultraboost",
        description: "Boost your comfort with Adidas Ultraboost.",
        price: 9999,
        discount: 12,
        rating: 4.7,
        thumbnail: "https://assets.adidas.com/images/w_600,f_auto,q_auto/fc885d1de97246fc9183af9000da38a8_9366/Ultraboost_Light_Shoes_Black_HQ6340_01_standard.jpg",
      },
      {
        id: 3,
        title: "Puma RS-X",
        description: "Bold and stylish sneakers for all-day wear.",
        price: 8499,
        discount: 8,
        rating: 4.6,
        thumbnail: "https://m.media-amazon.com/images/I/611hNY7ucBL._SL1500_.jpg",
      },
      {
        id: 4,
        title: "Reebok Nano X1",
        description: "Cross-trainers designed for high-intensity workouts.",
        price: 7499,
        discount: 10,
        rating: 4.5,
        thumbnail: "https://cdn11.bigcommerce.com/s-21x65e8kfn/images/stencil/original/products/50143/207389/REE3888_1000_7__90199.1688493238.jpg",
      },
      {
        id: 5,
        title: "New Balance 990v5",
        description: "Classic sneakers with premium comfort.",
        price: 11999,
        discount: 15,
        rating: 4.8,
        thumbnail: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzaD_mE3LyxoGqVoEq3xtlaoh9uyKWRG6VdA&s",
      },
      {
        id: 6,
        title: "Adidas Ultraboost",
        description: "Boost your comfort with Adidas Ultraboost.",
        price: 9999,
        discount: 12,
        rating: 4.7,
        thumbnail: "https://assets.adidas.com/images/w_600,f_auto,q_auto/33a99fbbd8df40008ffeaf3c00819dfc_9366/Valentines_Day_Ultraboost_1.0_Shoes_White_HQ3857_HM1.jpg",
      },
      {
        id: 7,
        title: "Nike Air Zoom Pegasus 38",
        description: "Premium running shoes for everyday runners.",
        price: 7499,
        discount: 10,
        rating: 4.6,
        thumbnail: "https://5.imimg.com/data5/ECOM/Default/2023/3/292916168/TX/UB/IH/105112946/195242665022-3-500x500.jpg",
      },
      {
        id: 8,
        title: "Reebok Classic Leather",
        description: "Casual leather sneakers with classic design.",
        price: 6499,
        discount: 15,
        rating: 4.4,
        thumbnail: "https://def-live.cdn.aboutyou.cloud/images/591fb865820e9250a1c5df06ddb03a0c.jpg?quality=75&height=832&width=596",
      },
      {
        id: 9,
        title: "Asics Gel-Kayano 28",
        description: "Stability shoes for long-distance running.",
        price: 12999,
        discount: 18,
        rating: 4.8,
        thumbnail: "https://cdn.shopify.com/s/files/1/0258/5411/5893/products/1012B272_101_SB_FR_GLB.webp?v=1662582865",
      },
      {
        id: 10,
        title: "Under Armour HOVR Phantom 2",
        description: "High-performance shoes for runners with HOVR technology.",
        price: 10999,
        discount: 20,
        rating: 4.7,
        thumbnail: "https://www.underarmour.in/media/wysiwyg/FW22_RUN_HOVR_Phantom3_Site_2_1_M_4_2.jpg",
      },
      {
        id: 11,
        title: "Converse Kids Sneakers",
        description: "Colorful sneakers for kids.",
        price: 2999,
        discount: 5,
        rating: 4.3,
        thumbnail: "https://www.converse.com/dw/image/v2/BCZC_PRD/on/demandware.static/-/Sites-cnv-master-catalog/default/dw82d6e34e/images/d_08/3J231_D_08X1.jpg?sw=406",
      },
      {
        id: 12,
        title: "Nike Kids Air Force 1",
        description: "Iconic sneakers for kids with a clean, stylish look.",
        price: 4999,
        discount: 8,
        rating: 4.6,
        thumbnail: "https://static.nike.com/a/images/t_default/e125b578-4173-401a-ab13-f066979c8848/AIR+FORCE+1+%28GS%29.png",
      },
      {
        id: 13,
        title: "Adidas Kids Superstar",
        description: "Classic shell-toe sneakers for kids.",
        price: 3999,
        discount: 10,
        rating: 4.7,
        thumbnail: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/795f45401b6548c0bdb1ab2300c254c1_9366/Superstar_Shoes_White_EF4842_01_standard.jpg",
      },
      {
        id: 14,
        title: "Puma Kids Future Rider",
        description: "Stylish sneakers designed for energetic kids.",
        price: 4499,
        discount: 12,
        rating: 4.4,
        thumbnail: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPH7ZNG5FnQ-YGyml2DHJs1X4xAHBPILin3w&s",
      },
      {
        id: 15,
        title: "New Balance Kids 574",
        description: "Comfortable sneakers for active kids.",
        price: 3699,
        discount: 5,
        rating: 4.3,
        thumbnail: "https://sportland.com/media/catalog/product/cache/a93584b4c19196955ba77379dc459454/P/V/PV574EVG_GRE_96a5.jpg",
      },
      {
        id: 16,
        title: "Nike Basketball Shoes",
        description: "High-performance basketball shoes.",
        price: 8999,
        discount: 15,
        rating: 4.8,
        thumbnail: "https://static.nike.com/a/images/t_default/5eb3d983-e731-4a7a-8990-446d231c2229/NIKE+AIR+MAX+IMPACT+4.png",
      },
      {
        id: 17,
        title: "Adidas Predator Football Boots",
        description: "Football boots with an iconic design.",
        price: 9999,
        discount: 10,
        rating: 4.7,
        thumbnail: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/7bcf674f57fd4d78b87d0ec3f9c9251d_9366/Predator_Club_Sock_Flexible_Ground_Football_Boots_Black_IG7742_22_model.jpg",
      },
      {
        id: 18,
        title: "Under Armour HOVR Sonic 3",
        description: "Running shoes designed for speed and comfort.",
        price: 10999,
        discount: 18,
        rating: 4.6,
        thumbnail: "https://cdn11.bigcommerce.com/s-zut1msomd6/images/stencil/500x659/products/41322/244065/under-armour-womens-hovr-sonic-6-3026128-103white-white_olive-tint_grove-green-pair__67491.1.jpg",
      },
      {
        id: 19,
        title: "Puma Ignite Speed 2",
        description: "Performance running shoes for fast athletes.",
        price: 8499,
        discount: 12,
        rating: 4.5,
        thumbnail: "https://images-static.nykaa.com/media/catalog/product/tr:h-800,w-800,cm-pad_resize/e/d/ed77ad9pm_19091202_1_.jpg",
      },
      {
        id: 20,
        title: "Reebok Crossfit Nano 9",
        description: "Crossfit shoes built for maximum performance.",
        price: 7999,
        discount: 15,
        rating: 4.7,
        thumbnail: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAvy6XgBWpbKrLvW6MM5pvLpLavpSAZETU1g&s",
      },
      {
        id: 21,
        title: "Boots Collection",
        description: "Stylish boots for all seasons.",
        price: 6499,
        discount: 20,
        rating: 4.6,
        thumbnail: "https://rukminim1.flixcart.com/image/300/300/k2arbm80/shoe/f/m/v/kjuis-1099-36-kajmi-white-original-imafh9bapprrw3z6.jpeg",
      },
      {
        id: 22,
        title: "Timberland PRO Work Boots",
        description: "Durable work boots for tough conditions.",
        price: 13999,
        discount: 15,
        rating: 4.8,
        thumbnail: "https://cdn.shopify.com/s/files/1/1107/6454/files/TB092615214_alt4_7004f256-e5db-4d33-bf4f-5aa25c2e4a74.jpg",
      },
      {
        id: 23,
        title: "Dr. Martens 1460 Boots",
        description: "Iconic leather boots with a rebellious edge.",
        price: 12999,
        discount: 10,
        rating: 4.5,
        thumbnail: "https://cdn.media.amplience.net/i/drmartens/14353001.84?$smart576$&fmt=auto",
      },
      {
        id: 24,
        title: "UGG Classic Tall Boots",
        description: "Cozy and warm boots for winter.",
        price: 10999,
        discount: 12,
        rating: 4.6,
        thumbnail: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOV1c2kG5aJ8Cw0rzopeSQAYoHbDespi80uA&s",
      },
      {
        id: 25,
        title: "Sorel Joan of Arctic Boots",
        description: "Waterproof winter boots with insulation.",
        price: 11999,
        discount: 18,
        rating: 4.7,
        thumbnail: "https://applesaddlery.vtexassets.com/arquivos/ids/509605/Sorel-1855131-010-Front.jpg?v=638241146402900000",
      },
  ];

  const shuffledShoes = shoesData.sort(() => Math.random() - 0.5);

  const handleAddToCart = (product) => {
    addToCart(product); // Add the product to the cart
    setShowSuccessMessage(true); // Show success message
    setTimeout(() => {
      setShowSuccessMessage(false); // Hide the message after 2 seconds
    }, 2000);
  };

  return (
    <div>
      <div className="shoes-container">
        {shuffledShoes.map((product) => {
          const discountedPrice = product.price - (product.price * product.discount) / 100;

          return (
            <div key={product.id} className="shoe-card">
              <img
                src={product.thumbnail}
                alt={product.title}
                className="shoe-image"
              />
              <h3 className="shoe-title">{product.title}</h3>
              <p className="shoe-description">{product.description}</p>
              <p className="shoe-price">
                <span className="original-price">₹{product.price}</span> &nbsp;
                <span className="discounted-price">₹{discountedPrice.toFixed(2)}</span>
              </p>
              <p className="shoe-rating">Rating: ⭐ {product.rating}</p>
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

export default Shoes;
