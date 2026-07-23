const express = require('express');
const router = express.Router();

// GET /api/reviews?product_id=:id
router.get('/', (req, res) => {
  // TODO: Get product reviews
  res.json({ message: 'Get product reviews' });
});

// POST /api/reviews
router.post('/', (req, res) => {
  // TODO: Create review
  res.json({ message: 'Create review' });
});

module.exports = router;
