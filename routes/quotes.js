//quotes.js

const express = require('express');
const router = express.Router();
const Quote = require('../models/Quote');

// GET /api/quotes/:category
router.get('/:category', async (req, res) => {
  try {
    const { category } = req.params;  // Get category like 'funny', 'motivational'
    const limit = parseInt(req.query.limit) || 5;  // Default to 5 if no limit is provided

    // Fetch quotes from MongoDB
    const quotes = await Quote.aggregate([
      { $match: { category } },
      { $sample: { size: limit } }  // Randomly select 'limit' number of quotes
    ]);

    res.json(quotes);  // Return quotes as JSON
  } catch (err) {
    console.error('Quote fetch error:', err);
    res.status(500).json({ error: 'Failed to fetch quotes' });
  }
});

module.exports = router;


