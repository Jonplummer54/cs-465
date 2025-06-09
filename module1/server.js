const express = require('express');
const path = require('path');
const hbs = require('hbs'); // Handlebars for templating
const app = express();
const port = 3000;

require('./app_server/app_api/database'); // Connects MongoDB via Mongoose


const apiRouter = require('./app_api/routes/trips');
app.use('/api', apiRouter);

// View engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

// Register Handlebars partials
hbs.registerPartials(path.join(__dirname, 'views/partials'));

// Static files
app.use(express.static(path.join(__dirname, 'public')));

// Routing
const travelRouter = require('./app_server/routes/travel');
app.use('/travel', travelRouter);

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
