import React, { useState } from "react";
import { useCart } from "../CartContext";
import "./Grocery.css"; // Add styles specific to grocery items
import Footer from "../Footer/Footer";

const Grocery = () => {
  const { addToCart } = useCart(); // Use addToCart function from CartContext
  const [successMessage, setSuccessMessage] = useState(""); // State to manage the message box

  // Function to handle the add-to-cart action
  const handleAddToCart = (product) => {
    addToCart(product); // Add product to cart
    setSuccessMessage(`${product.title} has been added to your cart!`); // Set success message

    // Clear the message after 3 seconds
    setTimeout(() => {
      setSuccessMessage("");
    }, 3000);
  };

  // Grocery product data
  const groceryProducts = [
    {
        id: 1,
        title: "Organic Apples",
        description: "Fresh organic apples, perfect for snacking.",
        price: 299,
        discount: 10,
        rating: 4.5,
        thumbnail: "https://b2bgrocery.in/wp-content/uploads/2020/06/organicc-apples-1.png",
        },
        {
        id: 2,
        title: "Whole Wheat Bread",
        description: "Healthy whole wheat bread for your sandwiches.",
        price: 45,
        discount: 5,
        rating: 4.7,
        thumbnail: "https://www.allrecipes.com/thmb/_piMRxT9zYHP39Lnz6-lObHzEWw=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/AR-6773-simple-whole-wheat-bread-DDMFS-4x3-B-969e7bce922948959cb9e85aa4b2ff0d.jpg",
        },
        {
        id: 3,
        title: "Fresh Tomatoes",
        description: "Juicy and ripe tomatoes for salads and cooking.",
        price: 70,
        discount: 12,
        rating: 4.6,
        thumbnail: "https://dukaan.b-cdn.net/700x700/webp/upload_file_service/2c3c6711-40f0-4991-bb52-bef290831f16/tomatoes.jpg",
        },
        {
        id: 4,
        title: "Bananas",
        description: "Sweet and ripe bananas packed with energy.",
        price: 50,
        discount: 8,
        rating: 4.5,
        thumbnail: "https://cdn11.bigcommerce.com/s-kc25pb94dz/images/stencil/1280x1280/products/188/602/1-Bunch-Bananas__30199.1650549450.jpg?c=2",
        },
        {
        id: 5,
        title: "Cucumber",
        description: "Fresh cucumbers for salads and snacks.",
        price: 30,
        discount: 10,
        rating: 4.4,
        thumbnail: "https://m.media-amazon.com/images/I/71xkI-PIE5L.jpg",
        },
        {
        id: 6,
        title: "Almonds",
        description: "Crunchy and nutritious almonds, perfect for snacks.",
        price: 200,
        discount: 15,
        rating: 4.8,
        thumbnail: "https://www.healthysupplies.co.uk/cached/1728923172/pics/800x800/organic-almonds-glass-bowl.webp",
        },
        {
        id: 7,
        title: "Milk",
        description: "Fresh and creamy milk for all your dairy needs.",
        price: 60,
        discount: 5,
        rating: 4.7,
        thumbnail: "https://sapinsdairy.com/wp-content/uploads/2021/12/milk-bottle.png",
        },
        {
        id: 8,
        title: "Eggs",
        description: "Farm-fresh eggs for breakfast or baking.",
        price: 50,
        discount: 0,
        rating: 4.6,
        thumbnail: "https://www.fastandup.in/nutrition-world/wp-content/uploads/2023/03/front-view-white-chicken-eggs-inside-basket-with-towel-dark-surface_140725-103357-min.jpg",
        },
        {
        id: 9,
        title: "Fresh Carrots",
        description: "Crunchy and healthy carrots for cooking or snacking.",
        price: 40,
        discount: 8,
        rating: 4.4,
        thumbnail: "https://bcfresh.ca/wp-content/uploads/2021/11/Carrots.jpg",
        },
        {
        id: 10,
        title: "Spinach",
        description: "Fresh spinach for salads or cooking.",
        price: 60,
        discount: 10,
        rating: 4.6,
        thumbnail: "https://www.bluelettuce.in/wp-content/uploads/2022/11/7a16aed2-193e-4e88-bedf-4535b464a285.jpg",
        },
        // Add more grocery items here...
        {
        id: 11,
        title: "Potatoes",
        description: "Fresh and versatile potatoes for all dishes.",
        price: 40,
        discount: 12,
        rating: 4.5,
        thumbnail: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTu3hixOCV2Ev7g5oonOdjEdC3h_YsNUuEAWaRrGOHOPtrqjRcCwiJEiY0sV26kfVaKblE&usqp=CAU",
        },
        {
        id: 12,
        title: "Rice",
        description: "High-quality basmati rice for a variety of dishes.",
        price: 150,
        discount: 5,
        rating: 4.8,
        thumbnail: "https://bsmedia.business-standard.com/_media/bs/img/article/2024-09/04/full/1725434023-926.jpg",
        },
        {
        id: 13,
        title: "Tomato Sauce",
        description: "Rich and flavorful tomato sauce for pastas and more.",
        price: 120,
        discount: 10,
        rating: 4.6,
        thumbnail: "https://5.imimg.com/data5/SELLER/Default/2023/5/308435640/WL/HD/YV/46063010/20a2d57685d911eda6d5a99be7adc708-variant-5bc87ae20d298a283c29797b-1.jpeg",
        },
        {
        id: 14,
        title: "Olive Oil",
        description: "Pure olive oil for cooking and dressings.",
        price: 250,
        discount: 8,
        rating: 4.7,
        thumbnail: "https://www.soulflower.in/cdn/shop/files/Cold_Pressed_Olive_Oil_for_Nourished_Hair_and_Skin.webp?v=1735196519&width=600",
        },
        {
        id: 15,
        title: "Honey",
        description: "Pure honey for a natural sweetness.",
        price: 180,
        discount: 12,
        rating: 4.8,
        thumbnail: "https://ik.imagekit.io/dunzo/918b0d66cf0c11edb9993a8605d6a439_VARIANT_642168f9ba7a45002670f64d_1.JPG",
        },
        {
        id: 16,
        title: "Lemon",
        description: "Fresh lemons, perfect for juices or seasoning.",
        price: 30,
        discount: 10,
        rating: 4.5,
        thumbnail: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXYtXnrGpzC51dtrKar6MZSflJI4ZEJatK1g&s",
        },
        {
        id: 17,
        title: "Green Tea",
        description: "Healthy green tea for your daily boost.",
        price: 120,
        discount: 5,
        rating: 4.7,
        thumbnail: "https://images.ctfassets.net/e8bhhtr91vp3/41XIoxnMHrbQv2AMkqZaO0/edb70fa617e36b27772dfeaee86b124d/Medium-794522730667.01.webp?w=800&q=50",
        },
        {
        id: 18,
        title: "Yogurt",
        description: "Fresh yogurt, perfect for breakfast or smoothies.",
        price: 80,
        discount: 8,
        rating: 4.6,
        thumbnail: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1jDsBo3p85KYU0ZESV1WRqeJI1zCrNoc1GQ&s",
        },
        {
        id: 19,
        title: "Frozen Peas",
        description: "Frozen peas for quick cooking.",
        price: 90,
        discount: 5,
        rating: 4.4,
        thumbnail: "https://www.smc-madhusudan.co.in/cdn/shop/files/MadhusudanFrozenGreenPea500gFrontDummy_1.png?v=1714552196&width=1412",
        },
        {
        id: 20,
        title: "Coconut Oil",
        description: "Pure coconut oil for cooking or skincare.",
        price: 250,
        discount: 15,
        rating: 4.6,
        thumbnail: "https://m.media-amazon.com/images/I/71+I2IPZOqL._AC_UF1000,1000_QL80_.jpg",
        },
        {
        id: 21,
        title: "Cereal",
        description: "Healthy and nutritious breakfast cereal.",
        price: 150,
        discount: 10,
        rating: 4.7,
        thumbnail: "https://www.kelloggs.com/content/dam/Asia/kelloggs_in/images/articles/benefits-of-cereal.jpg",
        },
        {
        id: 22,
        title: "Chickpeas",
        description: "Dried chickpeas for cooking and snacking.",
        price: 100,
        discount: 8,
        rating: 4.5,
        thumbnail: "https://nutritionsource.hsph.harvard.edu/wp-content/uploads/2024/11/AdobeStock_118383793.jpeg",
        },
        {
        id: 23,
        title: "Pasta",
        description: "High-quality pasta for your favorite dishes.",
        price: 80,
        discount: 5,
        rating: 4.6,
        thumbnail: "https://gharstuff.com/wp-content/uploads/2020/04/Maggi-Masala-Penne-Instant-Pasta-65g-1.jpg",
        },
        {
        id: 24,
        title: "Chocolate",
        description: "Delicious chocolate for your sweet cravings.",
        price: 150,
        discount: 12,
        rating: 4.7,
        thumbnail: "https://www.quickpantry.in/cdn/shop/products/cadbury-dairy-milk-silk-chocolate-bar-60-g-quick-pantry.jpg?v=1710538483&width=500",
        },
        {
        id: 25,
        title: "Salt",
        description: "Pure salt for cooking and seasoning.",
        price: 20,
        discount: 0,
        rating: 4.4,
        thumbnail: "https://jindalnaturecure.in/wp-content/uploads/2018/11/Beware-of-common-salt.jpg",
        },
  ];

  return (
    <div>
      <div className="grocery-container">
        {groceryProducts.map((product) => {
          const discountedPrice =
            product.price - (product.price * product.discount) / 100;

          return (
            <div key={product.id} className="grocery-card">
              <img
                src={product.thumbnail}
                alt={product.title}
                className="grocery-image"
              />
              <h3 className="grocery-title">{product.title}</h3>
              <p className="grocery-description">{product.description}</p>
              <p className="grocery-price">
                <span className="original-price">₹{product.price}</span> &nbsp;
                <span className="discounted-price">
                  ₹{discountedPrice.toFixed(2)}
                </span>
              </p>
              <p className="grocery-rating">Rating: ⭐ {product.rating}</p>
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

      {/* Success message box */}
      {successMessage && (
        <div className="success-message-box">
          {successMessage}
        </div>
      )}

      <Footer />
    </div>
  );
};

export default Grocery;
