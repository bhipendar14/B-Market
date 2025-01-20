import React, { useState } from "react";
import { useCart } from "../CartContext"; // Import useCart
import "./Fashion.css";
import Footer from "../Footer/Footer";

const Fashion = () => {
  const { addToCart } = useCart(); // Access addToCart from CartContext
  const [showSuccessMessage, setShowSuccessMessage] = useState(false); // State for success message visibility

  const fashionProducts = [
    {
        id: 1,
        category: "Men",
        title: "Casual T-shirt",
        description: "Comfortable and stylish casual t-shirt for everyday wear.",
        price: 799,
        discount: 10,
        rating: 4.5,
        thumbnail: "https://ae01.alicdn.com/kf/S67257c90b13748e5a293024dc523f382A.jpg",
      },
      {
        id: 2,
        category: "Men",
        title: "Designer Jeans",
        description: "Trendy jeans with a perfect fit.",
        price: 1999,
        discount: 15,
        rating: 4.7,
        thumbnail: "https://assets.ajio.com/medias/sys_master/root/20210526/K6sB/60ae653ef997ddb312aaebcf/-473Wx593H-410173824-2authenticdrk-MODEL.jpg",
      },
      {
        id: 3,
        category: "Men",
        title: "Leather Jacket",
        description: "Premium leather jacket for a fashionable look.",
        price: 4999,
        discount: 20,
        rating: 4.8,
        thumbnail: "https://www.voganow.com/cdn/shop/files/BBGJ-1108-014_2_copy.jpg?v=1702101740&width=360",
      },
      {
        id: 4,
        category: "Men",
        title: "Sneakers",
        description: "Stylish sneakers for an active lifestyle.",
        price: 2499,
        discount: 10,
        rating: 4.6,
        thumbnail: "https://cdn.thewirecutter.com/wp-content/media/2024/05/white-sneaker-2048px-9320.jpg?auto=webp&quality=75&crop=1.91:1&width=1200",
      },
      {
        id: 5,
        category: "Men",
        title: "Summer Shorts",
        description: "Perfect for the summer days, comfortable shorts.",
        price: 899,
        discount: 12,
        rating: 4.4,
        thumbnail: "https://img.joomcdn.net/28e4dae837d8f159d7db8ec7f14a03c7fe4269fa_original.jpeg",
      },

      // Women Products
      {
        id: 6,
        category: "Women",
        title: "Floral Dress",
        description: "Elegant floral dress for parties and gatherings.",
        price: 2299,
        discount: 20,
        rating: 4.6,
        thumbnail: "https://target.scene7.com/is/image/Target/GUEST_b843c3a4-d1ac-478e-985d-f2590972ce59?wid=488&hei=488&fmt=pjpeg",
      },
      {
        id: 7,
        category: "Women",
        title: "Silk Scarf",
        description: "Luxurious silk scarf to elevate your outfit.",
        price: 1299,
        discount: 15,
        rating: 4.7,
        thumbnail: "https://s.alicdn.com/@sc04/kf/UTB8a8DmJyDEXKJk43Oqq6Az3XXay.jpg_720x720q50.jpg",
      },
      {
        id: 8,
        category: "Women",
        title: "Heeled Boots",
        description: "Chic heeled boots perfect for formal events.",
        price: 3999,
        discount: 25,
        rating: 4.5,
        thumbnail: "https://m.media-amazon.com/images/I/71+P0R5d8SL._AC_UY1000_.jpg",
      },
      {
        id: 9,
        category: "Women",
        title: "Blouse",
        description: "Lightweight blouse for casual and work settings.",
        price: 1599,
        discount: 10,
        rating: 4.4,
        thumbnail: "https://aadvi.in/cdn/shop/products/File_040.jpg?v=1612953817",
      },
      {
        id: 10,
        category: "Women",
        title: "Denim Skirt",
        description: "Trendy denim skirt for a casual yet chic look.",
        price: 1299,
        discount: 5,
        rating: 4.3,
        thumbnail: "https://di2ponv0v5otw.cloudfront.net/posts/2023/06/28/649cc21c02760b97dba290ca/m_wp_649cc231dbb0e73fd6585650.webp",
      },

      // Kids Products
      {
        id: 11,
        category: "Kids",
        title: "Cartoon T-shirt",
        description: "Fun cartoon-themed t-shirt for kids.",
        price: 499,
        discount: 10,
        rating: 4.7,
        thumbnail: "https://5.imimg.com/data5/KR/LN/MY-31533998/ladies-cartoon-t-shirt.jpg",
      },
      {
        id: 12,
        category: "Kids",
        title: "Cute Hoodie",
        description: "Comfy hoodie for the little ones, perfect for cold days.",
        price: 899,
        discount: 15,
        rating: 4.6,
        thumbnail: "https://images.meesho.com/images/products/441276012/ukkva_512.webp",
      },
      {
        id: 13,
        category: "Kids",
        title: "Velvet Dress",
        description: "Soft and stylish velvet dress for girls.",
        price: 1299,
        discount: 20,
        rating: 4.8,
        thumbnail: "https://m.media-amazon.com/images/I/61tPsB8cm3L._AC_UY1100_.jpg",
      },
      {
        id: 14,
        category: "Kids",
        title: "Sneakers for Kids",
        description: "Comfortable sneakers for kids' outdoor activities.",
        price: 999,
        discount: 5,
        rating: 4.5,
        thumbnail: "https://images-cdn.ubuy.co.in/66742a61ce26da0a7343cd83-baby-shoes-children-boys-bling-led-light.jpg",
      },
      {
        id: 15,
        category: "Kids",
        title: "Teddy Bear Pajamas",
        description: "Adorable teddy bear-themed pajamas for kids.",
        price: 799,
        discount: 10,
        rating: 4.6,
        thumbnail: "https://thetrendytoddlers.com/cdn/shop/products/1_32901911-428f-43ae-8d32-a810c46ab26e_1024x1024.jpg?v=1659511492",
      },

      // More products for Men, Women, and Kids
      {
        id: 16,
        category: "Men",
        title: "Sporty Tracksuit",
        description: "Comfortable tracksuit for the athletic men.",
        price: 2499,
        discount: 10,
        rating: 4.6,
        thumbnail: "https://shivnaresh.in/cdn/shop/files/1_3_b5800b76-12d1-48d1-95ee-d3470c652d12.jpg?v=1734164059&width=600",
      },
      {
        id: 17,
        category: "Men",
        title: "Formal Shirt",
        description: "Sharp and stylish formal shirt for work.",
        price: 1499,
        discount: 15,
        rating: 4.8,
        thumbnail: "https://blackberrys.com/cdn/shop/files/printed-formal-shirt-in-blue-jedi-blackberrys-clothing-1_1200x1200.jpg?v=1685949827",
      },
      {
        id: 18,
        category: "Women",
        title: "Evening Gown",
        description: "Elegant evening gown for special occasions.",
        price: 7999,
        discount: 30,
        rating: 4.9,
        thumbnail: "https://m.media-amazon.com/images/I/61GC5xBjHyL.jpg",
      },
      {
        id: 19,
        category: "Women",
        title: "Trench Coat",
        description: "Stylish trench coat for the autumn season.",
        price: 3999,
        discount: 20,
        rating: 4.6,
        thumbnail: "https://www.mytheresa.com/media/1094/1238/100/15/P00888002.jpg",
      },
      {
        id: 20,
        category: "Kids",
        title: "Raincoat",
        description: "Colorful raincoat for kids to enjoy the rainy days.",
        price: 1299,
        discount: 5,
        rating: 4.7,
        thumbnail: "https://images-cdn.ubuy.co.in/65463db7a8f1f178330047a3-yiluweinir-age-3-10t-girls-yellow-rain.jpg",
      },
      {
        id: 21,
        category: "Men",
        title: "Winter Jacket",
        description: "Warm winter jacket to keep you cozy during the cold.",
        price: 5999,
        discount: 15,
        rating: 4.7,
        thumbnail: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToA_g-Umi2H9TfWKEp95s4F64Ib73TExhrhFzMIRjORrr6e2i0_zWzvMsgTTPd8W-3nLc&usqp=CAU",
      },
      {
        id: 22,
        category: "Women",
        title: "Maxi Dress",
        description: "Flowy maxi dress for a casual summer look.",
        price: 2499,
        discount: 10,
        rating: 4.5,
        thumbnail: "https://media.6media.me/media/catalog/product/7/0/7006194928_2.jpg",
      },
      {
        id: 23,
        category: "Kids",
        title: "Kids Tracksuit",
        description: "Comfortable tracksuit for kids' sports activities.",
        price: 1299,
        discount: 20,
        rating: 4.6,
        thumbnail: "https://nwscdn.com/media/catalog/product/cache/h700xw700/f/o/forza-kids-full-tracksuit-navy-main_4.jpg",
      },
      {
        id: 24,
        category: "Men",
        title: "Cargo Pants",
        description: "Functional and stylish cargo pants for men.",
        price: 1899,
        discount: 12,
        rating: 4.4,
        thumbnail: "https://m.media-amazon.com/images/I/61F7X4QxieL._AC_UY350_.jpg",
      },
      {
        id: 25,
        category: "Women",
        title: "Saree",
        description: "Comfortable and fitting flexible clothes.",
        price: 1999,
        discount: 10,
        rating: 4.7,
        thumbnail: "https://assets.ajio.com/medias/sys_master/root/20230508/1J5g/64591d70d55b7d0c639d9d46/-473Wx593H-466138500-turquoise-MODEL.jpg",
      },
  ];

  const [allFashionProducts] = useState(fashionProducts);

  const handleAddToCart = (product) => {
    addToCart(product); // Add the product to the cart
    setShowSuccessMessage(true); // Show success message
    setTimeout(() => setShowSuccessMessage(false), 3000); // Hide the message after 3 seconds
  };

  return (
    <div>
      <div className="fashion-container">
        {allFashionProducts.map((product) => {
          const discountedPrice = product.price - (product.price * product.discount) / 100;

          return (
            <div key={product.id} className="fashion-card">
              <img src={product.thumbnail} alt={product.title} className="fashion-image" />
              <h3 className="fashion-title">{product.title}</h3>
              <p className="fashion-description">{product.description}</p>
              <p className="fashion-price">
                <span className="original-price">₹{product.price}</span> &nbsp;
                <span className="discounted-price">₹{discountedPrice.toFixed(2)}</span>
              </p>
              <p className="fashion-rating">Rating: ⭐ {product.rating}</p>
              <div className="button-container">
                <button
                  className="add-to-cart-btn"
                  onClick={() => handleAddToCart(product)} // Trigger handleAddToCart on click
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

export default Fashion;
