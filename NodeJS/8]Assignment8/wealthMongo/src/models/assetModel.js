// models/assetModel.js
const mongoose = require('mongoose');

const assetSchema = new mongoose.Schema({
  type: { type: String, enum: ['Equity', 'Fixed Income', 'Alternatives'], required: true },
  name: { type: String, required: true },
  // other fields as needed
});

module.exports = mongoose.model('Asset', assetSchema);
