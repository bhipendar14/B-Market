const express = require("express");
const Grocery = require("../model/grocery_model");
const router = express.Router();

// Fetch all grocery items
router.get("/groceries", async (req, res) => {
  try {
    const groceries = await Grocery.find();
    res.status(200).json(groceries);
  } catch (error) {
    res.status(500).json({ message: "Error fetching groceries", error });
  }
});

module.exports = router;
