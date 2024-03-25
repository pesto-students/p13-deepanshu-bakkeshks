 // models/financeModel.js
const mongoose = require('mongoose');

const financeSchema = new mongoose.Schema({
  year: { type: Number, required: true },
  month: { type: Number, required: true },
  income: { type: Number, required: true },
  expenses: { type: Number, required: true },
  savings: { type: Number, required: true },
  // other fields as needed
});

module.exports = mongoose.model('Finance', financeSchema);
