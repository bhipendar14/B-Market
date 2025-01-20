import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./Profile.css";
import { Link } from 'react-router-dom';

const Profile = () => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState("");
  const [showAddressForm, setShowAddressForm] = useState(false);
  const [addresses, setAddresses] = useState([]);
  const [newAddress, setNewAddress] = useState({});
  const [products, setProducts] = useState([]);
  const [currentProductIndex, setCurrentProductIndex] = useState(0);
  const navigate = useNavigate();

  const productData = [
    {
        id: 1,
        title: "Apple iPhone 14",
        description: "The latest iPhone with advanced features and stunning design.",
        price: 79999,
        discount: 10,
        rating: 4.8,
        thumbnail: "https://m.media-amazon.com/images/I/61bK6PMOC3L._AC_UF1000,1000_QL80_.jpg",
        About: [
          "Bank Offer: 5% Unlimited Cashback on Flipkart Axis Bank Credit Card. T&C apply.",
          "Bank Offer: 10% off up to ₹500 on HDFC Bank Credit Card EMI transactions on 3-month tenure. Min. Transaction Value: ₹5000. T&C apply.",
          "Bank Offer: 10% off up to ₹1,000 on HDFC Bank Credit Card EMI for 6 and 9-month tenures. Min. Transaction Value: ₹5000. T&C apply.",
          "Extra Offer: 10% off on Combo with Mobile - Apple. T&C apply."
        ]
      },

    {
      id: 2,
      title: "Samsung Galaxy S23",
      description: "Experience cutting-edge technology with the Galaxy S23.",
      price: 74999,
      discount: 15,
      rating: 4.6,
      thumbnail: "https://media.croma.com/image/upload/v1675347470/Croma%20Assets/Communication/Mobiles/Images/268868_u7nsk3.png",
      About: [
        "Bank Offer: 5% Unlimited Cashback on Flipkart Axis Bank Credit Card. T&C apply.",
        "Bank Offer: 10% off up to ₹500 on HDFC Bank Credit Card EMI transactions on 3-month tenure. Min. Transaction Value: ₹5000. T&C apply.",
        "Bank Offer: 10% off up to ₹1,000 on HDFC Bank Credit Card EMI for 6 and 9-month tenures. Min. Transaction Value: ₹5000. T&C apply.",
        "Extra Offer: 10% off on Combo with Mobile - Apple. T&C apply."
      ]
    },
    {
      id: 3,
      title: "Sony WH-1000XM5",
      description: "Premium noise-cancelling headphones for an immersive sound experience.",
      price: 29999,
      discount: 20,
      rating: 4.7,
      thumbnail: "https://www.sony.co.in/image/f4b4580f439b31bd31ad70c393983cd1?fmt=png-alpha&wid=1014&hei=396",
    },
    {
      id: 4,
      title: "Sony TV",
      description: "Sony 139 cm (55 inches) BRAVIA 2 4K Ultra HD Smart LED Google TV K-55S25B (Black)",
      price: 57999,
      discount: 20,
      rating: 4.0,
      thumbnail: "https://m.media-amazon.com/images/I/81zPuf-0ETL._SL1500_.jpg",
    },
    {
      id: 5,
      title: "Adidas Shoes",
      description: "Adidas Mens Glowrun Reflective M Running Shoe",
      price: 1800,
      discount: 20,
      rating: 3.9,
      thumbnail: "https://m.media-amazon.com/images/I/81llmseSUJL._SX695_.jpg",
      About: [
        "Bank Offer: 5% Unlimited Cashback on Flipkart Axis Bank Credit Card. T&C apply.",
        "Bank Offer: 10% off up to ₹500 on HDFC Bank Credit Card EMI transactions on 3-month tenure. Min. Transaction Value: ₹5000. T&C apply.",
        "Bank Offer: 10% off up to ₹1,000 on HDFC Bank Credit Card EMI for 6 and 9-month tenures. Min. Transaction Value: ₹5000. T&C apply.",
        "Extra Offer: 10% off on Combo with Mobile - Apple. T&C apply."
      ]
    },
    {
      id: 6,
      title: "Aerokick Kids Sneakers",
      description: "Aerokick Kids Casual Sneaker Shoes, Lightweight, Durable, Comfortable Casual Shoes for Boys and Girls",
      price: 473,
      discount: 57,
      rating: 3.1,
      thumbnail: "https://m.media-amazon.com/images/I/51CMd6Lv+kL._SY695_.jpg",
    },
    {
      id: 7,
      title: "Generic",
      description: "MADEEHA Chikankari Lucknow Handwork MUL MUL Printed Kurti",
      price: 1600,
      discount: 7,
      rating: 3.1,
      thumbnail: "https://m.media-amazon.com/images/I/612qREowxPL._SY741_.jpg",
    },
    {
      id: 8,
      title: "Generic",
      description: "PK HUB Rajasthani Womens Chiffon Fabric Leheriya Saree Traditional Ethnic Sari Jaipuri Fashion Dress",
      price: 1000,
      discount: 77,
      rating: 4.1,
      thumbnail: "https://m.media-amazon.com/images/I/71mnVIfdp8L._SY741_.jpg",
    },
    {
      id: 9,
      title: "Tommy Hilfiger",
      description: "Tommy Hilfiger Multifunction Black Dial Watch for Men",
      price: 9999,
      discount: 77,
      rating: 4.3,
      thumbnail: "https://www.titan.co.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Sites-titan-master-catalog/default/dw42068a45/images/Helios/Catalog/TH1791986_1.jpg?sw=600&sh=600",
    },

    {
        id: 10  ,
        title: "Titan",
        description: "Titan Unity Automatic Leather Strap Watch For Men - Limited Series - Stellar Edition",
        price:3999,
        discount: 27,
        rating: 4.3,
        thumbnail: "https://www.titan.co.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Sites-titan-master-catalog/default/dw2aa44747/images/Titan/Catalog/1796SL01_2.jpg?sw=600&sh=600",
      },
      {
        id: 11  ,
        title: "AASHIRVAAD",
        description: "AASHIRVAAD Shudh Chakki Atta (Akha Ghauno Lot)  (10 kg)",
        price:525,
        discount: 13,
        rating: 4,
        thumbnail: "https://rukminim2.flixcart.com/image/280/280/xif0q/flour/j/n/v/-original-imagm7w8jfn29hp2.jpeg?q=70",
      },

      {
        id: 12 ,
        title: "Thums Up",
        description: "Thums Up Soft Drink (750 ml)",
        price:25,
        discount: 3,
        rating: 4.7,
        thumbnail: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/e69c587d-802a-40eb-a40b-a6bc9623526d.jpg?ts=1707312325",
      },
      {
        id: 13 ,
        title: "Durex",
        description: "Durex Air Ultra Thin Condom - 3 units",
        price:110,
        discount: 7,
        rating: 2.9,
        thumbnail: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/077e830c-640b-4b54-a9cb-149c7870de42.jpg?ts=1726465586",
      },
      {
        id: 14 ,
        title: "Moov",
        description: "Moov Instant Pain Relief Spray",
        price:370,
        discount: 17,
        rating: 3.9,
        thumbnail: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/images/products/sliding_image/18862a.jpg?ts=1687262752",
      },

      {
        id: 15 ,
        title: "Amul Gee",
        description: "Amul Cow Ghee (Tin)",
        price:665,
        discount: 7,
        rating: 3.9,
        thumbnail: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/images/products/sliding_image/197187a.jpg?ts=1698063518",
      },

      {
        id: 16 ,
        title: "PIXI ",
        description: "PIXI Glow Tonic Exfoliating Toner With Glycolic Acid(100ml)",
        price:1555,
        discount: 27,
        rating: 3,
        thumbnail: "https://images-static.nykaa.com/media/catalog/product/tr:w-220,h-220,cm-pad_resize/a/5/a5fe676885190821020b_b1.jpg",
      },

      {
        id: 17 ,
        title: "Lakmē ",
        description: "Lakmē 9 to 5 CC Cream ",
        price:300,
        discount: 5,
        rating: 3.4,
        thumbnail: "https://www.lakmeindia.com/cdn/shop/products/Lakme9to5CCComplexionCareCream_30gmHoney_1000x.jpg?v=1598102848",
      },
      {
        id: 18 ,
        title: "Lakmē ",
        description: "Lakmē Facelift MultiSlayer Blush Stick  ",
        price:900,
        discount: 15,
        rating: 3.2,
        thumbnail: "https://www.lakmeindia.com/cdn/shop/files/1000x1000facestickSupplementryNEW_FOP-coralqueen_1000x.jpg?v=1735018916",
      },

      {
        id: 19 ,
        title: "Lakmē ",
        description: "Lakmē 9to5 Powerplay Priming Foundation  ",
        price:650,
        discount: 14,
        rating: 3.6,
        thumbnail: "https://www.lakmeindia.com/cdn/shop/files/24451_H-8901030742436_1000x.jpg?v=1712053120",
      },
      {
        id: 20 ,
        title: "Fastrack ",
        description: "White Quilted Tote Bag  ",
        price:2959,
        discount: 10,
        rating: 3,
        thumbnail: "https://www.fastrack.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Sites-titan-master-catalog/default/dw272270fc/images/Fastrack/Catalog/F241TOMEN03WH1_1.jpg?sw=600&sh=600",
      },
      {
        id: 21 ,
        title: "Regular Fit Hoodie ",
        description: "Long-sleeved hoodie in midweight sweatshirt fabric with a soft brushed inside. Kangaroo pocket, double-layered drawstring hood with a wrapover front, and ribbing at the cuffs and hem. Regular fit for comfortable wear and a classic silhouette.  ",
        price:2999,
        discount: 50,
        rating: 3.8,
        thumbnail: "https://lp2.hm.com/hmgoepprod?set=source[/bc/32/bc3215924e85421396ec36e835bd00cbce55a9d7.jpg],origin[dam],category[men_hoodiessweatshirts_hoodies],type[DESCRIPTIVESTILLLIFE],res[s],hmver[2]&call=url[file:/product/main]",
      },

      {
        id: 22 ,
        title: "Regular Fit Hoodie ",
        description: "Jacket in a soft weave featuring notch lapels with a decorative buttonhole and a two-button fastening at the front. Jetted front pockets with a flap, a chest pocket, two inner pockets, decorative buttons at the cuffs and a single back vent. Relaxed fit for a casual but not oversized silhouette. Lined. ",
        price:6999,
        discount: 11,
        rating: 4.1,
        thumbnail: "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2Fe9%2F0c%2Fe90cd7b743cd5ce27b97c5033583765a972a78f6.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url[file:/product/fullscreen]",
      },
      {
        id: 23 ,
        title: "Tomato ",
        description: "Desi Tomato",
        price:33,
        discount: 4,
        rating: 4,
        thumbnail: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/442798c8-4004-41a6-94b5-3ffba5b9f0c1.jpg?ts=1717305398",
      },

      {
        id: 24 ,
        title: "Brinjal ",
        description: "Round Purple Brinjal",
        price:35,
        discount: 25,
        rating: 2.8,
        thumbnail: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/images/products/sliding_image/540504a.jpg",
      },
      {
        id: 25 ,
        title: "Tawas ",
        description: "Kreme Cookwell series Nonstick Granite Non-Induction Flat Dosa Tawa 28 cm diameter  (Aluminium, Non-stick)",
        price:1999,
        discount: 65,
        rating: 4.2,
        thumbnail: "https://rukminim2.flixcart.com/image/612/612/xif0q/pot-pan/8/5/c/kan072-kreme-original-imagtrfhryaemght.jpeg?q=70",
      }
  ];

  useEffect(() => {
    setProducts(productData.sort(() => Math.random() - 0.5)); // Shuffle products randomly
    const token = localStorage.getItem("token");
    if (!token) {
      setError("User not authenticated. Please login.");
      return;
    }

    axios
      .get("http://localhost:5000/auth/me", {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => {
        setUser(response.data.data);
      })
      .catch((err) => {
        console.error("Error fetching user data:", err);
        setError("Failed to fetch user data. Please try again.");
      });
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/logout");
  };

  const handleNextProducts = () => {
    setCurrentProductIndex((prevIndex) => (prevIndex + 3) % products.length);
  };

  const handlePreviousProducts = () => {
    setCurrentProductIndex((prevIndex) => (prevIndex - 3 + products.length) % products.length);
  };

  const handleAddAddress = () => {

    if (!newAddress.name) {
      setError("Name is required.");
      return;
    }
    if (!newAddress.mobile || !/^\d{10}$/.test(newAddress.mobile)) {
      setError("Please enter a valid 10-digit mobile number.");
      return;
    }
    if (!newAddress.pincode || !/^\d{6}$/.test(newAddress.pincode)) {
      setError("Please enter a valid 6-digit pincode.");
      return;
    }
    if (!newAddress.address) {
      setError("Address is required.");
      return;
    }
    if (!newAddress.city) {
      setError("City is required.");
      return;
    }
    if (!newAddress.state) {
      setError("State is required.");
      return;
    }
    if (!newAddress.addressType) {
        setError("Address type is required((Home, Work)).");
        return;
      }

    setAddresses([...addresses, newAddress]);
    setNewAddress({});
    setShowAddressForm(false);
    setError("");
  };

  const handleDeleteAddress = (index) => {
    setAddresses(addresses.filter((_, i) => i !== index));
  };

  return (
    <div className="profile-container">
      <div className="profile-sidebar">
        <div className="box profile-box">
          <img
            src={user?.profilePic || "https://www.w3schools.com/w3images/avatar2.png"}
            alt="Profile"
            className="profile-pic"
          />
          <div className="profile-info">
            <h2>{user?.name || "User Name"}</h2>
            <p>{user?.email || "user@example.com"}</p>
          </div>
        </div>

        <div className="box">
          <button onClick={() => navigate("/cart")}>Your Orders</button>
        </div>

        <div className="box">
          <button onClick={() => setShowAddressForm(!showAddressForm)}>Manage Addresses</button>
        </div>

        <div className="box">
          <button onClick={() => navigate("/product")}>Shop More</button>
        </div>

        <div className="box logout-box">
          <button onClick={handleLogout}>Logout</button>
        </div>
      </div>

      <div className="profile-content">
        {addresses.length > 0 && (
          <div className="saved-addresses">
            <h3>Saved Addresses</h3>
            {addresses.map((address, index) => (
              <div key={index} className="address-box">
                <p>{address.name}</p>
                <p>{address.mobile}</p>
                <p>{address.address}</p>
                <p>{address.city}, {address.state} - {address.pincode}</p>
                <button onClick={() => handleDeleteAddress(index)}>Delete</button>
              </div>
            ))}
            <button onClick={() => setShowAddressForm(true)}>+ Add New Address</button>
          </div>
        )}

        {showAddressForm && (
          <div className="address-form">
            <h3>Manage Addresses</h3>
            <button className="current-location">Use my current location</button>
            <form onSubmit={(e) => e.preventDefault()}>
              <input type="text" placeholder="Name" required onChange={(e) => setNewAddress({ ...newAddress, name: e.target.value })} />
              <input type="text" placeholder="10-digit mobile number" required onChange={(e) => setNewAddress({ ...newAddress, mobile: e.target.value })} />
              <input type="text" placeholder="Country" required onChange={(e) => setNewAddress({ ...newAddress, country: e.target.value })} />
              <input type="text" placeholder="Pincode" required onChange={(e) => setNewAddress({ ...newAddress, pincode: e.target.value })} />
              <input type="text" placeholder="Locality" required onChange={(e) => setNewAddress({ ...newAddress, locality: e.target.value })} />
              <textarea placeholder="Address (Area and Street)" required onChange={(e) => setNewAddress({ ...newAddress, address: e.target.value })} />
              <input type="text" placeholder="City/District/Town" required onChange={(e) => setNewAddress({ ...newAddress, city: e.target.value })} />
              <select required onChange={(e) => setNewAddress({ ...newAddress, state: e.target.value })}>
                <option value="">--Select State--</option>
                <option value="Andhra Pradesh">Andhra Pradesh</option>
<option value="Arunachal Pradesh">Arunachal Pradesh</option>
<option value="Assam">Assam</option>
<option value="Bihar">Bihar</option>
<option value="Chhattisgarh">Chhattisgarh</option>
<option value="Goa">Goa</option>
<option value="Gujarat">Gujarat</option>
<option value="Haryana">Haryana</option>
<option value="Himachal Pradesh">Himachal Pradesh</option>
<option value="Jharkhand">Jharkhand</option>
<option value="Karnataka">Karnataka</option>
<option value="Kerala">Kerala</option>
<option value="Madhya Pradesh">Madhya Pradesh</option>
<option value="Maharashtra">Maharashtra</option>
<option value="Manipur">Manipur</option>
<option value="Meghalaya">Meghalaya</option>
<option value="Mizoram">Mizoram</option>
<option value="Nagaland">Nagaland</option>
<option value="Odisha">Odisha</option>
<option value="Punjab">Punjab</option>
<option value="Rajasthan">Rajasthan</option>
<option value="Sikkim">Sikkim</option>
<option value="Tamil Nadu">Tamil Nadu</option>
<option value="Telangana">Telangana</option>
<option value="Tripura">Tripura</option>
<option value="Uttar Pradesh">Uttar Pradesh</option>
<option value="Uttarakhand">Uttarakhand</option>
<option value="West Bengal">West Bengal</option>
<option value="Andaman and Nicobar Islands">Andaman and Nicobar Islands</option>
<option value="Chandigarh">Chandigarh</option>
<option value="Dadra and Nagar Haveli and Daman and Diu">Dadra and Nagar Haveli and Daman and Diu</option>
<option value="Lakshadweep">Lakshadweep</option>
<option value="Delhi">Delhi</option>
<option value="Puducherry">Puducherry</option>

              </select>
              <input type="text" placeholder="Landmark (Optional)" onChange={(e) => setNewAddress({ ...newAddress, landmark: e.target.value })} />
              <input type="text" placeholder="Alternate Phone (Optional)" onChange={(e) => setNewAddress({ ...newAddress, altPhone: e.target.value })} />
              <div>
                <label>
                  <input type="radio" name="addressType" value="Home" required onChange={(e) => setNewAddress({ ...newAddress, addressType: e.target.value })} /> Home
                </label>
                <label>
                  <input type="radio" name="addressType" value="Work" required onChange={(e) => setNewAddress({ ...newAddress, addressType: e.target.value })} /> Work
                </label>
              </div>
              {error && <div className="error-message">{error}</div>}
              <div className="form-buttons">
                <button type="button" onClick={handleAddAddress}>Save</button>
                <button type="button" onClick={() => setShowAddressForm(false)}>Cancel</button>
              </div>
            </form>
          </div>
        )}

        {!showAddressForm && addresses.length === 0 && (
          <button onClick={() => setShowAddressForm(true)}>+ Add Address</button>
        )}

        <div className="products-display">
          <h3>Shop More Products</h3>
          <div className="products-row">
            <button className="nav-btn prev-btn" onClick={handlePreviousProducts}>
              &lt;
            </button>
            {products.slice(currentProductIndex, currentProductIndex + 3).map((product) => (
              <div key={product.id} className="product-card">
                <img src={product.thumbnail} alt={product.title} />
                <h4>{product.title}</h4>
                <p className="product-price">₹{product.price}</p>
                <p className="product-discount">-{product.discount}%</p>
                <p className="product-rating">⭐ {product.rating}</p>
                <Link to="/product">
  <button className="add-to-cart-btn">Add to Cart</button>
</Link>
              </div>
            ))}
            <button className="nav-btn next-btn" onClick={handleNextProducts}>
              &gt;
            </button>
          </div>
        </div>
      </div>
      <footer className="footer2">
        <p>© {new Date().getFullYear()}, Bmarket.com, Inc. or its affiliates</p>
      </footer>
    </div>
  );
};

export default Profile;
