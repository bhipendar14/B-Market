// model/product_model.js
const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  id: { type: Number, required: true },
  title: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  discount: { type: Number, required: true },
  rating: { type: Number, required: true },
  thumbnail: { type: String, required: true },
});

module.exports = mongoose.model("Product", productSchema);
