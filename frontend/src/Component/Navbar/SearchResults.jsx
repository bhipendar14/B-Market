import React, { useState } from "react";
import products from "../ProductDetails/productsData";

const SearchResults = () => {
  const [query, setQuery] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);

  const handleSearchChange = (e) => {
    const value = e.target.value.toLowerCase();
    setQuery(value);

    const filtered = products.filter((product) =>
      product.title.toLowerCase().includes(value)
    );
    setFilteredProducts(filtered);
  };

  const handleSearchClick = () => {
    if (query.trim() !== "") {
      const filtered = products.filter((product) =>
        product.title.toLowerCase().includes(query)
      );
      setFilteredProducts(filtered);
    }
  };

  return (
    <div>
      {/* Search Input */}
      <div style={{ marginBottom: "20px" }}>
        <input
          type="text"
          placeholder="Search for a product..."
          value={query}
          onChange={handleSearchChange}
          style={{
            width: "100%",
            padding: "10px",
            borderRadius: "4px",
            border: "1px solid #ccc",
          }}
        />
        <button onClick={handleSearchClick} style={{ padding: "10px", marginLeft: "10px" }}>
          Search
        </button>
      </div>

      {/* Display Search Results */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "20px" }}>
        {filteredProducts.map((product) => (
          <div
            key={product.id}
            style={{
              border: "1px solid #ddd",
              padding: "10px",
              borderRadius: "4px",
              textAlign: "center",
            }}
          >
            <img
              src={product.thumbnail}
              alt={product.title}
              style={{ maxWidth: "100%", height: "150px", objectFit: "cover" }}
            />
            <h3>{product.title}</h3>
            <p>{product.description}</p>
            <p>Price: ₹{product.price}</p>
            <button style={{ padding: "10px", backgroundColor: "#007BFF", color: "#fff", border: "none", borderRadius: "4px" }}>
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchResults;
