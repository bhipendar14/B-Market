import React, { useState } from "react";
import { useCart } from "../CartContext"; // Import useCart
import "./Furniture.css"; // Import corresponding CSS for styling
import Footer from "../Footer/Footer";

const Furniture = () => {
  const { addToCart } = useCart(); // Access addToCart from CartContext
  const [showSuccessMessage, setShowSuccessMessage] = useState(false); // State to show the success message

  const furnitureProducts = [
    {
        id: 1,
        title: "Modern Sofa Set",
        description: "3-seater fabric sofa with wooden frame.",
        price: 25999,
        discount: 15,
        rating: 4.7,
        thumbnail: "https://cdn-idimj.nitrocdn.com/WhPAOrwwzgEUQpZxHSiIdKysEwgKQQkO/assets/images/optimized/rev-d5663d0/thehome.ae/wp-content/uploads/2023/11/999X665X100-OMAR-SOFA-1818B-11-1.jpg",
      },
      {
        id: 2,
        title: "Queen Size Bed",
        description: "Wooden bed with hydraulic storage.",
        price: 32999,
        discount: 12,
        rating: 4.6,
        thumbnail: "https://ii1.pepperfry.com/media/catalog/product/t/a/1100x1210/takai-queen-size-bed-in-wenge-finish-by-mintwud-takai-queen-size-bed-in-wenge-finish-by-mintwud-wqhmtv.jpg",
      },
      {
        id: 3,
        title: "Dining Table Set",
        description: "6-seater wooden dining table with chairs.",
        price: 19999,
        discount: 10,
        rating: 4.5,
        thumbnail: "https://damroimages.blob.core.windows.net/damroimages/Tency-1.jpg",
      },
      {
        id: 4,
        title: "Recliner Chair",
        description: "Adjustable recliner with ergonomic design.",
        price: 14999,
        discount: 8,
        rating: 4.7,
        thumbnail: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSx0oOAByPT2dg2hzqjT1O8IN82pJcpFVkatA&s",
      },
      {
        id: 5,
        title: "Coffee Table",
        description: "Solid wood coffee table with glass top.",
        price: 5999,
        discount: 20,
        rating: 4.6,
        thumbnail: "https://images.woodenstreet.de/image/data/coffee-table/elevate-sheesham-wood-glass-top-coffee-table-with-storage-walnut-finish/walnut-finish/new-logo/1.jpg",
      },
      {
        id: 6,
        title: "Bookshelf",
        description: "5-tier wooden bookshelf for storage.",
        price: 7999,
        discount: 15,
        rating: 4.5,
        thumbnail: "https://m.media-amazon.com/images/I/61ewEvPy2wL._AC_UF894,1000_QL80_.jpg",
      },
      {
        id: 7,
        title: "TV Unit",
        description: "Wall-mounted TV unit with storage shelves.",
        price: 11999,
        discount: 18,
        rating: 4.4,
        thumbnail: "https://m.media-amazon.com/images/I/71efO+QyxtL.jpg",
      },
      {
        id: 8,
        title: "Wardrobe",
        description: "3-door wooden wardrobe with mirror.",
        price: 22999,
        discount: 12,
        rating: 4.6,
        thumbnail: "https://studiokook.com/cdn/shop/files/jw-min_4413659d-703f-45f5-8080-a5de21957569.jpg?v=1713250287",
      },
      {
        id: 9,
        title: "Study Table",
        description: "Compact wooden study table with drawers.",
        price: 7999,
        discount: 10,
        rating: 4.5,
        thumbnail: "https://shop.gkwretail.com/cdn/shop/files/KidsStudyTable43.03_WoodenDesk1.webp?v=1690878967",
      },
      {
        id: 10,
        title: "Accent Chair",
        description: "Upholstered accent chair with wooden legs.",
        price: 5999,
        discount: 15,
        rating: 4.6,
        thumbnail: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1sHN6ioQDorW5Pz8Elo3fNS4znsEnfFanGg&s",
      },
      {
        id: 11,
        title: "Corner Shelf",
        description: "Space-saving 4-tier corner shelf.",
        price: 3499,
        discount: 18,
        rating: 4.4,
        thumbnail: "https://vibecrafts.com/cdn/shop/files/vibecrafts-modern-corner-diamond-shape-wooden-wall-shelf-with-light-oak-finish-WWSVC_63010_1.jpg?v=1724994229",
      },
      {
        id: 12,
        title: "L-Shaped Sofa",
        description: "Luxury L-shaped fabric sofa with cushions.",
        price: 37999,
        discount: 12,
        rating: 4.8,
        thumbnail: "https://www.orangetree.in/cdn/shop/files/Gallery-1ChiyoL-ShapedSofaBuyOnline.jpg?v=1722852692",
      },
      {
        id: 13,
        title: "Rocking Chair",
        description: "Classic wooden rocking chair with cushion.",
        price: 12999,
        discount: 10,
        rating: 4.7,
        thumbnail: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiMDBpiMQ7mdVGPP_9s6XXpgndjt-CV4sVCQ&s",
      },
      {
        id: 14,
        title: "Bedside Table",
        description: "Compact wooden bedside table with drawer.",
        price: 3999,
        discount: 20,
        rating: 4.5,
        thumbnail: "https://ik.imagekit.io/2xkwa8s1i/img/bedside-tables/New/WBDSTCINDER/1.jpg?tr=w-3840",
      },
      {
        id: 15,
        title: "Office Chair",
        description: "Ergonomic office chair with lumbar support.",
        price: 9999,
        discount: 12,
        rating: 4.6,
        thumbnail: "https://roswp-mediastorage.s3.ap-south-1.amazonaws.com/wp-content/uploads/2023/04/05111518/CE-High-Back-Ergonomic-Mesh-Office-Chairs-for-Work-from-Home.webp",
      },
      {
        id: 16,
        title: "Chaise Lounge",
        description: "Elegant chaise lounge with velvet upholstery.",
        price: 18999,
        discount: 10,
        rating: 4.7,
        thumbnail: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGN9aoSKMBJ_kyNBNu7_nnbUpPtEzgehHzaQ&s",
      },
      {
        id: 17,
        title: "Storage Ottoman",
        description: "Multi-purpose ottoman with storage space.",
        price: 4999,
        discount: 15,
        rating: 4.4,
        thumbnail: "https://wallmantra.com/wp-content/uploads/WMCUSHTBLE-128-1.jpg",
      },
      {
        id: 18,
        title: "Bar Stool Set",
        description: "Set of 2 adjustable bar stools.",
        price: 8999,
        discount: 18,
        rating: 4.5,
        thumbnail: "https://shop.gkwretail.com/cdn/shop/products/BarStoolModernPuLeatherKitchenCounterStoolsDiningChairsSetof2-3.jpg?v=1631353942",
      },
      {
        id: 19,
        title: "Entryway Bench",
        description: "Wooden bench with shoe storage.",
        price: 5999,
        discount: 10,
        rating: 4.6,
        thumbnail: "https://images-cdn.ubuy.co.in/64b64c775070d50a911916d3-espresso-entryway-storage-bench-with.jpg",
      },
      {
        id: 20,
        title: "Kids Bunk Bed",
        description: "Space-saving bunk bed with ladder.",
        price: 24999,
        discount: 12,
        rating: 4.7,
        thumbnail: "https://www.smartsters.in/cdn/shop/files/Artboard1_51ad51c8-48c3-42aa-ba09-286061d05e13.png?v=1711712106&width=1946",
      },
      {
        id: 21,
        title: "Vanity Table",
        description: "Wooden vanity table with mirror and drawers.",
        price: 15999,
        discount: 15,
        rating: 4.6,
        thumbnail: "https://www.ikea.com/in/en/images/products/malm-dressing-table-white__1154625_pe886239_s5.jpg?f=s",
      },
      {
        id: 22,
        title: "Garden Chair Set",
        description: "Set of 4 metal garden chairs.",
        price: 12999,
        discount: 20,
        rating: 4.5,
        thumbnail: "https://dreamlineoutdoorfurniture.com/cdn/shop/products/adele-95-cermaic-nivala-5pc-char.png?v=1680087229&width=1080",
      },
      {
        id: 23,
        title: "Sectional Sofa",
        description: "Large sectional sofa with recliner.",
        price: 45999,
        discount: 12,
        rating: 4.8,
        thumbnail: "https://www.modholic.in/cdn/shop/products/MD-3356-GRY_01.jpg?v=1683681518",
      },
      {
        id: 24,
        title: "Futon Bed",
        description: "Convertible futon bed with fabric upholstery.",
        price: 15999,
        discount: 10,
        rating: 4.5,
        thumbnail: "https://images-cdn.ubuy.qa/658eb38ac236be56b368e659-muumblus-55-5-pull-out-sofa-bed-2.jpg",
      },
      {
        id: 25,
        title: "Hall Tree",
        description: "Coat rack and bench combo with storage.",
        price: 8999,
        discount: 15,
        rating: 4.6,
        thumbnail: "https://assets.wfcdn.com/im/10750211/resize-h800-w800%5Ecompr-r85/2778/277838362/Thirza+Hall+Tree+39.4%27%27+Wide+with+Shoe+Storage.jpg",
      },
  ];

  const [allFurnitureProducts] = useState(furnitureProducts);

  const handleAddToCart = (product) => {
    addToCart(product); // Add the product to the cart
    setShowSuccessMessage(true); // Show success message
    setTimeout(() => {
      setShowSuccessMessage(false); // Hide success message after 3 seconds
    }, 3000);
  };

  return (
    <div>
      <div className="furniture-container">
        {allFurnitureProducts.map((product) => {
          const discountedPrice = product.price - (product.price * product.discount) / 100;

          return (
            <div key={product.id} className="furniture-card">
              <img src={product.thumbnail} alt={product.title} className="furniture-image" />
              <h3 className="furniture-title">{product.title}</h3>
              <p className="furniture-description">{product.description}</p>
              <p className="furniture-price">
                <span className="original-price">₹{product.price}</span> &nbsp;
                <span className="discounted-price">₹{discountedPrice.toFixed(2)}</span>
              </p>
              <p className="furniture-rating">Rating: ⭐ {product.rating}</p>
              <div className="button-container">
                <button
                  className="add-to-cart-btn"
                  onClick={() => handleAddToCart(product)} // Handle adding product to cart
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

export default Furniture;
