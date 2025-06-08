const path = require('path');
const fs = require('fs');

module.exports.travelInfo = function(req, res) {
  const filePath = path.join(__dirname, '../../trips.json');
  const trips = JSON.parse(fs.readFileSync(filePath, 'utf8'));

  res.render('travel', {
    title: 'Travlr Getaways',
    trips: trips
  });
};

