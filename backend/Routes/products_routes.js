// Routes/products_routes.js
const express = require("express");
const router = express.Router();
const Product = require("../model/product_model"); // Import the Product model

// Fetch all products
router.get("/products", async (req, res) => {
  try {
    const products = await Product.find(); // Fetch all products from the database
    res.status(200).json(products);
  } catch (error) {
    console.error("Error fetching products:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

module.exports = router;
