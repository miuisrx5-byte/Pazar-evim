const express = require('express');
const router = express.Router();

// GET /api/categories
router.get('/', (req, res) => {
  // TODO: Get all categories
  res.json({ message: 'Get all categories' });
});

// GET /api/categories/:id
router.get('/:id', (req, res) => {
  // TODO: Get category by ID
  res.json({ message: 'Get category by ID' });
});

module.exports = router;
