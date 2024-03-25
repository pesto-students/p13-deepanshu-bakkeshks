// routes/financeRoutes.js
const express = require('express');
const router = express.Router();
const financeController = require('../controllers/financeController');

router.get('/', financeController.getFinanceSummary);
router.get('/detailed', financeController.getDetailedFinance);
router.post('/', financeController.createFinanceRecord);
router.put('/:id', financeController.updateFinanceRecord);
router.delete('/:id', financeController.deleteFinanceRecord);

module.exports = router;
