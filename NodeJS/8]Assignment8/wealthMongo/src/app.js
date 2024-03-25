 // app.js
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const assetRoutes = require('./routes/assetRoutes');
const financeRoutes = require('./routes/financeRoutes');

const app = express();

// Middleware
app.use(bodyParser.json());

// Routes
app.use('/assets', assetRoutes);
app.use('/finance', financeRoutes);

// Database connection
mongoose.connect('mongodb+srv://bakkeshpruthvi49:9844@cluster0.it4pita.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

// Server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

module.exports = app;
