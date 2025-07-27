// models/Quote.js
const mongoose = require('mongoose');

const quoteSchema = new mongoose.Schema({
  category: { type: String, required: true },
  text: { type: String, required: true },
  author: { type: String, default: 'Unknown' }
});

module.exports = mongoose.model('Quote', quoteSchema);
