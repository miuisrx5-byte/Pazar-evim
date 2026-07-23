const express = require('express');
const router = express.Router();

// POST /api/payments/create-checkout
router.post('/create-checkout', (req, res) => {
  // TODO: Create Iyzico checkout session
  res.json({ message: 'Create checkout' });
});

// POST /api/payments/confirm
router.post('/confirm', (req, res) => {
  // TODO: Confirm payment
  res.json({ message: 'Confirm payment' });
});

module.exports = router;
