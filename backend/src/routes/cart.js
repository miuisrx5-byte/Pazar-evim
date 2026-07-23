const express = require('express');
const router = express.Router();

// GET /api/cart
router.get('/', (req, res) => {
  // TODO: Get cart
  res.json({ message: 'Get cart' });
});

// POST /api/cart/items
router.post('/items', (req, res) => {
  // TODO: Add to cart
  res.json({ message: 'Add to cart' });
});

// PUT /api/cart/items/:id
router.put('/items/:id', (req, res) => {
  // TODO: Update cart item
  res.json({ message: 'Update cart item' });
});

// DELETE /api/cart/items/:id
router.delete('/items/:id', (req, res) => {
  // TODO: Remove from cart
  res.json({ message: 'Remove from cart' });
});

module.exports = router;
