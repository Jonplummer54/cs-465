const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Trip = mongoose.model('Trip');

// GET /api/trips - return all trips
router.get('/trips', async (req, res) => {
  try {
    const trips = await Trip.find();
    res.status(200).json(trips);
  } catch (err) {
    res.status(500).json({ message: 'Error retrieving trips', error: err });
  }
});

module.exports = router;
