const Finance = require('../models/financeModel');

exports.getFinanceSummary = async (req, res) => {
  try {
    const finances = await Finance.find();
    res.json(finances);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getDetailedFinance = async (req, res) => {
  try {
    const finances = await Finance.find();
    res.json(finances);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.createFinanceRecord = async (req, res) => {
  const finance = new Finance(req.body);
  try {
    const newFinance = await finance.save();
    res.status(201).json(newFinance);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.updateFinanceRecord = async (req, res) => {
  try {
    const finance = await Finance.findById(req.params.id);
    if (!finance) {
      return res.status(404).json({ message: 'Finance record not found' });
    }
    Object.assign(finance, req.body);
    const updatedFinance = await finance.save();
    res.json(updatedFinance);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.deleteFinanceRecord = async (req, res) => {
  try {
    const finance = await Finance.findById(req.params.id);
    if (!finance) {
      return res.status(404).json({ message: 'Finance record not found' });
    }
    await finance.remove();
    res.json({ message: 'Finance record deleted' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = exports;
