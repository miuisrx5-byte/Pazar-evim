const express = require('express');
const router = express.Router();

// GET /api/users/profile
router.get('/profile', (req, res) => {
  // TODO: Get user profile
  res.json({ message: 'Get user profile' });
});

// PUT /api/users/profile
router.put('/profile', (req, res) => {
  // TODO: Update user profile
  res.json({ message: 'Update user profile' });
});

module.exports = router;
