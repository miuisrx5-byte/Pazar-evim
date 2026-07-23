const express = require('express');
const router = express.Router();

// GET /api/products
router.get('/', (req, res) => {
  // TODO: Get all products
  res.json({ message: 'Get all products' });
});

// GET /api/products/:id
router.get('/:id', (req, res) => {
  // TODO: Get product by ID
  res.json({ message: 'Get product by ID' });
});

// POST /api/products (Admin only)
router.post('/', (req, res) => {
  // TODO: Create product
  res.json({ message: 'Create product' });
});

// PUT /api/products/:id (Admin only)
router.put('/:id', (req, res) => {
  // TODO: Update product
  res.json({ message: 'Update product' });
});

// DELETE /api/products/:id (Admin only)
router.delete('/:id', (req, res) => {
  // TODO: Delete product
  res.json({ message: 'Delete product' });
});

module.exports = router;
