const express = require('express');
const router = express.Router();
const Quote = require('../models/Quote');

// GET /api/quotes/:category
router.get('/:category', async (req, res) => {
  try {
    const quotes = await Quote.find({ category: req.params.category });
    res.json(quotes);
  } catch (err) {
    console.error('Quote fetch error:', err);
    res.status(500).json({ error: 'Failed to fetch quotes' });
  }
});

module.exports = router;
