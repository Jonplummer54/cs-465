// File: app_api/models/trips.js

const mongoose = require('mongoose');

const tripSchema = new mongoose.Schema({
  title: { type: String, required: true },
  location: { type: String, required: true },
  price: { type: String, required: true },
  duration: { type: String, required: true },
  description: { type: String }
});

module.exports = mongoose.model('Trip', tripSchema);
