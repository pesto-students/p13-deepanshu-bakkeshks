const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

router.get('/users/:id/assets', userController.getUserAssets);
router.get('/users/:id/finance', userController.getUserFinanceData);

module.exports = router;
