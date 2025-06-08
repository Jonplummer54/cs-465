console.log('Running seed script...');


const mongoose = require('mongoose');
const Trip = require('./app_api/models/trips'); // Model we just exported
const fs = require('fs');
const path = require('path');

// Connect to MongoDB
mongoose.connect('mongodb://127.0.0.1/travlr', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('Connected to MongoDB');
}).catch(err => {
  console.error('MongoDB connection error:', err);
});

// Read and parse trips.json
const tripsData = JSON.parse(fs.readFileSync(path.join(__dirname, 'trips.json'), 'utf8'));

// Clear existing trips and insert new ones
Trip.deleteMany({})
  .then(() => {
    console.log('Old trips deleted.');
    return Trip.insertMany(tripsData);
  })
  .then(() => {
    console.log('Trips inserted successfully');
    mongoose.connection.close();
  })
  .catch(err => {
    console.error('Error inserting trips:', err);
    mongoose.connection.close();
  });

