const express = require('express');
const router = express.Router();
const financeController = require('../controllers/financeController');

router.get('/finance', financeController.getFinanceData);
router.get('/finance/:year', financeController.getFinanceDataByYear);
router.get('/finance/:year/:month', financeController.getFinanceDataByMonth);

module.exports = router;
