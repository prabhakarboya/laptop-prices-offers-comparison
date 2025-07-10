const mongoose = require('mongoose');

const laptopSchema = new mongoose.Schema({
  title: { type: String, required: true },
  laptop_name: { type: String, required: true },
  brand: { type: String, required: true },
  specifications: { type: String, required: true },
  amazon: {
    price: { type: Number, required: true },
    offers: { type: String, required: true },
    buy_link: { type: String, required: true },
  },
  flipkart: {
    price: { type: Number, required: true },
    offers: { type: String, required: true },
    buy_link: { type: String, required: true },
  },
  croma: {
    price: { type: Number, required: true },
    offers: { type: String, required: true },
    buy_link: { type: String, required: true },
  },
  jiomart: {
    price: { type: Number, required: true },
    offers: { type: String, required: true },
    buy_link: { type: String, required: true },
  },
});

const Laptop = mongoose.model('Laptop', laptopSchema);
module.exports = Laptop;
