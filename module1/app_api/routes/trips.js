const express = require('express');
const router = express.Router();
const ctrlTrips = require('../controllers/trips');

// GET all trips
router.get('/trips', ctrlTrips.tripsList);

// GET a trip by ID
router.get('/trips/:tripid', ctrlTrips.tripsReadOne);

module.exports = router;
